import { Component } from '@angular/core';
import { App, NavController , ViewController } from 'ionic-angular';
import {SignIn} from "../signin/signin";
import { Storage } from '@ionic/storage';
import { MapView } from "../mapview/mapview";
import { User } from "../models/user";

@Component({
  selector: 'page-home',
  templateUrl: '../home/home.html'
})
export class HomePage {
  page: any;

  constructor(public navCtrl: NavController , public viewCtrl: ViewController ,
              private storage: Storage , public appCtrl: App) {
    this.page = this.getPage();
  }

  getPage = function(): any {
   this.storage.get('user').then((user: any) => {
     if(user) {
       this.appCtrl.getRootNav().push(MapView , user.mobileNumber);
     } else {
       this.page = SignIn;
     }
    });
  }
}
