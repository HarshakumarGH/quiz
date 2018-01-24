import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import {usercreds} from '../../models/interfaces/usercreds'
// import {AuthProvider} from '../../providers/auth/auth';

import {AngularFireAuth} from 'angularfire2/Auth';

import firebase from 'firebase'

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
}) 
export class SigninPage {

  credentials = {} as usercreds;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,
    public _AngularFireAuth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }


  signin() {
    // this._AuthProvider.Login(this.credentials).then((res: any) => {
    //     debugger;
    //     if (res) {
    //         this.navCtrl.setRoot('TabsPage');
    //     }
    //     else {
    //         alert(res);
    //     }
    // });
    //return new Promise((resolve, reject) => {
    //  this._AngularFireAuth.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password).then(() => {
    //      resolve(true);
    //  }).catch((err) => {
    //      reject(err);
    //  });
  //});


  }
 
signup() {
  this.navCtrl.push('SignupPage'); 
  // this.navCtrl.push('SignupPage');
}

passwordreset(){
  let alert = this.alertCtrl.create({
    title: 'Reset Password',
    inputs: [
      {
        name: 'email',
        placeholder: 'Email'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Send',
        handler: data => {
          debugger;

          // check whether the user present in our db and send email.
          // if (User.isValid(data.username, data.password)) {
          //   // logged in!
          // } else {
          //   // invalid login
          //   return false;
          // }
        }
      }
    ]
  });
  alert.present();
  //this.navCtrl.push('PasswordPage');
}

}
