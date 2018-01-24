import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/Auth';

import firebase from 'firebase'

import {usercreds} from '../../models/interfaces/usercreds'


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  // constructor(public http: HttpClient) {
  //   console.log('Hello AuthProvider Provider');
  // }
  constructor(public _AngularFireAuth: AngularFireAuth){




  }

  Login(credentials:usercreds){

    

  }

}
