import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearCitaPage } from './crear-cita';

@NgModule({
  declarations: [
    CrearCitaPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearCitaPage),
  ],
})
export class CrearCitaPageModule {}
