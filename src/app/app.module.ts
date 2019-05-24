import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { ModificarCitaPage } from '../pages/modificar-cita/modificar-cita'
import { CrearCitaPage } from '../pages/crear-cita/crear-cita'

import { NgCalendarModule } from 'ionic2-calendar';  //Esta libreria es necesaria para que funcione el calendario

import { HttpModule} from '@angular/http';
import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite';
import { BackgroundMode } from '@ionic-native/background-mode';

import { NativeAudio } from '@ionic-native/native-audio';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { Push } from '@ionic-native/push';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { DatePicker } from '@ionic-native/date-picker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ModificarCitaPage,
    CrearCitaPage
    
  ],
  imports: [
    NgCalendarModule,    
    BrowserModule,
    HttpModule,    
    IonicModule.forRoot(MyApp, { 
      scrollPadding: false, 
      scrollAssist: true, 
      autoFocusAssist: false 
     }) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ModificarCitaPage,
    CrearCitaPage,
  ],
  providers: [
    //HTTP,
    StatusBar,
    SplashScreen,
    BackgroundMode,
    SQLite,      
    NativeAudio,  
    LocalNotifications,
    UniqueDeviceID,
    Push, 
    DatePicker,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}
