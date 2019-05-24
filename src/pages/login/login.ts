import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Http, Headers } from '@angular/http';
import { HomePage } from '../home/home'
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data:any = {};

  user:String;
  pass:String;
  loading:any;
  passwordType:string='password';
  passwordShowed:boolean=false;

  


  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private http: Http) {
    this.data.username = '';
    this.data.response = '';    
    this.http = http;

  }

  ionViewDidLoad() {
    this.user = "surleds@gmail.com";
    this.pass = "b44ESjktTOhNba@6&Y";    
  }

  
  presentLoadingCustom() {
      this.loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">Iniciando sesión...</div>
        </div>`,
      //duration: 5000
    });
  
    this.loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    this.loading.present();
  }

  mostrarPassword(){
    //alert("Entrando a la funcion")
    if(this.passwordShowed){
      this.passwordShowed = false;
      this.passwordType = 'password';
    }else{
      this.passwordShowed = true;
      this.passwordType = 'text';
  
    }
    
  }


  errorLogin() {
    this.loading.dismiss(); 

    let alert = this.alertCtrl.create({
      title: '<center><h4>Error en inicio de sesión</h4></center>',
      subTitle: '<center>Usuario o contraseña incorrectos</center>',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  camposVacios(){

    let alert = this.alertCtrl.create({
      title: '<center><h4>Error en inicio de sesión</h4></center>',
      subTitle: '<center>Ambos campos deben llenarse</center>',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  exitoLogin(){  
    this.loading.dismiss(); 
    this.navCtrl.push(HomePage);    
  }


  login(){    
         

    if(this.user != "" && this.pass != "")
    {
      
      //alert("boton presionado!")
//      var link = 'http://93.104.215.239/ecg_mqtt/DATABASE/agendaMedicos.php';
//      var link = 'https://topmedic.com.mx/accessDatabase/AgendaTopMedicos/agendaMedicos.php';     
      var link = 'https://topmedic.com.mx/accessDatabase/wp_DB/service/recibirDatos.php';            
      var credentials = JSON.stringify({username: this.user,password:this.pass});
      this.presentLoadingCustom();
      
      try {
      

      this.http.post(link, credentials)                  
      .subscribe(data => {
        

        this.data.response = data["_body"]; 

        var resp = JSON.parse(this.data.response);
        //alert(resp['id'])
        //alert(resp['response'])
        
            if(resp['response'] == "200"){
              window.localStorage.setItem("user", String(this.user));  
              window.localStorage.setItem("pass", String(this.pass));  
              window.localStorage.setItem("id_doctor", String(resp['id']));  
              this.exitoLogin();              
            }else{
              this.errorLogin();               
              //this.exitoLogin();
            }
        }, error => {
          console.log("Oooops!");
          this.loading.dismiss(); 
          alert("No se pudieron enviar los datos\nIntentelo mas tarde");          
        });

      } catch (error) {
        alert("Hay un error en el servidor")
      }

      }else{
        this.camposVacios();
      }
}


}
