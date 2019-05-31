import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { RequestOptions,Headers,Http } from '@angular/http';
import { DatePicker } from '@ionic-native/date-picker';
import { LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-modificar-cita',
  templateUrl: 'modificar-cita.html',
})
export class ModificarCitaPage {
  fechaNuevoInicioCita:any;
  fechaNuevoFinCita:any;
  fechaSeleccionada:any;
  loading:any;
  horariosDisponibles:any={}
  data:any={}
  horaInicioArray =  new Array(); 
  horaFinArray =  new Array(); 
  HORARIOS = [];
  checkBoxPresionado:boolean=true;
  checked : boolean = false;

//Parametros del modal fecha seleccionada
fecha_consulta="";
hora_inicio="";
hora_fin="";
detalles_cita="";
tipo_servicio="";
link_token="";
link_token_original="";

booking_id="";
edad_paciente="";
Sexo="";
padecimiento="";
nombre_completo_paciente="";
id_medico="";

  
  constructor(public alertController: AlertController, public loadingCtrl: LoadingController, private datePicker: DatePicker, public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    this.fechaSeleccionada = "";
    this.horariosDisponibles.horaInicio = "";
    this.horariosDisponibles.horaFin = "";

    this.fecha_consulta=navParams.get("fecha_consulta");
    this.hora_inicio=navParams.get("hora_inicio");
    this.hora_fin=navParams.get("hora_fin");
    this.detalles_cita=navParams.get("detalles_cita");
    this.tipo_servicio=navParams.get("tipo_servicio");
    this.link_token=navParams.get("link_token");
    this.link_token_original=navParams.get("link_token_original");

    this.booking_id=navParams.get("booking_id");
    this.edad_paciente=navParams.get("edad_paciente");
    this.Sexo=navParams.get("Sexo");
    this.padecimiento=navParams.get("padecimiento");
    this.nombre_completo_paciente=navParams.get("nombre_completo_paciente");
    this.id_medico=navParams.get("unTexto");

//alert(this.fecha_consulta+" "+this.hora_inicio+" "+this.hora_fin+" "+this.fechaSeleccionada+" "+this.tipo_servicio)
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarCitaPage');
  }


  addValue(e): void {
    var isChecked = e.currentTarget.checked;
    console.log(e.currentTarget);//undefined
    console.log(this.checked);//it is working !!!
    //alert(this.checked)
    if(this.checked){
      
    }
  }

  loadingBar() {
    this.loading = this.loadingCtrl.create({
    spinner: 'circles',
    content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box">Cargando horarios disponibles...</div>
      </div>`,
    duration: 3000
  });

  this.loading.onDidDismiss(() => {
    console.log('Dismissed loading');
    this.consultarHorariosOcupados()
  });

  this.loading.present();
}

seleccionaFechaDeCita(){
  //alert("Presionado el boton para seleccionar una hora")
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      locale: 'es_mx',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date =>{ 
        console.log('Fecha seleccionada: ', date)
        this.fechaSeleccionada = this.obtenerFecha(date);
        //this.loadingBar();
      },
      err => console.log('Un error ocurrio mientras se seleccionaba la fecha: ', err)
    );
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


  cancelar(){
    this.navCtrl.pop();
  }

  consultarHorariosOcupados(){

 
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    headers.append('Authorization','Token '+window.localStorage.getItem("id_doctor")) //Aqui se agrega el key del medico obtenido del login
    let options = new RequestOptions({ headers: headers });
    var link = 'http://104.248.176.189:8001/api/v1/doctor/horarios/';
console.log("Entrando a funcion consultarHorariosOcupados()")
    try {

    this.http.get(link,options)                  
    .subscribe(data => {

      console.log(data)
      this.data.response = data["_body"]; 
      var resp = JSON.parse(this.data.response);
      var respString = JSON.stringify(resp['results'])
      var respuestaObj = JSON.parse(respString)

 


            for (let i = 0; i < Object.keys(resp['results']).length; i++) {
                let misHorarios = {
                  horaInicio:respuestaObj[i]['hora_inicio'],
                  horaFin:respuestaObj[i]['hora_final']
                };
              this.HORARIOS.push(misHorarios);
            }
            //alert(JSON.stringify(this.HORARIOS))

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


      });

    } catch (error) {
      //console.log("Catch: "+error)
      alert("Hay un error en el servidor")
    }   
  }


  idCardPresionado(idCard){
    //alert(idCard)
    this.reagendarCitaAlert()
  }


  async reagendarCitaAlert() {
    const alert = await this.alertController.create({
      title: 'Reagendar cita',
      message: 'Realmente desea reagendar esta cita?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('No se realiza ninguna accion');
            //this.retrocederPagina()
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
            this.reagendarCitaAPI()
            //this.view.dismiss();
          }
        }
      ]
    });

    await alert.present();
  }

  reagendarCitaAPI(){
    alert("Su cita ha sido reagendada exitosamente")
    this.navCtrl.pop();
  /*
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    headers.append('Authorization','Token '+window.localStorage.getItem("id_doctor")) 

    let options = new RequestOptions({ headers: headers });
    var link = 'http://104.248.176.189:8001/api/v1/doctor/mov/citas/'+this.data.booking_id;           
    //var credentials = JSON.stringify({id : this.data.link_token_original});
    alert(options)

    try {
    
    this.http.delete(link,options)                  
    .subscribe(data => {

      this.data.response = data["_body"]; 

      var resp = JSON.parse(this.data.response);

      alert("Respuesta: \n\n"+data)

      //alert(resp['id'])
      //alert(resp['response'])
      
          if(resp['response'] == "200"){
 
            //this.exitoEliminacionCita();              
          }else{
            //this.errorEliminacionCita();               
            //this.exitoLogin();
          }
      }, error => {
        alert("Error: "+error)
        console.log(error)
        console.log("Oooops!");
        alert("No se pudieron enviar los datos\nIntentelo mas tarde");          
      });

    } catch (error) {
      alert("Hay un error en el servidor")
    }
  */
  }//Fin funcion reagendarCitaAPI()

  
}
