import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IntroPage } from '../intro/intro';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DashboardPage');    
  }



  LoadModule(obj:any){
    if(obj=='quiz')
      {

        this.navCtrl.push('QuizPage');
        
      }
      else if(obj=='rank'){

        this.navCtrl.push('RankPage');
        
      }
      else if(obj=='mock'){

        this.navCtrl.push('MockPage');
        
      }
      else if(obj=='settings'){

        this.navCtrl.push('SettingsPage');
        
      }
  }

}
