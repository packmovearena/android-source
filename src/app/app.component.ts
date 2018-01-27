import { Component } from '@angular/core';
import { Platform , App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SignIn} from "../pages/signin/signin";
import { Storage } from '@ionic/storage';
import { MapView } from "../pages/mapview/mapview";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ,
              private storage: Storage , public appCtrl: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.getPage();
    });
  }

  getPage = function(): any {
    this.storage.get('user').then((user: any) => {
      if(user) {
        this.appCtrl.getRootNavs()[0].push(MapView , user.mobileNumber);
      } else {
        this.rootPage = SignIn;
      }
    });
  }
}
