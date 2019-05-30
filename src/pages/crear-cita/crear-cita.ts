import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestOptions,Headers,Http } from '@angular/http';
/**
 * Generated class for the CrearCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-cita',
  templateUrl: 'crear-cita.html',
})
export class CrearCitaPage {
  fechaNuevoInicioCita:any;
  fechaNuevoFinCita:any;
  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    this.fechaNuevoInicioCita = new Date().toISOString();
    this.fechaNuevoFinCita = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCitaPage');
    //this.consultarHorariosOcupados()
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


    try {

    this.http.get(link,options)                  
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


      });

    } catch (error) {
      //console.log("Catch: "+error)
      alert("Hay un error en el servidor")
    }   
  }

  agregarCitaManualmente(){
    
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    headers.append('Authorization','Token '+window.localStorage.getItem("id_doctor")) //Aqui se agrega el key del medico obtenido del login
    let options = new RequestOptions({ headers: headers });
    var link = 'http://104.248.176.189:8001/api/v1/doctor/mov/citas/';

    var credentials = JSON.stringify({

      "fecha_cita": "2019-05-30",
      "hora_inicio": "13:00:00",
      "hora_final": "13:30:00",
      "Paciente": 6

    });

    try {

    this.http.post(link, credentials,options)                  
    .subscribe(data => {

      console.log(data)
      this.data.response = data["_body"]; 
      var resp = JSON.parse(this.data.response);

      //alert(JSON.stringify(resp))

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

  
  
}
