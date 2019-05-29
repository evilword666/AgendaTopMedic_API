webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CrearCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearCitaPage = /** @class */ (function () {
    function CrearCitaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fechaNuevoInicioCita = new Date().toISOString();
        this.fechaNuevoFinCita = new Date().toISOString();
    }
    CrearCitaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearCitaPage');
    };
    CrearCitaPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    CrearCitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-crear-cita',template:/*ion-inline-start:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/pages/crear-cita/crear-cita.html"*/'<!--\n  Generated template for the CrearCitaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>crearCita</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center>\n\n\n  <ion-list> \n    \n      <ion-item>\n          <ion-label floating>Paciente</ion-label>\n          <ion-input type="text" [(ngModel)]="paciente"></ion-input>\n        </ion-item>\n    \n    <ion-item>\n      <ion-label floating>Fecha de inicio</ion-label>\n      <ion-datetime displayFormat="DD-MM-YYYY HH:mm" [(ngModel)]="fechaNuevoInicioCita"></ion-datetime>\n    </ion-item>\n  \n    <ion-item>        \n      <ion-label floating>Fecha de fin</ion-label>\n      <ion-datetime displayFormat="DD-MM-YYYY HH:mm" [(ngModel)]="fechaNuevoFinCita"></ion-datetime>     \n    </ion-item>        \n    \n    <ion-item>\n        <ion-label floating>Tipo de consulta</ion-label>\n        <ion-input type="text" [(ngModel)]="tipoConsulta"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Tipo de pago</ion-label>\n          <ion-input type="text" [(ngModel)]="tipoPago"></ion-input>\n        </ion-item>\n\n      <p></p>\n  \n  </ion-list>\n  \n  <button ion-button outline item-end icon-left  color="Primary" (click)="cancelar()">Aceptar <br>\n    \n  </button>\n\n  <button ion-button outline item-end icon-left  color="Primary" (click)="cancelar()">Cancelar <br>\n   \n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/pages/crear-cita/crear-cita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CrearCitaPage);
    return CrearCitaPage;
}());

//# sourceMappingURL=crear-cita.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, navCtrl, navParams, alertCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.data = {};
        this.passwordType = 'password';
        this.passwordShowed = false;
        this.data.username = '';
        this.data.response = '';
        this.http = http;
        //alert(window.localStorage.getItem("user"))
        // 
        //window.localStorage.setItem("pass", String(this.pass));  
        if (window.localStorage.getItem("user") != null) {
            this.user = window.localStorage.getItem("user");
            this.pass = window.localStorage.getItem("pass");
        }
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        //this.user = "javier@gmail.com";
        //this.pass = "lalaland2222";    
    };
    LoginPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\">Iniciando sesi\u00F3n...</div>\n        </div>",
        });
        this.loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        this.loading.present();
    };
    LoginPage.prototype.mostrarPassword = function () {
        //alert("Entrando a la funcion")
        if (this.passwordShowed) {
            this.passwordShowed = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShowed = true;
            this.passwordType = 'text';
        }
    };
    LoginPage.prototype.errorLogin = function () {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '<center><h4>Error en inicio de sesión</h4></center>',
            subTitle: '<center>Usuario o contraseña incorrectos</center>',
            buttons: ['Aceptar']
        });
        alert.present();
    };
    LoginPage.prototype.errorConexion = function () {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '<center><h4>Error de conexión</h4></center>',
            subTitle: "<center>Por favor verifique su conexi\u00F3n a internet</center>",
            buttons: ['Aceptar']
        });
        alert.present();
    };
    LoginPage.prototype.errorEstructuraCorreo = function () {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '<center><h4>Error con el correo</h4></center>',
            subTitle: "<center>El correo es erroneo, por favor verifiquelo otra vez</center>",
            buttons: ['Aceptar']
        });
        alert.present();
    };
    LoginPage.prototype.errorUsuarioBaneado = function () {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '<center><h4>Usuario baneado</h4></center>',
            subTitle: "<center>Usted ha excedido el limite de intentos permitidos</center>",
            buttons: ['Aceptar']
        });
        alert.present();
    };
    LoginPage.prototype.camposVacios = function () {
        var alert = this.alertCtrl.create({
            title: '<center><h4>Error en inicio de sesión</h4></center>',
            subTitle: '<center>Ambos campos deben llenarse</center>',
            buttons: ['Aceptar']
        });
        alert.present();
    };
    LoginPage.prototype.exitoLogin = function () {
        this.loading.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (this.user != "" && this.pass != "") {
            if ((this.user.indexOf("@") > -1)) {
                var link = 'http://104.248.176.189:8001/rest-auth/login/';
                var credentials = JSON.stringify({ "email": this.user, "password": this.pass });
                this.presentLoadingCustom();
                try {
                    this.http.post(link, credentials, options)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.data.response = data["_body"];
                        var resp = JSON.parse(_this.data.response);
                        window.localStorage.setItem("user", String(_this.user));
                        window.localStorage.setItem("pass", String(_this.pass));
                        var key = String(resp['key']);
                        window.localStorage.setItem("id_doctor", key);
                        _this.exitoLogin();
                    }, function (error) {
                        //alert(error)
                        console.log(error);
                        //alert(error['status']) //Nos da el codigo del tipo de error 
                        var stringError = error + " ";
                        var typeError = stringError.indexOf("401") > -1; //Buscamos la subcadena 401 que indica error de credenciales, devuelve un booleano
                        //Aqui clasificaremos los errores obtenidos en el servidor
                        if (error['status'] == "401") {
                            _this.errorLogin();
                        }
                        else if (error['status'] == "0") {
                            _this.errorConexion();
                        }
                        else if (error['status'] == "429") {
                            _this.errorUsuarioBaneado();
                        }
                        console.log("Oooops!");
                        _this.loading.dismiss();
                    });
                }
                catch (error) {
                    //console.log("Catch: "+error)
                    alert("Hay un error en el servidor");
                }
            }
            else {
                this.errorEstructuraCorreo();
            }
        }
        else {
            this.camposVacios();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/pages/login/login.html"*/'<ion-toolbar color="primary" class="centrado"><img src="img/logo-header.png" class="headerlogo">\n</ion-toolbar>\n<ion-content text-center>\n\n  <img src="img/doctor_logo.png" width="50%" class="margin" />\n  <ion-list>    \n      <ion-item>\n        <ion-label floating>Usuario</ion-label>\n        <ion-input type="text" [(ngModel)]="user"></ion-input>\n      </ion-item>\n    \n      <ion-item>        \n        <ion-label floating>Contraseña</ion-label>\n        <ion-input [type]="passwordType" [(ngModel)]="pass"></ion-input>\n        <!--<ion-icon name="eye" color="primary" item-end (click)="mostrarPassword()"></ion-icon>-->\n\n        <button ion-button clear item-end large [color]="passwordShowed === true ? \'primary\' : \'danger\'" (click)="mostrarPassword()">\n          <ion-icon name="eye"></ion-icon>\n        </button>        \n      </ion-item>        \n      \n        <p></p>\n\n    </ion-list>\n    \n<!--\n    <button ion-button outline item-end icon-left color="gris" (click)="registrarse()">Registrarse <br>\n    <ion-icon name="md-create"></ion-icon>\n  </button>\n-->\n\n    <button ion-button outline item-end icon-left  color="Primary" (click)="login()">Ingresar <br><!-- loguear -->\n        <ion-icon name="person"></ion-icon>\n    </button>\n<!--\n    <button ion-button outline item-end icon-left  color="Primary" (click)="mostrarPassword()">Mostrar contraseña\n      <ion-icon name="eye"></ion-icon>\n  </button>\n-->        \n<!--\n<ion-fab right bottom >\n  <button ion-fab >\n      <ion-icon name="md-calendar" large></ion-icon>\n   </button>\n   <ion-fab-list side="top"> \n    <button class="option" ion-fab><ion-icon name="md-remove"></ion-icon><ion-label>Eliminar cita</ion-label></button>\n    <button class="option" ion-fab><ion-icon name="md-add"></ion-icon><ion-label>Agregar cita</ion-label></button>\n    <button class="option" ion-fab><ion-icon name="md-refresh"></ion-icon><ion-label>Actualizar cita</ion-label></button>\n  </ion-fab-list>\n</ion-fab>\n-->\n\n\n\n</ion-content>\n\n<ion-footer>\n  \n  <ion-toolbar id="daatlab" color="primary"><span>POWERED BY:</span> <img src="img/daatlab-footer.png">\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/crear-cita/crear-cita.module": [
		293,
		3
	],
	"../pages/login/login.module": [
		294,
		2
	],
	"../pages/modal/modal.module": [
		295,
		0
	],
	"../pages/modificar-cita/modificar-cita.module": [
		296,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crear_cita_crear_cita__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_unique_device_id__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http









//Archivo donde estan las funciones: /wp-content/plugins/bkcom/classes/bup.complement.profile.class.php
//Linea 27 donde esta declarada la funcion bup_check_adm_availability_sfaff
//1483 esta mejor explicado
var HomePage = /** @class */ (function () {
    function HomePage(modal, uniqueDeviceID, loadingCtrl, plt, localNotifications, nativeAudio, backgroundMode, navCtrl, http, alertCtrl, database) {
        var _this = this;
        this.modal = modal;
        this.uniqueDeviceID = uniqueDeviceID;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.localNotifications = localNotifications;
        this.nativeAudio = nativeAudio;
        this.backgroundMode = backgroundMode;
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.isPainted = false;
        this.band = 0;
        this.data = {};
        this.data2 = {};
        this.eventsCalendar = [];
        this.contadorCitas = 0;
        this.bodyNotification = "Corriendo en segundo plano";
        this.isIosDevice = false;
        this.addZero = function (i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        };
        this.calendar = {
            locale: 'es-MX',
            autoSelect: 'true',
            mode: 'month',
            currentDate: new Date()
        }; // these are the variable used by the calendar.
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        this.data.username = '';
        this.data.response = '';
        this.http = http;
        this.fechaActual = new Date().toISOString();
        if (window.localStorage.getItem("numFilasDBremota") == null) {
            window.localStorage.setItem("numFilasDBremota", "0");
        }
        //Precargamos el audio para poder utilizarlo en las notificaciones de una actualizacion de la BD
        this.nativeAudio.preloadSimple('audio1', 'audio/good.mp3').then(function (msg) {
            console.log("message: " + msg);
        }, function (error) {
            console.log("error: " + error);
        });
        this.backgroundMode.setDefaults({
            title: "Agenda TM",
            text: this.bodyNotification,
            icon: 'icon2.png',
            color: '65cab6',
            bigText: true
        });
        this.uniqueDeviceID.get()
            .then(function (uuid) {
            console.log("UUID Nuevo: " + uuid);
            localStorage.setItem("UUID_Phone", uuid);
            _this.verificarActualizacionDeDatosRemotosEnBackground(); //Verificaremos los datos de la BD remota cada 10 segundos
            _this.insertIdMedicoToken();
        })
            .catch(function (error) {
            console.log("ERROR Nuevo: " + error);
        });
        localStorage.setItem("alertDatosConsultadosLanzada", "0");
    } //Fin del Constructor
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    HomePage.prototype.agregarCita = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__crear_cita_crear_cita__["a" /* CrearCitaPage */]);
    };
    HomePage.prototype.obtenerFecha = function (formatoDate) {
        var dd = formatoDate.getDate();
        var mm = formatoDate.getMonth() + 1;
        var yyyy = formatoDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var fecha = yyyy + '-' + mm + '-' + dd;
        return fecha;
    };
    HomePage.prototype.obtenerHora = function (formatoDate) {
        var h = this.addZero(formatoDate.getHours());
        var m = this.addZero(formatoDate.getMinutes());
        var s = this.addZero(formatoDate.getSeconds());
        return h + ":" + m + ":" + s;
    };
    HomePage.prototype.verDetallesEventoModal = function (evento) {
        var _this = this;
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modal.create('ModalPage', { data: evento }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            //alert("Ya fui minimizado!!")
            if (_this.resp['respValue'] == "200") {
                _this.consultarHorariosBDremota2();
            }
            else {
                _this.clearCalendar();
            }
        });
    };
    HomePage.prototype.actualizarAgenda = function () {
        localStorage.setItem("alertDatosConsultadosLanzada", "0");
        this.consultarHorariosBDremota2();
        //Mensaje de actualizacion con un spinner
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: "\n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\">Actualizando las citas de su agenda...</div>\n      </div>",
        });
        this.loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        this.loading.present();
    };
    // Schedule a single notification
    HomePage.prototype.lanzarNotificacion2 = function () {
        this.localNotifications.schedule({
            title: 'Notificacion demo',
            text: "Mi texto"
        });
    };
    HomePage.prototype.lanzarNotificacion = function () {
        console.log("Lanzando notificacion\n" + "Titulo: " + localStorage.getItem("TitleNotification") + "\nTexto: " + localStorage.getItem("MessageNotification"));
        this.localNotifications.schedule({
            title: localStorage.getItem("TitleNotification"),
            text: localStorage.getItem("MessageNotification"),
            //attachments: ['file://img/activado.png'],//Pone una imagen en la notificacion
            sound: 'file://audio/good.mp3',
            icon: 'file://img/green_notification.png',
            foreground: true
        });
    };
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.consultarHorariosBDremota2();
        if (this.plt.is('android')) {
            setInterval(function () {
                if (_this.backgroundMode.isActive() == false) {
                    console.log("checarCambiosNotificacionesRecibidas() En el foreground");
                    _this.checarCambiosNotificacionesRecibidas();
                }
            }, 3000);
        }
    };
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    HomePage.prototype.verificarActualizacionDeDatosRemotosEnBackground = function () {
        var _this = this;
        this.backgroundMode.enable(); //Habilitamos el modo background
        //alert("Mensaje desde funcion en fondo")
        var resultadoBoolean = this.backgroundMode.isEnabled(); //Esto nos servira para saber si esta habilitado
        //alert("Esta habilitado BackgroundMode: "+resultadoBoolean)
        //Funcion que se ejecuta cuando se minimiza el app
        this.backgroundMode.on("activate").subscribe(function () {
            //alert("Imprimiendo datos de fondo...Esta activo")
            if (_this.plt.is('android')) {
                setInterval(function () {
                    if (_this.backgroundMode.isActive() == true) {
                        console.log("checarCambiosNotificacionesRecibidas() En el background");
                        _this.checarCambiosNotificacionesRecibidas();
                    }
                }, 3000);
            }
        });
    };
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    HomePage.prototype.playAudio = function () {
        /*
            this.backgroundMode.enable();
            this.backgroundMode.on("activate").subscribe(()=>{
              this.nativeAudio.play("audio1");
            });
        */
        this.nativeAudio.play("audio1"), function () { return console.log('audio1 is done playing'); };
    };
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    HomePage.prototype.checarCambiosNotificacionesRecibidas = function () {
        if (localStorage.getItem("NotificacionRecibida") != null) {
            console.log("VaLOR DEL ESTADO DE NOTIFICACIONES: " + localStorage.getItem("NotificacionRecibida"));
            //this.backgroundMode.on("activate").subscribe(()=>{  
            if (localStorage.getItem("NotificacionRecibida") == "1") {
                this.consultarHorariosBDremota2();
            }
            //})
        }
    };
    /**************************************************************************************************************/
    /********** Esta se tiene que ejecutar para obtener los datos de la BD en el servidor de expediente ***********/
    /**************************************************************************************************************/
    HomePage.prototype.consultarHorariosBDremota2 = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + window.localStorage.getItem("id_doctor")); //Aqui se agrega el key del medico obtenido del login
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //alert(JSON.stringify(options))
        console.log("Estado notificacion recibida: " + localStorage.getItem("NotificacionRecibida"));
        //var link = 'http://104.248.176.189:8001/api/v1/patients/';
        var link = 'http://104.248.176.189:8001/api/v1/doctor/mov/citas/';
        var id_medico = JSON.stringify({ id_medico: window.localStorage.getItem("id_doctor") });
        this.http.get(link, options)
            .subscribe(function (data) {
            _this.data.response = data["_body"];
            _this.resp = JSON.parse(_this.data.response);
            //alert(JSON.stringify(this.resp))
            //alert(JSON.stringify(this.resp['results']))
            //console.log(JSON.stringify(this.resp))
            //                 if(this.resp['respValue'] == "200" ){
            //this.horarios_medico = this.resp['results'];//Datos de usuarios
            _this.horarios_medico = _this.resp; //Datos de usuarios
            _this.numeroFilas = JSON.stringify(_this.resp['count']);
            //alert(JSON.stringify(this.horarios_medico[0]['Paciente']['id']))
            //alert(JSON.stringify(this.horarios_medico[1]))
            //alert(JSON.stringify(this.horarios_medico[2]))
            console.log(_this.horarios_medico['results']['Paciente']);
            //alert(Object.keys(this.horarios_medico['results']).length)
            //console.log("\n\nResultado consulta: "+JSON.stringify(this.horarios_medico))
            //console.log("\n\nResultado consulta[0]: "+JSON.stringify(this.horarios_medico[0]))
            //console.log("\n\nResultado consulta[1]: "+JSON.stringify(this.horarios_medico[1]))
            window.localStorage.setItem("numFilasDBActual", _this.numeroFilas);
            //alert("LocalStorageXD: "+window.localStorage.getItem("numFilasDBremota")+" numberFilas:"+this.numeroFilas)
            //Limpiamos la BD local para poder insertar los nuevos valores de la BD remota
            //alert("Hay datos nuevos que agregar ")
            _this.isPainted = false;
            _this.eventsCalendar.splice(0, _this.eventsCalendar.length); //Vaciar el arreglo que contiene los elementos a pintar en el calendario
            _this.clearTable();
            //alert("Estado notificacion: "+localStorage.getItem("NotificacionRecibida"))
            if (localStorage.getItem("NotificacionRecibida") == "1") {
                //alert("Ha llegado una notificacion!")
                _this.lanzarNotificacion();
            }
            //this.playAudio(); //Esta funcion la utilizabamos antes de usar las notificaciones
            localStorage.setItem("NotificacionRecibida", "0");
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
        }, function (error) {
            console.log("Oooops!");
            alert("XD No se pudieron enviar los datos\nIntentelo mas tarde: ->" + error);
        });
        localStorage.setItem("NotificacionRecibida", "0");
    };
    HomePage.prototype.clearCalendar = function () {
        //alert("Tam de arrayCitas: "+this.eventsCalendar.length)
        this.eventsCalendar = [];
        this.eventSource = this.addSchedules(" ", " ", " ", " ");
        localStorage.setItem("NotificacionRecibida", "0");
    };
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    HomePage.prototype.insertIdMedicoToken = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + window.localStorage.getItem("id_doctor")); //Aqui se agrega el key del medico obtenido del login
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var link = 'http://104.248.176.189:8001/api/v1/doctor/mov/token/7';
        var credentials = JSON.stringify({ "token_firebase": localStorage.getItem("phoneToken"), "uid_phone": localStorage.getItem("UUID_Phone") });
        try {
            this.http.put(link, credentials, options)
                .subscribe(function (data) {
                console.log(data);
                _this.data.response = data["_body"];
                var resp = JSON.parse(_this.data.response);
                //alert(JSON.stringify(resp))
            }, function (error) {
                //alert(error)
                console.log(error);
                //alert("Error")
                //alert(JSON.stringify(error))
                //alert(error['status']) //Nos da el codigo del tipo de error 
                var stringError = error + " ";
                var typeError = stringError.indexOf("401") > -1; //Buscamos la subcadena 401 que indica error de credenciales, devuelve un booleano true si lo encuentra
                //Aqui clasificaremos los errores obtenidos en el servidor
                if (error['status'] == "401") {
                    //this.errorLogin()
                }
                else if (error['status'] == "0") {
                    //this.errorConexion();
                }
                else if (error['status'] == "429") {
                    //this.errorUsuarioBaneado()
                }
                console.log("Oooops!");
                _this.loading.dismiss();
            });
        }
        catch (error) {
            //console.log("Catch: "+error)
            alert("Hay un error en el servidor");
        }
    };
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    HomePage.prototype.agregarCitaManualmente = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + window.localStorage.getItem("id_doctor")); //Aqui se agrega el key del medico obtenido del login
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var link = 'http://104.248.176.189:8001/api/v1/doctor/mov/citas/';
        //var credentials = JSON.stringify({"token_firebase":localStorage.getItem("phoneToken"),"uid_phone":localStorage.getItem("UUID_Phone")});
        var dict2 = [];
        dict2.push({
            "id": "7",
        });
        var dict = new Object();
        dict = {
            "id": "7"
        };
        var dict3 = { "id": "7" };
        var persons = {
            "p1": { id: "7" }
        };
        //alert(JSON.stringify(typeof(dict)))
        //alert(JSON.stringify(typeof(dict2)))
        //alert(JSON.stringify(typeof(dict3)))
        alert(JSON.stringify(persons['p1']));
        var credentials = JSON.stringify({
            "fecha_cita": "2019-05-30",
            "hora_inicio": "13:00:00",
            "hora_final": "13:30:00",
            "Paciente": persons['p1']
        });
        try {
            this.http.post(link, credentials, options)
                .subscribe(function (data) {
                console.log(data);
                _this.data.response = data["_body"];
                var resp = JSON.parse(_this.data.response);
                alert(JSON.stringify(resp));
            }, function (error) {
                //alert(error)
                console.log(error);
                alert("Error");
                alert(JSON.stringify(error));
                //alert(error['status']) //Nos da el codigo del tipo de error 
                var stringError = error + " ";
                var typeError = stringError.indexOf("401") > -1; //Buscamos la subcadena 401 que indica error de credenciales, devuelve un booleano true si lo encuentra
                //Aqui clasificaremos los errores obtenidos en el servidor
                if (error['status'] == "401") {
                    //this.errorLogin()
                }
                else if (error['status'] == "0") {
                    //this.errorConexion();
                }
                else if (error['status'] == "429") {
                    //this.errorUsuarioBaneado()
                }
                console.log("Oooops!");
                _this.loading.dismiss();
            });
        }
        catch (error) {
            //console.log("Catch: "+error)
            alert("Hay un error en el servidor");
        }
    };
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    HomePage.prototype.almacenarHorariosEnLocalBD = function (id_cita, fecha_cita, hora_inicio, hora_final, enlace_videochat, tipo_servicio, descripcion, antecedentes_principales, id_medico, id_paciente, nombre, apellido_paterno, apellido_materno, sexo, edad, numCitas) {
        var _this = this;
        //alert("Entrando a la funcion de almacenamieto")
        this.database.almacenarCitasEnBD(id_cita, fecha_cita, hora_inicio, hora_final, enlace_videochat, tipo_servicio, descripcion, antecedentes_principales, id_medico, id_paciente, nombre, apellido_paterno, apellido_materno, sexo, edad, numCitas).then(function (data) {
            //console.log(JSON.stringify("Numero de datos insertados: "+data))
            if (JSON.stringify(data) == numCitas + "") {
                //alert("Se agregaron todas las citas de la BD remota a la DB local")
                _this.getCitas();
            }
        }, function (error) {
            console.log("Error al alamacenar datos de consulta de API: " + error);
            //alert("xdxdxd: "+error)
            //alert("Error al crear: "+error)
        });
    };
    /**************************************************************************************************************/
    /*************** Con esta funcion obtendremos las citas del medico almacenadas en la BD local *****************/
    /**************************************************************************************************************/
    HomePage.prototype.getCitas = function () {
        var _this = this;
        this.eventsCalendar = []; //Vaciamos el arreglo por si tiene eventos anteriores
        //Usamos la funcion creada en el proveedor database.ts para obtener los datos de las citas
        this.database.obtenerCitas().then(function (data) {
            //console.log("Resultado getCitas(): "+JSON.stringify(data.length));
            //if(this.contadorCitas == 0){
            //alert("Ahora pintaremos "+data.length+" citas en el calendario")
            for (var i = 0; i < data.length; i++) {
                var element = data[i];
                var fecha_consulta_g = JSON.stringify(data[i]['fecha_cita']);
                var hora_g = JSON.stringify(data[i]['hora_inicio']);
                var horb_g = JSON.stringify(data[i]['hora_final']);
                var descripcion_g = JSON.stringify(data[i]['descripcion']);
                var fecha_consulta_SC = fecha_consulta_g.replace(/"/g, '');
                var hora_SC = hora_g.replace(/"/g, '');
                var horb_SC = horb_g.replace(/"/g, '');
                var descripcion_SC = descripcion_g.replace(/"/g, '');
                //alert("Desde funcion getcitas principal : Fecha "+fecha_consulta_SC+" Hora: "+hora_SC+" "+" Hora Fin"+horb_SC)
                //Con esta linea mandamos a actualizar los eventos de la BD local en el calendario
                _this.eventSource = _this.addSchedules(fecha_consulta_SC, hora_SC, horb_SC, descripcion_SC);
                _this.isPainted = true;
            }
            _this.contadorCitas = 1;
            /*
                    }else{
                        alert("Ya no se puede realizar mas consultas")
                    }
            */
        }, function (error) {
            console.log(error);
            //alert("error: "+error)
        });
        this.loading.dismiss();
    };
    /**************************************************************************************************************/
    /*************************** Obtener detalles de la cita seleccionana en el calendario ************************/
    /**************************************************************************************************************/
    HomePage.prototype.getDetallesCitaSeleccionada = function (fechaCitaSeleccionada, horaInicioCitaSeleccionada, horaFinCitaSeleccionada) {
        var _this = this;
        //alert("Entrando a funcion para obtener campos de fecha seleccionada")
        //Usamos la funcion creada en el proveedor database.ts para obtener los datos de las citas
        //alert("Fecha: "+fechaCitaSeleccionada+"\nInicio: "+horaInicioCitaSeleccionada+"\nFin: "+horaFinCitaSeleccionada)
        this.database.obtenerCamposCitaSeleccionada(fechaCitaSeleccionada, horaInicioCitaSeleccionada, horaFinCitaSeleccionada).then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var element = data[i];
                var id_cita = JSON.stringify(element['id_cita']);
                var fecha_cita = JSON.stringify(element['fecha_cita']);
                var hora_inicio = JSON.stringify(element['hora_inicio']);
                var hora_final = JSON.stringify(element['hora_final']);
                var enlace_videochat = JSON.stringify(element['enlace_videochat']);
                var tipo_servicio = JSON.stringify(element['tipo_servicio']);
                var descripcion = JSON.stringify(element['descripcion']);
                var antecedentes_principales = JSON.stringify(element['antecedentes_principales']);
                var id_medico = JSON.stringify(element['id_medico']);
                var id_paciente = JSON.stringify(element['id_paciente']);
                var nombre = JSON.stringify(element['nombre']);
                var apellido_paterno = JSON.stringify(element['apellido_paterno']);
                var apellido_materno = JSON.stringify(element['apellido_materno']);
                var sexo = JSON.stringify(element['sexo']);
                var edad = JSON.stringify(element['edad']);
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
                var objectNotification = {
                    "fecha_consulta": fecha_cita_SC,
                    "hora": hora_inicio_SC,
                    "horb": hora_final_SC,
                    "descripcion": descripcion_SC,
                    "link_token": enlace_videochat_SC,
                    "tipo_servicio": tipo_servicio_SC,
                    "booking_id": id_cita_SC,
                    "edad_paciente": edad_SC,
                    "Sexo": sexo_SC,
                    "padecimiento": antecedentes_principales_SC,
                    "nombre_completo_paciente": nombre_SC + " " + apellido_paterno_SC + " " + apellido_materno_SC,
                    "id_medico": id_medico_SC
                };
                //alert(typeof(objectNotification))
                //alert("Para el modal: \n"+JSON.stringify(objectNotification))
                _this.verDetallesEventoModal(objectNotification);
            }
        }, function (error) {
            console.log(error);
            alert("error: " + error);
        });
    };
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    HomePage.prototype.rellenarArregloConConsultaBDremota = function () {
        if (this.horarios_medico != undefined) {
            //this.horarios_medico = this.resp['results'];//Datos de usuarios
            //alert(JSON.stringify(this.horarios_medico[0]['Paciente']['id']))
            var resp2 = this.horarios_medico['results'];
            var nFilas = JSON.parse(this.numeroFilas);
            console.log("Se agregaran " + nFilas + " nuevas filas\n\n\nElementos pos[0]: " + JSON.stringify(resp2[0]) + " \n\n\nElementos pos[1]: " + JSON.stringify(resp2[1]));
            //alert("Se agregaran "+nFilas+" nuevas filas\n\n\nElementos pos[0]: "+JSON.stringify(resp2[0])+" \n\n\nElementos pos[1]: "+JSON.stringify(resp2[1]))
            //alert(Object.keys(resp2).length)
            //        if(this.resp['respValue'] == "200"){
            for (var i = 0; i < Object.keys(resp2).length; i++) {
                //for (let i = 0; i < nFilas; i++) {
                //const element = this.resp['results'][i];
                var element = resp2[i];
                //alert("Elemento "+i+":\n "+JSON.stringify(element))
                var id_cita = JSON.stringify(element['id']);
                var fecha_cita = JSON.stringify(element['fecha_cita']);
                var hora_inicio = JSON.stringify(element['hora_inicio']);
                var hora_final = JSON.stringify(element['hora_final']);
                var enlace_videochat = JSON.stringify(element['enlace_videochat']);
                var tipo_servicio = JSON.stringify(element['tipo_servicio']);
                var descripcion = JSON.stringify(element['descripcion']);
                var antecedentes_principales = JSON.stringify(element['antecedentes_principales']);
                var id_medico = JSON.stringify(element['Doctor']);
                var id_paciente = JSON.stringify(element['Paciente']['id']);
                var nombre = JSON.stringify(element['Paciente']['nombre']);
                var apellido_paterno = JSON.stringify(element['Paciente']['apellido_paterno']);
                var apellido_materno = JSON.stringify(element['Paciente']['apellido_materno']);
                var sexo = JSON.stringify(element['Paciente']['sexo']);
                var edad = JSON.stringify(element['Paciente']['edad']);
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
                this.almacenarHorariosEnLocalBD(id_cita_SC, fecha_cita_SC, hora_inicio_SC, hora_final_SC, enlace_videochat_SC, tipo_servicio_SC, descripcion_SC, antecedentes_principales_SC, id_medico_SC, id_paciente_SC, nombre_SC, apellido_paterno_SC, apellido_materno_SC, sexo_SC, edad_SC, nFilas);
            }
            window.localStorage.setItem("numFilasDBremota", window.localStorage.getItem("numFilasDBActual"));
            //        }else{
            //        alert("Hubo un error en la consulta de los horarios")        
            //        }
        }
    };
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    /**************************************************************************************************************/
    HomePage.prototype.clearTable = function () {
        var _this = this;
        //alert("Entrando a limpiar tabla local")
        this.database.limpiarTabla().then(function (data) {
            console.log("Tabla Borrada: " + data);
            //alert("Tabla local Borrada!!!");
            //alert("Rellenaremos el arreglo para insertar en la BD local")
            _this.rellenarArregloConConsultaBDremota();
        }, function (error) {
            console.log("Error no se pudo borrar tabla: " + error);
            alert("Error no se pudo borrar tabla: " + error);
        });
    };
    HomePage.prototype.loadEvents = function () {
        //this.eventSource = this.createRandomEvents();
        //this.eventSource = this.addEvent();      
        //Formato de la base de datos de Saul
        this.eventsCalendar = [];
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
        this.eventSource = this.addSchedules('2019-05-10', '17:30:00', '20:30:00', 'Mi descripcion');
    };
    HomePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    HomePage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        //alert(event.title)
        //this.alertDetallesEvento( event.title )
        var miCita = { titulo: event.title, inicio: event.startTime, fin: event.endTime };
        //Aqui separaremos los valores que necesitaremos para hacer la consulta en la BD local
        var fechaCitaSeleccionada = this.obtenerFecha(event.startTime);
        var horaInicioCitaSeleccionada = this.obtenerHora(event.startTime);
        var horaFinCitaSeleccionada = this.obtenerHora(event.endTime);
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
        var camposDBcitaSeleccionada = this.getDetallesCitaSeleccionada(fechaCitaSeleccionada, horaInicioCitaSeleccionada, horaFinCitaSeleccionada);
        //alert("camposDBcitaSeleccionada: "+JSON.stringify(camposDBcitaSeleccionada))
        ///Aqui enviaremos los parametros consultados al modal para poder visualizarlos
        //      this.verDetallesEventoModal(miCita)
        //        this.verDetallesEventoModal(camposDBcitaSeleccionada)
    };
    HomePage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    HomePage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    HomePage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    HomePage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
        //alert("Cambio de pantalla")
    };
    HomePage.prototype.ionViewWillEnter = function () {
        //alert("Entrando a la pagina activa")
    };
    HomePage.prototype.alertDetallesEvento = function (evento) {
        var alert = this.alertCtrl.create({
            title: '<center><h4>Detalles</h4></center>',
            subTitle: evento,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    /********************************************************************************************************/
    /****************************** Funcion para agregar un evento manualmente  *****************************/
    /********************************************************************************************************/
    //Agregar eventos uno a uno de la base de datos
    //createEvent(title, location, notes, startDate, endDate)
    HomePage.prototype.addEvent = function () {
        this.eventsCalendar.splice(0, this.eventsCalendar.length);
        var startTime;
        var endTime;
        var events2 = [];
        //Formato de la base de datos de Saul
        startTime = "2019-05-10 17:30:00";
        endTime = "2019-05-10 18:00:00";
        var startTime3v = "2019-05-10 17:30:00";
        var endTime3v = "2019-05-10 17:30:00";
        var startTimeMOD = startTime;
        //var stm = new Date(startTimeMOD.replace(' ', 'T'));
        var stm = new Date(startTimeMOD.replace(/-/g, '/'));
        var endTimeMOD = endTime;
        //var stmf = new Date(endTimeMOD.replace(' ', 'T'));
        var stmf = new Date(endTimeMOD.replace(/-/g, '/'));
        var startTime2 = new Date(startTime);
        var endTime2 = new Date(endTime);
        var startTime3 = new Date(startTime3v);
        var endTime3 = new Date(endTime3v);
        this.eventsCalendar.push({
            title: 'Cita con paciente Jorge',
            startTime: stm,
            endTime: stmf,
            allDay: false
        }, {
            title: 'Cita con paciente Maria',
            startTime: stm,
            endTime: stmf,
            allDay: false
        });
        alert("Se a agregado un evento");
        //alert(startTime2)
        alert("startTime2: " + stm + "\nendTime: " + stmf);
        return this.eventsCalendar;
    };
    /********************************************************************************************************/
    /********************* Funcion para agregar los horarios descargados desde la BD ************************/
    /********************************************************************************************************/
    //Agregar eventos uno a uno de la base de datos
    //createEvent(title, location, notes, startDate, endDate)
    HomePage.prototype.addSchedules = function (dateM, startHour, endHour, description) {
        var startTime;
        var endTime;
        //Formato de la base de datos de Saul
        startTime = dateM + " " + startHour;
        endTime = dateM + " " + endHour;
        var inicio = new Date(startTime);
        var fin = new Date(endTime);
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
            console.log("stm: " + stm + "\stmf: " + stmf);
        }
        else if (this.plt.is('android')) {
            // This will only print when on iOS
            console.log('I am an android device!');
            this.eventsCalendar.push({
                title: description,
                startTime: inicio,
                endTime: fin,
                allDay: false
            });
            //alert("inicio: "+inicio+"\nendTime: "+fin)
            console.log("inicio: " + inicio + "\nendTime: " + fin);
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
    };
    /********************************************************************************************************/
    /********************************************************************************************************/
    /********************************************************************************************************/
    HomePage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>{{viewTitle}}</ion-title>\n      <ion-buttons end>\n          <!--<button ion-button (click)="loadEvents()">Load</button>-->\n          <!--<button ion-button (click)="clearCalendar()">Clear</button>-->\n          \n          <button ion-button [disabled]="isToday" (click)="today()">Hoy</button>\n          <button ion-button (click)="changeMode(\'month\')">M</button>\n          <button ion-button (click)="changeMode(\'week\')">S</button>\n          <button ion-button (click)="changeMode(\'day\')">D</button>\n       \n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">\n  <calendar [eventSource]="eventSource"\n            [calendarMode]="calendar.mode"\n            [currentDate]="calendar.currentDate"\n            [locale]="calendar.locale"\n            \n            (onCurrentDateChanged)="onCurrentDateChanged($event)"\n            (onEventSelected)="onEventSelected($event)"\n            (onTitleChanged)="onViewTitleChanged($event)"\n            (onTimeSelected)="onTimeSelected($event)"\n            step="30">\n  </calendar>    \n\n  <!-- <button ion-button block (click)="createUser();"> Crear usuario</button>\n  <button ion-button block secondary round (click)="updateCalendar1();"> update Calendar OPC 1</button> \n  <button ion-button block round (click)="updateCalendar2();"> update Calendar OPC 2</button>\n  \n  <button ion-button block color="tem" round (click)="updateCalendar3();"> update Calendar OPC 3</button>\n\n  <button ion-button block (click)="consultarHorariosBDremota();"> Consultar horarios BD remota</button>\n\n  \n  <button ion-button block (click)="clearTable();"> Vaciar base de datos</button>\n  \n  <button ion-button block color="sec" (click)="getCitas();"> Obtener citas de la BD</button>\n  \n  <button ion-button (click)="playAudio()">Play audio</button>\n  \n  <button ion-button (click)="lanzarNotificacion()">Lanzar notificacion</button>\n  <button ion-button (click)="lanzarNotificacion2()">Lanzar notificacion 2</button>\n-->\n  \n<ion-fab right bottom #fab >\n    <button ion-fab (click)="actualizarAgenda()">\n        <ion-icon name="md-refresh" large></ion-icon>\n        <!-- <ion-img src="img/update2.png"></ion-img> -->\n     </button>\n  </ion-fab>\n\n  \n  <ion-fab left bottom #fab >\n    <!--<button ion-fab (click)="agregarCita()">-->\n    <button ion-fab (click)="agregarCitaManualmente()">\n        \n        <ion-icon name="md-add" large></ion-icon>\n     </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_unique_device_id__["a" /* UniqueDeviceID */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(storage) {
        var _this = this;
        this.storage = storage;
        this.contador = 0;
        console.log('Hello DatabaseProvider Provider');
        if (!this.isOpen) {
            this.storage = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]();
            this.storage.create({ name: "topmedic11.db", location: "default" }).then(function (db) {
                _this.db = db;
                /*
                        db.executeSql("CREATE TABLE IF NOT EXISTS tb_datos_Pacientes (id INTEGER PRIMARY KEY AUTOINCREMENT, fecha_consulta text, hora text, horb text, descripcion text, link_token text, tipo_servicio text, booking_id text,edad_paciente text,Sexo text,padecimiento text, nombre_completo_paciente text)", []).then(()=>{
                            db.executeSql("CREATE TABLE IF NOT EXISTS tb_citas_pacientes (id INTEGER PRIMARY KEY AUTOINCREMENT, id_T text, fecha_cita text, titulo text, descripcion text, hora_inicio text, tipo_servicio text, booking_id text,edad_paciente text,Sexo text,padecimiento text, nombre_completo_paciente text)", []).then(()=>{
                                db.executeSql("CREATE TABLE IF NOT EXISTS tb_servicios_medicos (id INTEGER PRIMARY KEY AUTOINCREMENT, id_T text, fecha_cita text, titulo text, descripcion text, hora_inicio text, tipo_servicio text, booking_id text,edad_paciente text,Sexo text,padecimiento text, nombre_completo_paciente text)", []).then(()=>{
                                    db.executeSql("CREATE TABLE IF NOT EXISTS tb_horarios_medicos (id INTEGER PRIMARY KEY AUTOINCREMENT, id_T text, fecha_cita text, titulo text, descripcion text, hora_inicio text, tipo_servicio text, booking_id text,edad_paciente text,Sexo text,padecimiento text, nombre_completo_paciente text)", []).then(()=>{
                                    }).catch((err)=>console.log("Error al tratar de crear la tabla tb_horarios_medicos", err));
                                }).catch((err)=>console.log("Error al tratar de crear la tabla tb_servicios_medicos", err));
                            }).catch((err)=>console.log("Error al tratar de crear la tabla tb_citas_pacientes", err));
                        }).catch((err)=>console.log("Error al crear la tabla tb_datos_Pacientes", err));
                */
                db.executeSql("CREATE TABLE IF NOT EXISTS tb_datos_citas_pacientes (id INTEGER PRIMARY KEY AUTOINCREMENT, id_cita text, fecha_cita text, hora_inicio text, hora_final text, enlace_videochat text, tipo_servicio text, descripcion text,antecedentes_principales text,id_medico text, id_paciente text,nombre text, apellido_paterno text,apellido_materno text, sexo text, edad text)", []).then(function () {
                    console.log("Tabla tb_citas_medicos creada exitosamente!");
                }).catch(function (err) { return console.log("Error al tratar de crear la tabla tb_horarios_medicos", err); });
                _this.isOpen = true;
            }).catch(function (error) {
                console.log("Error en la BD: " + error);
            });
        }
    }
    /***********************************************************************************************************/
    /***************************** Funciones para almacenar datos la primera vez *******************************/
    /***********************************************************************************************************/
    DatabaseProvider.prototype.almacenarCitasEnBD = function (id_cita, fecha_cita, hora_inicio, hora_final, enlace_videochat, tipo_servicio, descripcion, antecedentes_principales, id_medico, id_paciente, nombre, apellido_paterno, apellido_materno, sexo, edad, numCitas) {
        var _this = this;
        console.log("Desde funcion de almacenamiento: \nid_cita: " + id_cita + " \nfecha_cita: " + fecha_cita + " " + " \nhora_inicio: " + hora_inicio + " \nhora_final: " + hora_final + " \nenlace_videochat: " + enlace_videochat + "\ntipo_servicio: " + tipo_servicio + "\ndescripcion: " + descripcion + " \nantecedentes_principales: " + antecedentes_principales + "\nid_medico: " + id_medico + " \nid_paciente: " + id_paciente + " \nnombre: " + nombre + " \napellido_paterno: " + apellido_paterno + "  \napellido_materno: " + apellido_materno + "   \nsexo: " + sexo + "   \nedad: " + edad + " ");
        return new Promise(function (resolve, reject) {
            //id_cita text, fecha_cita text, hora_inicio text, hora_final text, enlace_videochat text, tipo_servicio text, descripcion text,antecedentes_principales text,id_paciente text,nombre text, apellido_paterno text,apellido_materno text, sexo text, edad text   
            //id_cita text, fecha_cita text, hora_inicio text, hora_final text, enlace_videochat text, tipo_servicio text, descripcion text,antecedentes_principales text,id_paciente text,nombre text, apellido_paterno text,apellido_materno text, sexo text, edad text)"
            var sql = "INSERT INTO tb_datos_citas_pacientes (id_cita, fecha_cita, hora_inicio, hora_final, enlace_videochat,tipo_servicio, descripcion, antecedentes_principales, id_medico, id_paciente, nombre, apellido_paterno,apellido_materno,sexo,edad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            _this.db.executeSql(sql, [id_cita, fecha_cita, hora_inicio, hora_final, enlace_videochat, tipo_servicio, descripcion, antecedentes_principales, id_medico, id_paciente, nombre, apellido_paterno, apellido_materno, sexo, edad]).then(function (data) {
                //Aqui iba el resolve  
                //alert("Insercion correcta: "+data)
                //console.log("Duda CONVERTIDA: "+JSON.stringify(data))
            }, function (error) {
                //alert("Insert db function: "+JSON.stringify(error))
                reject(error);
            });
            _this.contador++;
            resolve(_this.contador);
            if (_this.contador == numCitas) {
                //alert("Contador local: "+this.contador+" \nParametro: "+numCitas)        
                //alert("Se reiniciara el contador a 0")
                _this.contador = 0;
            }
            else {
            }
            //      resolve(this.contador);     
        });
    };
    DatabaseProvider.prototype.obtenerCitas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM tb_datos_citas_pacientes", []).then(function (data) {
                //alert("Numero de filas de consulta: "+data.rows.length)
                var arrayUsers = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        arrayUsers.push({
                            id_cita: data.rows.item(i).id_cita,
                            fecha_cita: data.rows.item(i).fecha_cita,
                            hora_inicio: data.rows.item(i).hora_inicio,
                            hora_final: data.rows.item(i).hora_final,
                            enlace_videochat: data.rows.item(i).enlace_videochat,
                            tipo_servicio: data.rows.item(i).tipo_servicio,
                            descripcion: data.rows.item(i).descripcion,
                            antecedentes_principales: data.rows.item(i).antecedentes_principales,
                            id_medico: data.rows.item(i).id_medico,
                            id_paciente: data.rows.item(i).id_paciente,
                            nombre: data.rows.item(i).nombre,
                            apellido_paterno: data.rows.item(i).apellido_paterno,
                            apellido_materno: data.rows.item(i).apellido_materno,
                            sexo: data.rows.item(i).sexo,
                            edad: data.rows.item(i).edad
                        });
                    }
                }
                //alert(arrayUsers)
                resolve(arrayUsers);
            }, function (error) {
                alert(error);
                reject(error);
            });
        });
    };
    /***********************************************************************************************************/
    /********************************** Obtener todos los campos de la cita seleccionada ***********************/
    /***********************************************************************************************************/
    DatabaseProvider.prototype.obtenerCamposCitaSeleccionada = function (fechaCitaSeleccionada, horaInicioCitaSeleccionada, horaFinCitaSeleccionada) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //id_cita text, fecha_cita text, hora_inicio text, hora_final text, enlace_videochat text, tipo_servicio text, descripcion text,antecedentes_principales text,id_paciente text,nombre text, apellido_paterno text,apellido_materno text, sexo text, edad text   
            var query = "SELECT * FROM tb_datos_citas_pacientes WHERE fecha_cita = ? AND hora_inicio = ? AND hora_final = ? ";
            //alert(query)
            _this.db.executeSql(query, [fechaCitaSeleccionada, horaInicioCitaSeleccionada, horaFinCitaSeleccionada]).then(function (data) {
                //this.db.executeSql("SELECT * FROM horarios", []).then((data) => {
                //alert("Numero de filas de consulta: "+data.rows.length)
                var arrayCamposCitaSeleccionada = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        arrayCamposCitaSeleccionada.push({
                            id_cita: data.rows.item(i).id_cita,
                            fecha_cita: data.rows.item(i).fecha_cita,
                            hora_inicio: data.rows.item(i).hora_inicio,
                            hora_final: data.rows.item(i).hora_final,
                            enlace_videochat: data.rows.item(i).enlace_videochat,
                            tipo_servicio: data.rows.item(i).tipo_servicio,
                            descripcion: data.rows.item(i).descripcion,
                            antecedentes_principales: data.rows.item(i).antecedentes_principales,
                            id_medico: data.rows.item(i).id_medico,
                            id_paciente: data.rows.item(i).id_paciente,
                            nombre: data.rows.item(i).nombre,
                            apellido_paterno: data.rows.item(i).apellido_paterno,
                            apellido_materno: data.rows.item(i).apellido_materno,
                            sexo: data.rows.item(i).sexo,
                            edad: data.rows.item(i).edad
                        });
                    }
                }
                //      alert(JSON.stringify(arrayUsers))
                resolve(arrayCamposCitaSeleccionada);
            }, function (error) {
                //      alert(JSON.stringify(error))
                reject(error);
            });
        });
    };
    /***********************************************************************************************************/
    /***********************************************************************************************************/
    DatabaseProvider.prototype.limpiarTabla = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("DELETE FROM tb_datos_citas_pacientes", []).then(function (data) {
                var arrayUsers = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        arrayUsers.push({
                            id_cita: data.rows.item(i).id_cita,
                            fecha_cita: data.rows.item(i).fecha_cita,
                            hora_inicio: data.rows.item(i).hora_inicio,
                            hora_final: data.rows.item(i).hora_final,
                            enlace_videochat: data.rows.item(i).enlace_videochat,
                            tipo_servicio: data.rows.item(i).tipo_servicio,
                            descripcion: data.rows.item(i).descripcion,
                            antecedentes_principales: data.rows.item(i).antecedentes_principales,
                            id_medico: data.rows.item(i).id_medico,
                            id_paciente: data.rows.item(i).id_paciente,
                            nombre: data.rows.item(i).nombre,
                            apellido_paterno: data.rows.item(i).apellido_paterno,
                            apellido_materno: data.rows.item(i).apellido_materno,
                            sexo: data.rows.item(i).sexo,
                            edad: data.rows.item(i).edad
                        });
                    }
                }
                resolve(arrayUsers);
            }, function (error) {
                reject(error);
            });
        });
    };
    /***********************************************************************************************************/
    /***********************************************************************************************************/
    /***********************************************************************************************************/
    /***************************** Funciones para almacenar tabla con datos obtenidos del API ******************/
    /***********************************************************************************************************/
    DatabaseProvider.prototype.almacenarHorariosCitasEnBDconAPI = function (id, fecha_cita, titulo, descripcion, hora_inicio, hora_final, color, sub_color, enlace_videochat, enlace_cita, status, Paciente, Doctor, numCitas) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "INSERT INTO horarios_API (id,fecha_cita, titulo, descripcion, hora_inicio, hora_final, color, sub_color, enlace_videochat, enlace_cita, status, Paciente, Doctor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            _this.db.executeSql(sql, [id, fecha_cita, titulo, descripcion, hora_inicio, hora_final, color, sub_color, enlace_videochat, enlace_cita, status, Paciente, Doctor]).then(function (data) {
                //Aqui iba el resolve  
                //alert("Duda: "+data)
                //console.log("Duda CONVERTIDA: "+JSON.stringify(data))
            }, function (error) {
                //alert("Insert db function: "+JSON.stringify(error))
                reject(error);
            });
            _this.contador++;
            resolve(_this.contador);
            if (_this.contador == numCitas) {
                //alert("Contador local: "+this.contador+" \nParametro: "+numCitas)        
                //alert("Se reiniciara el contador a 0")
                _this.contador = 0;
            }
            else {
            }
            //      resolve(this.contador);     
        });
    };
    /***********************************************************************************************************/
    /************************** Funcion para obtener los datos de las consultas por usuario ********************/
    /***********************************************************************************************************/
    DatabaseProvider.prototype.obtenerCitasPorMedicoAPI = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM horarios_API", []).then(function (data) {
                //alert("Numero de filas de consulta: "+data.rows.length)
                var arrayUsers = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        arrayUsers.push({
                            id: data.rows.item(i).id,
                            fecha_consulta: data.rows.item(i).fecha_consulta,
                            hora: data.rows.item(i).hora,
                            horb: data.rows.item(i).horb,
                            descripcion: data.rows.item(i).descripcion,
                        });
                    }
                }
                //alert(arrayUsers)
                resolve(arrayUsers);
            }, function (error) {
                //alert(error)
                reject(error);
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificarCitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModificarCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModificarCitaPage = /** @class */ (function () {
    //$fecha,$horaInicio,$horaFin,$Descripcion,$booking_key,$booking_id
    function ModificarCitaPage(datePicker, navCtrl, navParams) {
        /*
        this.datePicker.show({
          date: new Date(),
          mode: 'datetime',
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(date => {
          alert(date)
        },
          err => {
            alert('Error occurred while getting date: '+ err)
          }
        );
        */
        this.datePicker = datePicker;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModificarCitaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModificarCitaPage');
    };
    ModificarCitaPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    ModificarCitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modificar-cita',template:/*ion-inline-start:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/pages/modificar-cita/modificar-cita.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Modificar Cita</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center>\n\n\n  <ion-list> \n    <ion-item>\n      <ion-label floating>Fecha de inicio</ion-label>\n      <ion-datetime displayFormat="DD-MM-YYYY HH:mm" [(ngModel)]="fechaNuevoInicioCita"></ion-datetime>\n    </ion-item>\n  \n    <ion-item>        \n      <ion-label floating>Fecha de fin</ion-label>\n      <ion-datetime displayFormat="DD-MM-YYYY HH:mm" [(ngModel)]="fechaNuevoFinCita"></ion-datetime>     \n    </ion-item>        \n    \n    <ion-item>\n      <ion-label>Tipo de consulta: </ion-label>\n      <ion-select [(ngModel)]="tipoConsulta" multiple="false">\n        <ion-option>Presencial</ion-option>\n        <ion-option>Video-Asistencia</ion-option>\n      </ion-select>\n    </ion-item>\n\n      <ion-item>\n        <ion-label floating>Descripcion</ion-label>\n        <ion-input type="text" [(ngModel)]="descripcion"></ion-input>\n      </ion-item>\n\n      <p></p>\n  \n  </ion-list>\n  \n  <button ion-button outline item-end icon-left  color="Primary" (click)="cancelar()">Aceptar <br>\n    \n  </button>\n\n  <button ion-button outline item-end icon-left  color="Primary" (click)="cancelar()">Cancelar <br>\n   \n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/pages/modificar-cita/modificar-cita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModificarCitaPage);
    return ModificarCitaPage;
}());

//# sourceMappingURL=modificar-cita.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modificar_cita_modificar_cita__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_crear_cita_crear_cita__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_calendar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_database_database__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_background_mode__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_audio__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_local_notifications__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_unique_device_id__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_in_app_browser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_date_picker__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










 //Esta libreria es necesaria para que funcione el calendario










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modificar_cita_modificar_cita__["a" /* ModificarCitaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_crear_cita_crear_cita__["a" /* CrearCitaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/crear-cita/crear-cita.module#CrearCitaPageModule', name: 'CrearCitaPage', segment: 'crear-cita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modificar-cita/modificar-cita.module#ModificarCitaPageModule', name: 'ModificarCitaPage', segment: 'modificar-cita', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modificar_cita_modificar_cita__["a" /* ModificarCitaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_crear_cita_crear_cita__["a" /* CrearCitaPage */],
            ],
            providers: [
                //HTTP,
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_mode__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(push, backgroundMode, platform, statusBar, splashScreen) {
        var _this = this;
        this.push = push;
        this.backgroundMode = backgroundMode;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pushSetup();
            _this.backgroundMode.enable();
        });
    }
    MyApp.prototype.pushSetup = function () {
        // to check if we have permission
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
        this.push.createChannel({
            id: "testchannel1",
            description: "My first test channel",
            // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
            importance: 3
        }).then(function () { return console.log('Channel created'); });
        // Delete a channel (Android O and above)
        this.push.deleteChannel('testchannel1').then(function () { return console.log('Channel deleted'); });
        // Return a list of currently configured channels
        this.push.listChannels().then(function (channels) { return console.log('List of channels', channels); });
        // to initialize push notifications
        var options = {
            android: {
                senderID: '1056846874683'
            },
            ios: {
                alert: 'true',
                badge: 'true',
                sound: 'true'
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        var pushObject = this.push.init(options);
        //pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));                           
        pushObject.on('notification').subscribe(function (notification) {
            //console.log('Notificacion recibida: '+JSON.stringify(notification))
            //alert('Notificacion recibida: '+JSON.stringify(notification))
            //alert('Titulo: '+JSON.stringify(notification.title+'\nMensaje: '+notification.message))
            localStorage.setItem("TitleNotification", notification.title);
            localStorage.setItem("MessageNotification", notification.message);
            localStorage.setItem("NotificacionRecibida", "1");
            console.log("Notificacion recibida, status: " + localStorage.getItem("NotificacionRecibida"));
            //this.varHome.imprimirSaludo();
            //HomePage.consultarHorariosBDremota2();
        });
        //pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
        pushObject.on('registration').subscribe(function (registration) {
            //Guardaremos el token del dispositivo para registrarlo en la BD junto con el ID del medico
            console.log('Device registered', JSON.stringify(registration));
            localStorage.setItem("phoneToken", registration.registrationId);
            //alert(localStorage.getItem("phoneToken"))
            //alert("ID DE REGISTRO XD: "+localStorage.getItem("phoneToken"));
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[208]);
//# sourceMappingURL=main.js.map