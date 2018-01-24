import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import {appProviders, angularModules, appComponents} from './/app.declaration'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {config} from './app.firebaseconfig';

import {AngularFireAuth} from 'angularfire2/Auth';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';


@NgModule({
    declarations: [
        MyApp,
      appComponents
  ],
  imports: [
      angularModules,
    //BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
       appComponents
  ],
  providers: [  
    StatusBar,
    SplashScreen,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    appProviders,
    AuthProvider,
    // AngularFireDatabaseModule
  ]
})
export class AppModule {}
