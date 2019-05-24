import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fechaNuevoInicioCita = new Date().toISOString();
    this.fechaNuevoFinCita = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCitaPage');
  }

  cancelar(){
    this.navCtrl.pop();
  }
  
}
