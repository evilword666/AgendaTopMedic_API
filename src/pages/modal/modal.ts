import { Component, ɵConsole } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';
import { HomePage} from  '../home/home';
import { ModificarCitaPage } from  '../modificar-cita/modificar-cita';
import { DatePicker } from '@ionic-native/date-picker';
import {Http, Headers } from '@angular/http';


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  data:any = {};
  fecha_consulta: String;
  hora_inicio:String;
  hora_fin:String;
  detalles_cita:any;
  tipo_servicio:any;
  link_token:any;
  checkRango:any;

  booking_id:any;
  edad_paciente:any;
  Sexo:any;
  padecimiento:any;
  nombre_completo_paciente:any;
  

  constructor(private http:Http, public alertController: AlertController, private datePicker: DatePicker,public plt: Platform, private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.http = http;  
    this.data.hora_inicio = '';
    this.data.hora_fin = '';    
    this.data.detalles_cita = '';    
    this.data.tipo_servicio = '';  
    this.data.link_token_original = ''; 
    this.data.link_token = '';   
    this.data.fecha_consulta = '';
    this.data.checkRango = '';

    this.data.booking_id='';
    this.data.edad_paciente='';;
    this.data.Sexo='';;
    this.data.padecimiento='';;
    this.data.nombre_completo_paciente='';

  }


  async eliminarCitaAler() {
    const alert = await this.alertController.create({
      title: 'Cancelar cita',
      message: 'Realmente desea cancelar esta cita de su agenda?',
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
            this.eliminarCitaDB()
            this.view.dismiss();
          }
        }
      ]
    });

    await alert.present();
  }

  eliminarCitaDB(){
    var link = 'https://topmedic.com.mx/accessDatabase/wp_DB/service/recibirDatos.php';            
    var credentials = JSON.stringify({booking_key_delete : this.data.link_token_original});
    
    try {
    

    this.http.post(link, credentials)                  
    .subscribe(data => {
      

      this.data.response = data["_body"]; 

      var resp = JSON.parse(this.data.response);
      //alert(resp['id'])
      //alert(resp['response'])
      
          if(resp['response'] == "200"){
 
            this.exitoEliminacionCita();              
          }else{
            this.errorEliminacionCita();               
            //this.exitoLogin();
          }
      }, error => {
        console.log("Oooops!");
        alert("No se pudieron enviar los datos\nIntentelo mas tarde");          
      });

    } catch (error) {
      alert("Hay un error en el servidor")
    }

  }

  exitoEliminacionCita(){
    let alert = this.alertController.create({
      title: '<center><h4>Cita cancelada</h4></center>',
      subTitle: '<center>La cita ha sido cancelada exitosamente</center>',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  errorEliminacionCita(){
    let alert = this.alertController.create({
      title: '<center><h4>Error</h4></center>',
      subTitle: '<center>No se ha podido cancelar la cita</center>',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  ionViewDidLoad(){
    const data = this.navParams.get('data');    

    //alert("En el modal: "+JSON.stringify(data))
    //console.log("En el modal: "+JSON.stringify(data))
    this.data.fecha_consulta = data.fecha_consulta;
    this.data.hora_inicio = data.hora;
    this.data.hora_fin  = data.horb;
    this.data.detalles_cita = data.descripcion;
    this.data.tipo_servicio = data.tipo_servicio;
    this.data.link_token = "https://topmeddr.com:3005/"+data.link_token+"/d";
    this.data.link_token_original = data.link_token;  

    this.data.booking_id=data.booking_id;
    this.data.edad_paciente=data.edad_paciente;
    this.data.Sexo=data.Sexo;
    this.data.padecimiento=data.padecimiento;
    this.data.nombre_completo_paciente=data.nombre_completo_paciente;
    //this.checkRango = this.verificarRangoDeFechasPorCita(this.data.fecha_consulta,this.data.hora_inicio,this.data.hora_fin)
    //alert(this.checkRango)
  }

  verificarRangoDeFechasPorCita(fecha,startHour,endHour){


    var startTime;
    var endTime;
    
     //Formato de la base de datos de Saul
    startTime = fecha+" "+startHour;
    endTime = fecha+" "+endHour; 
    
    var fechaHoy = new Date();
    //Para android
    let inicio = new Date(startTime);
    let fin = new Date(endTime);
    
    //Para iOS tenemos que modificar el formato de fecha
    var startTimeMOD = startTime;
    var stm = new Date(startTimeMOD.replace(/-/g, '/'));

    var endTimeMOD = endTime;
    var stmf = new Date(endTimeMOD.replace(/-/g, '/'));

    if (this.plt.is('ios')) {
  
      if (fechaHoy >= stm && fechaHoy <= stmf) {
        console.log("Esta dentro del rango");
        return true;
      } 
      else {
        console.log("La videoasistencia no puede realizarse");
        return false;
      }

    }else if (this.plt.is('android')) {
  
      if (fechaHoy >= inicio && fechaHoy <= fin) {
        console.log("Esta dentro del rango");
        return true;
      } 
      else {
        console.log("La videoasistencia no puede realizarse");
        return false;
      }
    }
  }


  iniciarVideoconferencia(){    
    //alert(this.data.link_token )
    this.iab.create(this.data.link_token,'_system');
    //var ref = window.open(this.data.link_token, '_blank', 'location=yes');
  }


  closeModal(){
    this.view.dismiss();
  }

  eliminarCita(){
    //alert("Entrando a eliminar la cita")
    this.eliminarCitaAler()

  }


  reasignarCita(){
      //this.navCtrl.push(ModificarCitaPage); 

      this.datePicker.show({
        date: new Date(),
        mode: 'datetime',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
      }).then(date => {
        alert("Su cita ha sido reasignada")
        this.retrocederPagina()
      },
        err => {
          alert('Ha ocurrido un error al tratar de reasignar su cita '+ err)
        }
      );

  }

  retrocederPagina(){
    this.navCtrl.pop();
  }

  updateDataCita(){
    this.navCtrl.push(ModificarCitaPage);  
  }

}
