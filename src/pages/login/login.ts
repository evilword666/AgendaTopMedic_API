import { Component, ɵConsole } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Http, Headers } from '@angular/http';
import { HomePage } from '../home/home'
import { LoadingController } from 'ionic-angular';
import { RequestOptions } from '@angular/http';

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
  options:any;
  


  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private http: Http) {
    this.data.username = '';
    this.data.response = '';    
    this.http = http;

    //alert(window.localStorage.getItem("user"))

    // 
    //window.localStorage.setItem("pass", String(this.pass));  
   if(window.localStorage.getItem("user") != null){
    this.user = window.localStorage.getItem("user");
    this.pass = window.localStorage.getItem("pass");  
   }


  }

  ionViewDidLoad() {
    this.user = "javier@gmail.com";
    this.pass = "lalaland2222";    
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

  errorConexion() {
    this.loading.dismiss(); 

    let alert = this.alertCtrl.create({
      title: '<center><h4>Error de conexión</h4></center>',
      subTitle: `<center>Por favor verifique su conexión a internet</center>`,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  
  errorEstructuraCorreo() {
    this.loading.dismiss(); 

    let alert = this.alertCtrl.create({
      title: '<center><h4>Error con el correo</h4></center>',
      subTitle: `<center>El correo es erroneo, por favor verifiquelo otra vez</center>`,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  errorUsuarioBaneado() {
    this.loading.dismiss(); 

    let alert = this.alertCtrl.create({
      title: '<center><h4>Usuario baneado</h4></center>',
      subTitle: `<center>Usted ha excedido el limite de intentos permitidos</center>`,
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

    const headers = new Headers()
    headers.append('Content-Type','application/json')
    let options = new RequestOptions({ headers: headers });
    
    if(this.user != "" && this.pass != "")
    {

      if( (this.user.indexOf("@") > -1) ){
          

      
      
          var link = 'http://104.248.176.189:8001/rest-auth/login/';
          var credentials = JSON.stringify({"email":this.user,"password":this.pass});
   
          this.presentLoadingCustom();
      
          try {

          this.http.post(link, credentials,options)                  
          .subscribe(data => {

            console.log(data)
            this.data.response = data["_body"]; 
            var resp = JSON.parse(this.data.response);
            //alert(JSON.stringify(resp))
            //alert(resp['user']['id'])

                window.localStorage.setItem("user", String(this.user));  
                window.localStorage.setItem("pass", String(this.pass));  
                window.localStorage.setItem("id_API_medico", String(resp['user']['id']));  
           
                let key = String(resp['key']);
   
                window.localStorage.setItem("id_doctor", key);  

                this.exitoLogin();  

            }, error => {
              //alert(error)
              console.log(error)
              //alert(error['status']) //Nos da el codigo del tipo de error 

              let stringError = error+" ";
              let typeError = stringError.indexOf("401") > -1; //Buscamos la subcadena 401 que indica error de credenciales, devuelve un booleano

              //Aqui clasificaremos los errores obtenidos en el servidor
              if(error['status'] == "401"){
                this.errorLogin()
              }else if(error['status'] == "0"){
                this.errorConexion();
              }else if(error['status'] == "429"){
                this.errorUsuarioBaneado()
              }
          
              console.log("Oooops!");
              this.loading.dismiss(); 

            });

          } catch (error) {
            //console.log("Catch: "+error)
            alert("Hay un error en el servidor")
          }
      }else{
        this.errorEstructuraCorreo()
      }
      }else{
        this.camposVacios();
      }
}


}
