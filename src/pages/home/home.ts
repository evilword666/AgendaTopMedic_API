import { Component, ɵConsole } from '@angular/core';
import { NavController, AlertController, ModalController,ModalOptions } from 'ionic-angular';
import { Http } from '@angular/http'; //https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http
import {DatabaseProvider } from '../../providers/database/database';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from '@ionic-native/native-audio';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';
import { CrearCitaPage } from '../crear-cita/crear-cita';
import { LoadingController } from 'ionic-angular';
import { RequestOptions,Headers } from '@angular/http';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

//Archivo donde estan las funciones: /wp-content/plugins/bkcom/classes/bup.complement.profile.class.php
//Linea 27 donde esta declarada la funcion bup_check_adm_availability_sfaff
//1483 esta mejor explicado

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {    
  
    loading:any;
    isPainted:boolean = false;
    resp:any;
    band=0;
    data:any = {};
    data2:any = {};
    horarios_medico:any;
    numeroFilas:any;
    eventsCalendar = [];
    contadorCitas = 0;
    bodyNotification:string = "Corriendo en segundo plano";
    isIosDevice:boolean=false;
    fechaActual:any;
    
  constructor(private modal:ModalController, private uniqueDeviceID: UniqueDeviceID, public loadingCtrl: LoadingController, public plt: Platform, private localNotifications: LocalNotifications, public nativeAudio: NativeAudio , private backgroundMode: BackgroundMode,public navCtrl: NavController, private http:Http,private alertCtrl: AlertController, private database: DatabaseProvider) {

    this.data.username = '';
    this.data.response = '';    
    this.http = http;  
    this.fechaActual = new Date().toISOString();
    
    if(window.localStorage.getItem("numFilasDBremota") == null){
        window.localStorage.setItem("numFilasDBremota","0")
    }
    
    
    //Precargamos el audio para poder utilizarlo en las notificaciones de una actualizacion de la BD
    this.nativeAudio.preloadSimple('audio1', 'audio/good.mp3').then((msg)=>{
        console.log("message: " + msg);
    }, (error)=>{
        console.log("error: " + error);
    });
  
    this.backgroundMode.setDefaults({
        title: "Agenda TM",
        text: this.bodyNotification,
        icon: 'icon2.png', // this will look for icon.png in platforms/android/res/drawable|mipmap
        color: '65cab6', // hex format like 'F14F4D'
        bigText: true    
    })


    this.uniqueDeviceID.get()
  .then((uuid: any) => {
    console.log("UUID Nuevo: "+uuid)
    localStorage.setItem("UUID_Phone",uuid);


    this.verificarActualizacionDeDatosRemotosEnBackground() //Verificaremos los datos de la BD remota cada 10 segundos
    this.insertIdMedicoToken()

    
  })
  .catch((error: any) => {
    console.log("ERROR Nuevo: "+error)
  });

 

  localStorage.setItem("alertDatosConsultadosLanzada","0")

  
  } //Fin del Constructor

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/          

agregarCita(){
  this.navCtrl.push(CrearCitaPage);  
}



addZero=(i)=>{
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

obtenerFecha(formatoDate){

  let dd = formatoDate.getDate();

  let  mm = formatoDate.getMonth()+1; 
  let yyyy = formatoDate.getFullYear();

  if(dd<10) 
  {
    dd='0'+dd;
  } 

  if(mm<10) 
  {
    mm='0'+mm;
  } 


  let fecha = yyyy+'-'+mm+'-'+dd;
  return fecha;
}

obtenerHora(formatoDate){
  let h = this.addZero(formatoDate.getHours());
  var m = this.addZero(formatoDate.getMinutes());
  var s = this.addZero(formatoDate.getSeconds());
  return h+":"+m+":"+s;
}

verDetallesEventoModal(evento){  

  const myModalOptions:ModalOptions={

    enableBackdropDismiss:false

  }

  const myModal = this.modal.create('ModalPage',{data:evento},myModalOptions);  
  myModal.present();

  myModal.onDidDismiss((data)=>{
    //alert("Ya fui minimizado!!")
    if(this.resp['respValue'] == "200"){
      this.consultarHorariosBDremota2()
    }else{
      this.clearCalendar()
    }
  })
}

actualizarAgenda(){

  localStorage.setItem("alertDatosConsultadosLanzada","0")

this.consultarHorariosBDremota2();

//Mensaje de actualizacion con un spinner
  this.loading = this.loadingCtrl.create({
    spinner: 'circles',
    content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box">Actualizando las citas de su agenda...</div>
      </div>`,
    //duration: 1000
  });

  this.loading.onDidDismiss(() => {
    console.log('Dismissed loading');
  });

  this.loading.present();
  
  

}

// Schedule a single notification
lanzarNotificacion2(){
this.localNotifications.schedule({  
  title: 'Notificacion demo',  
  text:"Mi texto"
});
}

lanzarNotificacion(){ //Hay un problema al tener notificaciones locales y notificaciones push en ios y android > 6
  console.log("Lanzando notificacion\n"+"Titulo: "+localStorage.getItem("TitleNotification")+"\nTexto: "+localStorage.getItem("MessageNotification"))
    this.localNotifications.schedule({
        title: localStorage.getItem("TitleNotification"),
        text: localStorage.getItem("MessageNotification"),
        //attachments: ['file://img/activado.png'],//Pone una imagen en la notificacion
        sound: 'file://audio/good.mp3', //Solo funciona en iOS
        icon: 'file://img/green_notification.png', // this will look for icon.png in platforms/android/res/drawable|mipmap
        foreground: true
    });
}

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/          


ionViewDidLoad() {                                   

this.consultarHorariosBDremota2()


  if (this.plt.is('android')) {
    setInterval(() => {
      if(this.backgroundMode.isActive()==false){
          console.log("checarCambiosNotificacionesRecibidas() En el foreground")
          this.checarCambiosNotificacionesRecibidas()
      }
    }, 3000);   
  }

}
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/          

verificarActualizacionDeDatosRemotosEnBackground(){
    this.backgroundMode.enable(); //Habilitamos el modo background
    //alert("Mensaje desde funcion en fondo")
    
    var resultadoBoolean = this.backgroundMode.isEnabled(); //Esto nos servira para saber si esta habilitado
    //alert("Esta habilitado BackgroundMode: "+resultadoBoolean)

    //Funcion que se ejecuta cuando se minimiza el app
    this.backgroundMode.on("activate").subscribe(()=>{        
        //alert("Imprimiendo datos de fondo...Esta activo")


     


  if(this.plt.is('android')) {
    setInterval(() => {
      if(this.backgroundMode.isActive()==true){
          console.log("checarCambiosNotificacionesRecibidas() En el background")
          this.checarCambiosNotificacionesRecibidas();
      }
    }, 3000); 
  }


    }); 
        
  }

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/           
  public playAudio(){
/*      
    this.backgroundMode.enable();    
    this.backgroundMode.on("activate").subscribe(()=>{
      this.nativeAudio.play("audio1");  
    });
*/    
    this.nativeAudio.play("audio1"),() => console.log('audio1 is done playing');

  }


  /**************************************************************************************************************/
  /**************************************************************************************************************/            
  /**************************************************************************************************************/            
checarCambiosNotificacionesRecibidas(){  
  
  if(localStorage.getItem("NotificacionRecibida") != null){
    console.log("VaLOR DEL ESTADO DE NOTIFICACIONES: "+localStorage.getItem("NotificacionRecibida"))
    //this.backgroundMode.on("activate").subscribe(()=>{  
      if(localStorage.getItem("NotificacionRecibida") == "1"){
          this.consultarHorariosBDremota2()          
      }
    //})
  }  
}
  /**************************************************************************************************************/
  /********** Esta se tiene que ejecutar para obtener los datos de la BD en el servidor de expediente ***********/
  /**************************************************************************************************************/          
  consultarHorariosBDremota2(){
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    headers.append('Authorization','Token '+window.localStorage.getItem("id_doctor")) //Aqui se agrega el key del medico obtenido del login

    let options = new RequestOptions({ headers: headers });

    //alert(JSON.stringify(options))
    
      console.log("Estado notificacion recibida: "+localStorage.getItem("NotificacionRecibida"))     

      //var link = 'http://104.248.176.189:8001/api/v1/patients/';
      var link = 'http://104.248.176.189:8001/api/v1/doctor/mov/citas/';
      
      var id_medico = JSON.stringify({id_medico: window.localStorage.getItem("id_doctor")});
         
      
        this.http.get(link, options)
        .subscribe(data => {
            this.data.response = data["_body"]; 

            this.resp = JSON.parse(this.data.response);

//alert(JSON.stringify(this.resp))
//alert(JSON.stringify(this.resp['results']))

//console.log(JSON.stringify(this.resp))

 //                 if(this.resp['respValue'] == "200" ){
                    
                    //this.horarios_medico = this.resp['results'];//Datos de usuarios
                    this.horarios_medico = this.resp;//Datos de usuarios

                    this.numeroFilas = JSON.stringify(this.resp['count']);
                    //alert(JSON.stringify(this.horarios_medico[0]['Paciente']['id']))
                    //alert(JSON.stringify(this.horarios_medico[1]))
                    //alert(JSON.stringify(this.horarios_medico[2]))
                    console.log(this.horarios_medico['results']['Paciente'])
                    //alert(Object.keys(this.horarios_medico['results']).length)
                    //console.log("\n\nResultado consulta: "+JSON.stringify(this.horarios_medico))
                    //console.log("\n\nResultado consulta[0]: "+JSON.stringify(this.horarios_medico[0]))
                    //console.log("\n\nResultado consulta[1]: "+JSON.stringify(this.horarios_medico[1]))
                    window.localStorage.setItem("numFilasDBActual",this.numeroFilas)
                    //alert("LocalStorageXD: "+window.localStorage.getItem("numFilasDBremota")+" numberFilas:"+this.numeroFilas)
                                  
                    //Limpiamos la BD local para poder insertar los nuevos valores de la BD remota
                    //alert("Hay datos nuevos que agregar ")
                    this.isPainted = false;
                    this.eventsCalendar.splice(0,this.eventsCalendar.length) //Vaciar el arreglo que contiene los elementos a pintar en el calendario
                    this.clearTable();       
                    //alert("Estado notificacion: "+localStorage.getItem("NotificacionRecibida"))
                    if(localStorage.getItem("NotificacionRecibida")=="1"){
                      //alert("Ha llegado una notificacion!")
                      this.lanzarNotificacion();
                    }
                    //this.playAudio(); //Esta funcion la utilizabamos antes de usar las notificaciones
                    localStorage.setItem("NotificacionRecibida","0")

//               }else if(this.resp['respValue'] == "400"){
                  /*
                  this.loading.dismiss(); 
                  this.clearCalendar()
                  if(localStorage.getItem("alertDatosConsultadosLanzada") == "0"){
                    alert("No hay citas disponibles")
                    this.clearCalendar()
                  }
                  localStorage.setItem("alertDatosConsultadosLanzada","1")

                }
*/              

        },  error => {
            console.log("Oooops!");
            alert("XD No se pudieron enviar los datos\nIntentelo mas tarde: ->"+error);
            });
            localStorage.setItem("NotificacionRecibida","0") 


  
  }

  clearCalendar(){
    //alert("Tam de arrayCitas: "+this.eventsCalendar.length)
    this.eventsCalendar = []; 
    this.eventSource = this.addSchedules(" "," "," "," "); 
    localStorage.setItem("NotificacionRecibida","0")
  }


  /**************************************************************************************************************/
  /**************************************************************************************************************/            
  /**************************************************************************************************************/            

  insertIdMedicoToken(){    
    
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    headers.append('Authorization','Token '+window.localStorage.getItem("id_doctor")) //Aqui se agrega el key del medico obtenido del login


    let options = new RequestOptions({ headers: headers });

    var link = 'http://104.248.176.189:8001/api/v1/doctor/mov/token/'+window.localStorage.getItem("id_API_medico");
    var credentials = JSON.stringify({"token_firebase":localStorage.getItem("phoneToken"),"uid_phone":localStorage.getItem("UUID_Phone")});


    try {

    this.http.put(link, credentials,options)                  
    .subscribe(data => {

      console.log(data)
      this.data.response = data["_body"]; 
      var resp = JSON.parse(this.data.response);

        //alert(JSON.stringify(resp))

      }, error => {
        //alert(error)
        console.log(error)
        //alert("Error")
        //alert(JSON.stringify(error))
        //alert(error['status']) //Nos da el codigo del tipo de error 

        let stringError = error+" ";
        let typeError = stringError.indexOf("401") > -1; //Buscamos la subcadena 401 que indica error de credenciales, devuelve un booleano true si lo encuentra

        //Aqui clasificaremos los errores obtenidos en el servidor
        if(error['status'] == "401"){
          //this.errorLogin()
        }else if(error['status'] == "0"){
          //this.errorConexion();
        }else if(error['status'] == "429"){
          //this.errorUsuarioBaneado()
        }
  
        console.log("Oooops!");
        this.loading.dismiss(); 

      });

    } catch (error) {
      //console.log("Catch: "+error)
      alert("Hay un error en el servidor")
    }
          
  }
  /**************************************************************************************************************/
  /**************************************************************************************************************/            
  /**************************************************************************************************************/            

  agregarCitaManualmente(){
    
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    headers.append('Authorization','Token '+window.localStorage.getItem("id_doctor")) //Aqui se agrega el key del medico obtenido del login


    let options = new RequestOptions({ headers: headers });

    var link = 'http://104.248.176.189:8001/api/v1/doctor/mov/citas/';
    //var credentials = JSON.stringify({"token_firebase":localStorage.getItem("phoneToken"),"uid_phone":localStorage.getItem("UUID_Phone")});
    
    var dict2 = []; 
    dict2.push({
      "id":"7",
    });


    var dict = new Object();
    dict = {
      "id": "7"
    };
    
    var dict3 = { "id": "7"};

    interface IPerson {
      id: string;
   }
   
   var persons: { [id: string]: IPerson; } = {
    "p1": { id: "7" }
 };

    //alert(JSON.stringify(typeof(dict)))
    //alert(JSON.stringify(typeof(dict2)))
    //alert(JSON.stringify(typeof(dict3)))
    //alert((Math.floor(Math.random() * 6) + 1 ).toString)

    var credentials = JSON.stringify({

      "fecha_cita": "2019-05-30",
      "hora_inicio": "13:00:00",
      "hora_final": "13:30:00",
      //"Paciente": Math.floor(Math.random() * 6) + 1  
      "Paciente": 6
    });

    try {

    this.http.post(link, credentials,options)                  
    .subscribe(data => {

      console.log(data)
      this.data.response = data["_body"]; 
      var resp = JSON.parse(this.data.response);

        alert(JSON.stringify(resp))

      }, error => {
        //alert(error)
        console.log(error)
        alert("Error")
        alert(JSON.stringify(error))
        //alert(error['status']) //Nos da el codigo del tipo de error 

        let stringError = error+" ";
        let typeError = stringError.indexOf("401") > -1; //Buscamos la subcadena 401 que indica error de credenciales, devuelve un booleano true si lo encuentra

        //Aqui clasificaremos los errores obtenidos en el servidor
        if(error['status'] == "401"){
          //this.errorLogin()
        }else if(error['status'] == "0"){
          //this.errorConexion();
        }else if(error['status'] == "429"){
          //this.errorUsuarioBaneado()
        }
  
        console.log("Oooops!");
        this.loading.dismiss(); 

      });

    } catch (error) {
      //console.log("Catch: "+error)
      alert("Hay un error en el servidor")
    }
          
  }
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/  
     
almacenarHorariosEnLocalBD(id_cita: string, fecha_cita:string, hora_inicio:string, hora_final: string, enlace_videochat: string,tipo_servicio:string, descripcion:string, antecedentes_principales: string, id_medico:string, id_paciente:string, nombre: string,apellido_paterno:string,apellido_materno:string, sexo:string, edad:string, numCitas:number ){
 //alert("Entrando a la funcion de almacenamieto")
  this.database.almacenarCitasEnBD(id_cita, fecha_cita, hora_inicio, hora_final, enlace_videochat,tipo_servicio, descripcion, antecedentes_principales, id_medico, id_paciente, nombre, apellido_paterno,apellido_materno,sexo,edad, numCitas).then((data) =>{                
        //console.log(JSON.stringify("Numero de datos insertados: "+data))
        
        if(JSON.stringify(data) == numCitas+""){
            //alert("Se agregaron todas las citas de la BD remota a la DB local")
            this.getCitas();
        }

    },(error) => {
        console.log("Error al alamacenar datos de consulta de API: "+error)
        //alert("xdxdxd: "+error)
        //alert("Error al crear: "+error)
    })
    
}
/**************************************************************************************************************/
/*************** Con esta funcion obtendremos las citas del medico almacenadas en la BD local *****************/
/**************************************************************************************************************/
getCitas(){
    this.eventsCalendar = []; //Vaciamos el arreglo por si tiene eventos anteriores
    
    //Usamos la funcion creada en el proveedor database.ts para obtener los datos de las citas
    this.database.obtenerCitas().then((data: any) => {
      //console.log("Resultado getCitas(): "+JSON.stringify(data.length));

        //if(this.contadorCitas == 0){

            //alert("Ahora pintaremos "+data.length+" citas en el calendario")
            for (let i = 0; i < data.length; i++) {
                const element = data[i];            
                
                let fecha_consulta_g = JSON.stringify(data[i]['fecha_cita'])
                let hora_g = JSON.stringify(data[i]['hora_inicio'])
                let horb_g = JSON.stringify(data[i]['hora_final'])
                let descripcion_g = JSON.stringify(data[i]['descripcion'])


                let fecha_consulta_SC = fecha_consulta_g.replace(/"/g, ''); 
                var hora_SC = hora_g.replace(/"/g, ''); 
                var horb_SC = horb_g.replace(/"/g, ''); 
                var descripcion_SC = descripcion_g.replace(/"/g, ''); 

                
                //alert("Desde funcion getcitas principal : Fecha "+fecha_consulta_SC+" Hora: "+hora_SC+" "+" Hora Fin"+horb_SC)
                //Con esta linea mandamos a actualizar los eventos de la BD local en el calendario
                this.eventSource = this.addSchedules(fecha_consulta_SC, hora_SC, horb_SC, descripcion_SC);
                this.isPainted = true;
            }
            this.contadorCitas = 1;
/*
        }else{
            alert("Ya no se puede realizar mas consultas")
        }
*/
    }, (error) => {
      console.log(error);
      //alert("error: "+error)
    })
    this.loading.dismiss(); 
  }

/**************************************************************************************************************/
/*************************** Obtener detalles de la cita seleccionana en el calendario ************************/
/**************************************************************************************************************/

getDetallesCitaSeleccionada(fechaCitaSeleccionada,horaInicioCitaSeleccionada,horaFinCitaSeleccionada){  
  //alert("Entrando a funcion para obtener campos de fecha seleccionada")
  //Usamos la funcion creada en el proveedor database.ts para obtener los datos de las citas
  //alert("Fecha: "+fechaCitaSeleccionada+"\nInicio: "+horaInicioCitaSeleccionada+"\nFin: "+horaFinCitaSeleccionada)
  this.database.obtenerCamposCitaSeleccionada(fechaCitaSeleccionada,horaInicioCitaSeleccionada,horaFinCitaSeleccionada).then((data: any) => {
    

          for (let i = 0; i < data.length; i++) {
              const element = data[i];            
              
              var id_cita = JSON.stringify(element['id_cita'])
              var fecha_cita = JSON.stringify(element['fecha_cita'])
              var hora_inicio = JSON.stringify(element['hora_inicio'])
              var hora_final = JSON.stringify(element['hora_final'])
              var enlace_videochat = JSON.stringify(element['enlace_videochat'])
              var tipo_servicio = JSON.stringify(element['tipo_servicio'])
              var descripcion = JSON.stringify(element['descripcion'])
              var antecedentes_principales = JSON.stringify(element['antecedentes_principales'])
              var id_medico = JSON.stringify(element['id_medico'])
              var id_paciente = JSON.stringify(element['id_paciente'])
              var nombre = JSON.stringify(element['nombre'])
              var apellido_paterno = JSON.stringify(element['apellido_paterno'])
              var apellido_materno = JSON.stringify(element['apellido_materno'])
              var sexo = JSON.stringify(element['sexo'])
              var edad = JSON.stringify(element['edad'])

              //alert("id_cita: "+id_cita+" \nfecha_cita: "+fecha_cita+" \nhora_inicio: "+hora_inicio+" \nhora_final: "+hora_final+" \nenlace_videochat: "+enlace_videochat+" \ntipo_servicio: "+tipo_servicio+" \ndescripcion: "+descripcion+" \nantecedentes_principales"+antecedentes_principales+" \nid_paciente: "+id_paciente+" \nnombre: "+nombre+" \napellido_paterno: "+apellido_paterno+" \napellido_materno: "+apellido_materno+" \nsexo:"+sexo+" \nedad: "+edad)
              

              var id_cita_SC = id_cita.replace(/"/g, '');
              var fecha_cita_SC = fecha_cita.replace(/"/g, '');
              var hora_inicio_SC = hora_inicio.replace(/"/g, '');
              var hora_final_SC = hora_final.replace(/"/g, '');
              var enlace_videochat_SC = enlace_videochat.replace(/"/g, '');
              var tipo_servicio_SC = tipo_servicio.replace(/"/g, '');
              var descripcion_SC = descripcion.replace(/"/g, '');
              var antecedentes_principales_SC = antecedentes_principales.replace(/"/g, '');
              var id_medico_SC = id_medico.replace(/"/g, '');
              var id_paciente_SC = id_paciente.replace(/"/g, '');
              var nombre_SC = nombre.replace(/"/g, '');
              var apellido_paterno_SC = apellido_paterno.replace(/"/g, '');
              var apellido_materno_SC = apellido_materno.replace(/"/g, '');
              var sexo_SC = sexo.replace(/"/g, '');
              var edad_SC = edad.replace(/"/g, '');

              let objectNotification = {
                "fecha_consulta": fecha_cita_SC, 
                "hora": hora_inicio_SC, 
                "horb": hora_final_SC, 
                "descripcion": descripcion_SC, 
                "link_token": enlace_videochat_SC, 
                "tipo_servicio": tipo_servicio_SC,
                "booking_id":id_cita_SC,
                "edad_paciente":edad_SC,
                "Sexo":sexo_SC,
                "padecimiento":antecedentes_principales_SC,
                "nombre_completo_paciente":nombre_SC+" "+apellido_paterno_SC+" "+apellido_materno_SC,
                "id_medico":id_medico_SC
              };

              //alert(typeof(objectNotification))
              //alert("Para el modal: \n"+JSON.stringify(objectNotification))
              this.verDetallesEventoModal(objectNotification)
          }    
          
         

  }, (error) => {
    console.log(error);
    alert("error: "+error)
  })
  
}
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/          

  rellenarArregloConConsultaBDremota(){

  if(this.horarios_medico != undefined){

    //this.horarios_medico = this.resp['results'];//Datos de usuarios
    //alert(JSON.stringify(this.horarios_medico[0]['Paciente']['id']))
    var resp2 = this.horarios_medico['results'];
    var nFilas = JSON.parse(this.numeroFilas);

        console.log("Se agregaran "+nFilas+" nuevas filas\n\n\nElementos pos[0]: "+JSON.stringify(resp2[0])+" \n\n\nElementos pos[1]: "+JSON.stringify(resp2[1]))

        //alert("Se agregaran "+nFilas+" nuevas filas\n\n\nElementos pos[0]: "+JSON.stringify(resp2[0])+" \n\n\nElementos pos[1]: "+JSON.stringify(resp2[1]))

        //alert(Object.keys(resp2).length)
//        if(this.resp['respValue'] == "200"){

            for (let i = 0; i < Object.keys(resp2).length; i++) {
              //for (let i = 0; i < nFilas; i++) {
                //const element = this.resp['results'][i];
                const element = resp2[i];


                //alert("Elemento "+i+":\n "+JSON.stringify(element))
                
                var id_cita = JSON.stringify(element['id'])
                var fecha_cita = JSON.stringify(element['fecha_cita'])
                var hora_inicio = JSON.stringify(element['hora_inicio'])
                var hora_final = JSON.stringify(element['hora_final'])
                var enlace_videochat = JSON.stringify(element['enlace_videochat'])
                var tipo_servicio = JSON.stringify(element['tipo_servicio'])
                var descripcion = JSON.stringify(element['descripcion'])
                var antecedentes_principales = JSON.stringify(element['antecedentes_principales'])
                var id_medico = JSON.stringify(element['Doctor'])
                var id_paciente = JSON.stringify(element['Paciente']['id'])
                var nombre = JSON.stringify(element['Paciente']['nombre'])
                var apellido_paterno = JSON.stringify(element['Paciente']['apellido_paterno'])
                var apellido_materno = JSON.stringify(element['Paciente']['apellido_materno'])
                var sexo = JSON.stringify(element['Paciente']['sexo'])
                var edad = JSON.stringify(element['Paciente']['edad'])

                //alert("id_cita: "+id_cita+" \nfecha_cita: "+fecha_cita+" \nhora_inicio: "+hora_inicio+" \nhora_final: "+hora_final+" \nenlace_videochat: "+enlace_videochat+" \ntipo_servicio: "+tipo_servicio+" \ndescripcion: "+descripcion+" \nantecedentes_principales"+antecedentes_principales+" \nid_paciente: "+id_paciente+" \nnombre: "+nombre+" \napellido_paterno: "+apellido_paterno+" \napellido_materno: "+apellido_materno+" \nsexo:"+sexo+" \nedad: "+edad)
                

                var id_cita_SC = id_cita.replace(/"/g, '');
                var fecha_cita_SC = fecha_cita.replace(/"/g, '');
                var hora_inicio_SC = hora_inicio.replace(/"/g, '');
                var hora_final_SC = hora_final.replace(/"/g, '');
                var enlace_videochat_SC = enlace_videochat.replace(/"/g, '');
                var tipo_servicio_SC = tipo_servicio.replace(/"/g, '');
                var descripcion_SC = descripcion.replace(/"/g, '');
                var antecedentes_principales_SC = antecedentes_principales.replace(/"/g, '');
                var id_medico_SC = id_medico.replace(/"/g, '');
                var id_paciente_SC = id_paciente.replace(/"/g, '');
                var nombre_SC = nombre.replace(/"/g, '');
                var apellido_paterno_SC = apellido_paterno.replace(/"/g, '');
                var apellido_materno_SC = apellido_materno.replace(/"/g, '');
                var sexo_SC = sexo.replace(/"/g, '');
                var edad_SC = edad.replace(/"/g, '');

                //alert("Datos a almacenar...")
                //alert("id_cita: "+id_cita_SC+" \nfecha_cita: "+fecha_cita_SC+" \nhora_inicio: "+hora_inicio_SC+" \nhora_final: "+hora_final_SC+" \nenlace_videochat: "+enlace_videochat_SC+" \ntipo_servicio: "+tipo_servicio_SC+" \ndescripcion: "+descripcion_SC+" \nantecedentes_principales"+antecedentes_principales_SC+" \nid_paciente: "+id_paciente_SC+" \nnombre: "+nombre_SC+" \napellido_paterno: "+apellido_paterno_SC+" \napellido_materno: "+apellido_materno_SC+" \nsexo:"+sexo_SC+" \nedad: "+edad_SC)
                
                this.almacenarHorariosEnLocalBD(id_cita_SC, fecha_cita_SC, hora_inicio_SC, hora_final_SC, enlace_videochat_SC,tipo_servicio_SC, descripcion_SC, antecedentes_principales_SC, id_medico_SC, id_paciente_SC, nombre_SC, apellido_paterno_SC,apellido_materno_SC,sexo_SC,edad_SC, nFilas);
            }
            window.localStorage.setItem("numFilasDBremota",window.localStorage.getItem("numFilasDBActual"))
//        }else{
//        alert("Hubo un error en la consulta de los horarios")        
//        }
  }
  }
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/          
clearTable(){

    //alert("Entrando a limpiar tabla local")
    this.database.limpiarTabla().then((data) =>{
        console.log("Tabla Borrada: "+data)
        //alert("Tabla local Borrada!!!");
        //alert("Rellenaremos el arreglo para insertar en la BD local")
        this.rellenarArregloConConsultaBDremota();

    },(error) => {
        console.log("Error no se pudo borrar tabla: "+error)
        alert("Error no se pudo borrar tabla: "+error)
    })
}
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/            
  eventSource;
  viewTitle;
  isToday: boolean;
  calendar = {
      locale: 'es-MX',
      autoSelect: 'true',
      mode: 'month',
      currentDate: new Date()
  }; // these are the variable used by the calendar.
  loadEvents() {
      //this.eventSource = this.createRandomEvents();
      //this.eventSource = this.addEvent();      
          //Formato de la base de datos de Saul
          this.eventsCalendar = [];
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion'); 
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion');
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion'); 
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion');
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion'); 
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion');
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion'); 
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion');
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion'); 
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion');
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion'); 
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion');
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion'); 
      this.eventSource = this.addSchedules('2019-05-10','17:30:00','20:30:00','Mi descripcion'); 
  }

  onViewTitleChanged(title) {
      this.viewTitle = title;
  }
  onEventSelected(event) {
      console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
      //alert(event.title)
      //this.alertDetallesEvento( event.title )
      const miCita = {titulo:event.title,inicio:event.startTime,fin:event.endTime}

      //Aqui separaremos los valores que necesitaremos para hacer la consulta en la BD local
      let fechaCitaSeleccionada = this.obtenerFecha(event.startTime);
      let horaInicioCitaSeleccionada = this.obtenerHora(event.startTime);
      let horaFinCitaSeleccionada = this.obtenerHora(event.endTime);
      //alert (fechaCitaSeleccionada+" "+horaInicioCitaSeleccionada+" "+horaFinCitaSeleccionada)

  
/*
//Eliminar este segmento de codigo pues solo sirve para nostrar el modal en el navegador web
      let objectNotification = {
        "fecha_consulta": fechaCitaSeleccionada, 
        "hora": horaInicioCitaSeleccionada, 
        "horb": horaFinCitaSeleccionada, 
        "descripcion": event.title, 
        "link_token": "jghavdshvdfhagvdfhagvdshnvf", 
        "tipo_servicio": "Video asistencia",
        "booking_id":"8",
        "edad_paciente":"27",
        "Sexo":"Hombre",
        "padecimiento":"Dolor estomacal severo",
        "nombre_completo_paciente":"Xavi Avelino"
      };
      this.verDetallesEventoModal(objectNotification)
*/


      //Aqui ira la consulta a la BD local por fecha y hora 
      let camposDBcitaSeleccionada = this.getDetallesCitaSeleccionada(fechaCitaSeleccionada,horaInicioCitaSeleccionada,horaFinCitaSeleccionada)

      //alert("camposDBcitaSeleccionada: "+JSON.stringify(camposDBcitaSeleccionada))
      ///Aqui enviaremos los parametros consultados al modal para poder visualizarlos
//      this.verDetallesEventoModal(miCita)
//        this.verDetallesEventoModal(camposDBcitaSeleccionada)
           
  }
  changeMode(mode) {
      this.calendar.mode = mode;
  }
  today() {
      this.calendar.currentDate = new Date();
  }
  onTimeSelected(ev) {
      console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
          (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }
  onCurrentDateChanged(event:Date) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      event.setHours(0, 0, 0, 0);
      this.isToday = today.getTime() === event.getTime();

      //alert("Cambio de pantalla")
  }
  ionViewWillEnter(){

    //alert("Entrando a la pagina activa")

  }


  alertDetallesEvento(evento){

    let alert = this.alertCtrl.create({
      title: '<center><h4>Detalles</h4></center>',
      subTitle: evento,
      buttons: ['Aceptar']
    });
    alert.present();
  }
    
/********************************************************************************************************/
/****************************** Funcion para agregar un evento manualmente  *****************************/
/********************************************************************************************************/
  //Agregar eventos uno a uno de la base de datos
  //createEvent(title, location, notes, startDate, endDate)
  addEvent(){

    this.eventsCalendar.splice(0,this.eventsCalendar.length)
    
    var startTime;
    var endTime;
    var events2 = [];

    //Formato de la base de datos de Saul
    startTime = "2019-05-10 17:30:00"
    endTime = "2019-05-10 18:00:00"

    var startTime3v = "2019-05-10 17:30:00"
    var endTime3v = "2019-05-10 17:30:00" 


    var startTimeMOD = startTime;
    //var stm = new Date(startTimeMOD.replace(' ', 'T'));
    var stm = new Date(startTimeMOD.replace(/-/g, '/'));

    var endTimeMOD = endTime;
    //var stmf = new Date(endTimeMOD.replace(' ', 'T'));
    var stmf = new Date(endTimeMOD.replace(/-/g, '/'));

    let startTime2 = new Date(startTime);
    let endTime2 = new Date(endTime);
    
    let startTime3 = new Date(startTime3v);
    let endTime3 = new Date(endTime3v);

    this.eventsCalendar.push({
        title: 'Cita con paciente Jorge',
        startTime: stm,
        endTime: stmf,
        allDay: false        
    },
    {
        title: 'Cita con paciente Maria',
        startTime: stm,
        endTime: stmf,
        allDay: false        
    }

    );


    alert("Se a agregado un evento")
    //alert(startTime2)
    alert("startTime2: "+stm+"\nendTime: "+stmf)
    return this.eventsCalendar;
  }

/********************************************************************************************************/
/********************* Funcion para agregar los horarios descargados desde la BD ************************/
/********************************************************************************************************/

    //Agregar eventos uno a uno de la base de datos
  //createEvent(title, location, notes, startDate, endDate)
  addSchedules(dateM, startHour, endHour, description){
  
    
    var startTime;
    var endTime;
    
     //Formato de la base de datos de Saul
    startTime = dateM+" "+startHour;
    endTime = dateM+" "+endHour; 

    let inicio = new Date(startTime);
    let fin = new Date(endTime);
    

    var startTimeMOD = startTime;
    //var stm = new Date(startTimeMOD.replace(' ', 'T'));
    var stm = new Date(startTimeMOD.replace(/-/g, '/'));

    var endTimeMOD = endTime;
    //var stmf = new Date(endTimeMOD.replace(' ', 'T'));
    var stmf = new Date(endTimeMOD.replace(/-/g, '/'));

    if (this.plt.is('ios')) {
      // This will only print when on iOS
      console.log('I am an iOS device!');

        this.eventsCalendar.push({
          title: description,
          startTime: stm,
          endTime: stmf,
          allDay: false        
        });  

        //alert("stm: "+stm+"\stmf: "+stmf)
        console.log("stm: "+stm+"\stmf: "+stmf)

    }else if (this.plt.is('android')) {
      // This will only print when on iOS
      console.log('I am an android device!');
        this.eventsCalendar.push({
          title: description,
          startTime: inicio,
          endTime: fin, 
          allDay: false     
        });

        //alert("inicio: "+inicio+"\nendTime: "+fin)
        console.log("inicio: "+inicio+"\nendTime: "+fin)
    }

/*
    alert("Se a agregado un evento")    
    alert("startTime: "+startTime+"\nendTime: "+endTime)
    alert("inicio: "+inicio+"\nendTime: "+fin)
    alert("Tamaño arreglo consultas: "+this.eventsCalendar.length)
    alert("Contenido arreglo consultas: "+JSON.stringify(this.eventsCalendar[0]))
    console.log("Contenido arreglo consultas: "+JSON.stringify(this.eventsCalendar[0]))
*/
    
    return this.eventsCalendar;
  }
/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/



  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }


  markDisabled = (date:Date) => {
      var current = new Date();
      current.setHours(0, 0, 0);
      return date < current;
  };
    

}
