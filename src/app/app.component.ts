import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
//import { TabsPage } from '../pages/tabs/tabs';

//// // import * as firebase from 'firebase';
// import { TestPage } from '../pages/test/test';
 import { DashboardPage } from '../pages/dashboard/dashboard';
 import { SigninPage } from '../pages/signin/signin';
@Component({
    templateUrl: 'app.html'
  })
  export class MyApp {
      rootPage: any= '';
      @ViewChild(Nav) nav: Nav;
      pages: Array<{ title: any, component: any }> = [];
  
      constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen
        ,public storage: Storage) {                 
          this.initializeApp();    
          this.pages = [ 
              {title:'Dashboard',component:DashboardPage},
              {title:'Login',component:SigninPage},
              {title:'My Account',component:DashboardPage},
              {title:'About Us',component:DashboardPage},
              {title:'Help',component:DashboardPage},
              {title:'Feedback',component:DashboardPage},
              { title: 'Rate Us', component: DashboardPage }
        ];    
      }
  
    initializeApp() {
        this.platform.ready().then(() => {
            this.storage.get('intro-done').then(done => {
                if (done) {
                  this.rootPage='DashboardPage';
                }
                else{        
                  this.storage.set('intro-done', true);
                  this.rootPage='IntroPage';
                }
              });

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
  
  
  
  
    openPage(page) {
         // close the menu when clicking a link from the menu
        //this.menu.close();
  
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
  }
  