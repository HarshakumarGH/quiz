import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninPage } from './signin';
// import {  } from '../providers/auth/auth'; 

@NgModule({
  declarations: [
    SigninPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninPage),
  ],
  providers:[

  ]
})
export class SigninPageModule {}
