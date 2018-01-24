// import { OrderByPipe } from './framework/pipes/pipes';

// export const appPipes = [
//     OrderByPipe
// ];


import {DataService} from '../framework/providers/dataservice';
// import { DataService, EventService } from './framework/providers/providers'
// import { CacheService } from 'ng2-cache/ng2-cache';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { LOCALE_ID } from '@angular/core';
// import { TranslateService } from 'ng2-translate';

export const appProviders = [
     DataService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];


//import { Dashboard } from '../pages/dashboard/dashboard';
import { SigninPage } from '../pages/signin/signin';
 export const appComponents = [
     //Dashboard
     SigninPage,
 ];

// import { Routes } from '@angular/router';
// export const _appRoutes: Routes = [
//     { path: 'Master', loadChildren: './sources/roots/modules/master.module#MasterModule' }
// ]

 import { BrowserModule } from '@angular/platform-browser';
  import { HttpModule } from '@angular/http';
 import { FormsModule } from '@angular/forms';


// import {MasterModule} from './sources/roots/modules/master.module';

 export const angularModules = [
     BrowserModule,
     HttpModule,
     FormsModule
 ];