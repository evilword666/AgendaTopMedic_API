import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
/**
 * Generated class for the ModificarCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificar-cita',
  templateUrl: 'modificar-cita.html',
})
export class ModificarCitaPage {
  //$fecha,$horaInicio,$horaFin,$Descripcion,$booking_key,$booking_id
  constructor(private datePicker: DatePicker,public navCtrl: NavController, public navParams: NavParams) {
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
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarCitaPage');
  }

  cancelar(){
    this.navCtrl.pop();
  }

}
