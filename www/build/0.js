webpackJsonp([0],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modificar_cita_modificar_cita__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(http, alertController, datePicker, plt, iab, navCtrl, navParams, view) {
        this.http = http;
        this.alertController = alertController;
        this.datePicker = datePicker;
        this.plt = plt;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.data = {};
        this.http = http;
        this.data.hora_inicio = '';
        this.data.hora_fin = '';
        this.data.detalles_cita = '';
        this.data.tipo_servicio = '';
        this.data.link_token_original = '';
        this.data.link_token = '';
        this.data.fecha_consulta = '';
        this.data.checkRango = '';
        this.data.booking_id = '';
        this.data.edad_paciente = '';
        ;
        this.data.Sexo = '';
        ;
        this.data.padecimiento = '';
        ;
        this.data.nombre_completo_paciente = '';
        this.data.id_medico = '';
    }
    ModalPage.prototype.eliminarCitaAler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: 'Cancelar cita',
                            message: 'Realmente desea cancelar esta cita de su agenda?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('No se realiza ninguna accion');
                                        //this.retrocederPagina()
                                    }
                                }, {
                                    text: 'Si',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.eliminarCitaDB();
                                        _this.view.dismiss();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalPage.prototype.eliminarCitaDB = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + window.localStorage.getItem("id_doctor"));
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var link = 'http://104.248.176.189:8001/api/v1/doctor/mov/citas/' + this.data.booking_id;
        //var credentials = JSON.stringify({id : this.data.link_token_original});
        alert(options);
        try {
            this.http.delete(link, options)
                .subscribe(function (data) {
                _this.data.response = data["_body"];
                var resp = JSON.parse(_this.data.response);
                alert("Respuesta: \n\n" + data);
                //alert(resp['id'])
                //alert(resp['response'])
                if (resp['response'] == "200") {
                    _this.exitoEliminacionCita();
                }
                else {
                    _this.errorEliminacionCita();
                    //this.exitoLogin();
                }
            }, function (error) {
                alert("Error: " + error);
                console.log(error);
                console.log("Oooops!");
                alert("No se pudieron enviar los datos\nIntentelo mas tarde");
            });
        }
        catch (error) {
            alert("Hay un error en el servidor");
        }
    };
    ModalPage.prototype.exitoEliminacionCita = function () {
        var alert = this.alertController.create({
            title: '<center><h4>Cita cancelada</h4></center>',
            subTitle: '<center>La cita ha sido cancelada exitosamente</center>',
            buttons: ['Aceptar']
        });
        alert.present();
    };
    ModalPage.prototype.errorEliminacionCita = function () {
        var alert = this.alertController.create({
            title: '<center><h4>Error</h4></center>',
            subTitle: '<center>No se ha podido cancelar la cita</center>',
            buttons: ['Aceptar']
        });
        alert.present();
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        var data = this.navParams.get('data');
        //alert("En el modal: "+JSON.stringify(data))
        //console.log("En el modal: "+JSON.stringify(data))
        this.data.fecha_consulta = data.fecha_consulta;
        this.data.hora_inicio = data.hora;
        this.data.hora_fin = data.horb;
        this.data.detalles_cita = data.descripcion;
        this.data.tipo_servicio = data.tipo_servicio;
        this.data.link_token = "https://topmeddr.com:3005/" + data.link_token + "/d";
        this.data.link_token_original = data.link_token;
        this.data.booking_id = data.booking_id;
        this.data.edad_paciente = data.edad_paciente;
        this.data.Sexo = data.Sexo;
        this.data.padecimiento = data.padecimiento;
        this.data.nombre_completo_paciente = data.nombre_completo_paciente;
        this.data.id_medico = data.id_medico;
        //this.checkRango = this.verificarRangoDeFechasPorCita(this.data.fecha_consulta,this.data.hora_inicio,this.data.hora_fin)
        //alert(this.checkRango)
        alert("id_medico: " + this.data.booking_id);
    };
    ModalPage.prototype.verificarRangoDeFechasPorCita = function (fecha, startHour, endHour) {
        var startTime;
        var endTime;
        //Formato de la base de datos de Saul
        startTime = fecha + " " + startHour;
        endTime = fecha + " " + endHour;
        var fechaHoy = new Date();
        //Para android
        var inicio = new Date(startTime);
        var fin = new Date(endTime);
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
        }
        else if (this.plt.is('android')) {
            if (fechaHoy >= inicio && fechaHoy <= fin) {
                console.log("Esta dentro del rango");
                return true;
            }
            else {
                console.log("La videoasistencia no puede realizarse");
                return false;
            }
        }
    };
    ModalPage.prototype.iniciarVideoconferencia = function () {
        //alert(this.data.link_token )
        this.iab.create(this.data.link_token, '_system');
        //var ref = window.open(this.data.link_token, '_blank', 'location=yes');
    };
    ModalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalPage.prototype.eliminarCita = function () {
        //alert("Entrando a eliminar la cita")
        this.eliminarCitaAler();
    };
    ModalPage.prototype.reasignarCita = function () {
        //this.navCtrl.push(ModificarCitaPage); 
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'datetime',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            alert("Su cita ha sido reasignada");
            _this.retrocederPagina();
        }, function (err) {
            alert('Ha ocurrido un error al tratar de reasignar su cita ' + err);
        });
    };
    ModalPage.prototype.retrocederPagina = function () {
        this.navCtrl.pop();
    };
    ModalPage.prototype.updateDataCita = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modificar_cita_modificar_cita__["a" /* ModificarCitaPage */]);
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/pages/modal/modal.html"*/'\n<ion-content class="main-view">\n\n  <div class="overlay" (click)="closeModal()"></div>\n  <div class="modal_content">\n    <h1><span id="logodetalles"></span> Detalles de cita <ion-icon id="cerrarmodal" ios="md-close-circle" md="md-close-circle" (click)="closeModal()"></ion-icon></h1>\n\n    <p class="detallecita"><span class="datocita"><ion-icon name="md-person"></ion-icon> Paciente:</span> {{data.nombre_completo_paciente}}</p>\n    <p class="detallecita"><span class="datocita"><ion-icon name="ios-calendar"></ion-icon> Edad:</span> {{data.edad_paciente}} años</p>\n    <p class="detallecita"><span class="datocita"><img id="sexicon" src="img/sexo.svg"> Sexo:</span> {{data.Sexo}}</p>\n\n    <p class="detallecita"><span class="datocita"><ion-icon name="clock"></ion-icon> Inicio consulta:</span><strong class="inicioconsulta">{{data.hora_inicio}}</strong></p>\n    <p class="detallecita"><span class="datocita"><ion-icon name="time"></ion-icon> Fin consulta:</span><strong class="finconsulta">{{data.hora_fin}}</strong></p>\n    <p class="detallecita"><span class="datocita"><ion-icon name="apps"></ion-icon> Tipo consulta:</span><strong>{{data.tipo_servicio}}</strong></p>\n    <p class="detallecita" id="padecimiento"><span class="datocita"><ion-icon name="md-document"></ion-icon> Padecimiento:</span>{{data.padecimiento}}</p>\n    <p class="detallecita"  id="detallescita"><span class="datocita"><ion-icon name="list"></ion-icon> Detalles:</span>{{data.detalles_cita}}</p>\n\n    <div id="botonVideoconsulta">\n        <!--<button ion-button outline item-end icon-right color="Primary" [hidden]="((data.tipo_servicio === \'Video asistencia\') && (data.checkRango === \'true\')) ? false : true" (click)="iniciarVideoconferencia()">Iniciar Video-Asistencia<br>-->\n        <button ion-button outline item-end icon-right color="Primary" [hidden]="data.tipo_servicio === \'Consulta Presencial\' ? true : false" (click)="iniciarVideoconferencia()">Iniciar Video-Asistencia<br>\n        <ion-icon name="ios-videocam"></ion-icon>\n      </button>\n    </div>\n\n    <ion-fab>\n      <button ion-fab >\n          <ion-icon name="md-calendar" large></ion-icon>\n       </button>\n       <ion-fab-list id="modificarcita" side="top"> \n        <button class="option" ion-fab (click)="eliminarCita()" ><ion-icon class="bco" ios="ios-trash-outline" md="ios-trash-outline"></ion-icon><ion-label>Cancelar cita</ion-label></button>\n        <button class="option" ion-fab (click)="updateDataCita()"><ion-icon class="bco" ios="ios-calendar-outline" md="ios-calendar-outline"></ion-icon><ion-label>Reagendar cita</ion-label></button>\n      </ion-fab-list>\n    </ion-fab>\n\n  </div>\n  \n</ion-content>'/*ion-inline-end:"/Users/desarrollo/Documents/Agenda_TopMedic/Agenda_Top_Medic-API/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map