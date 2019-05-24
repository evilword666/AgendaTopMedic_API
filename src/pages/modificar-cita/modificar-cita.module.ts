import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificarCitaPage } from './modificar-cita';

@NgModule({
  declarations: [
    ModificarCitaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModificarCitaPage),
  ],
})
export class ModificarCitaPageModule {}
