import { Component } from '@angular/core';
import { App, NavController, NavParams,ViewController } from "ionic-angular";
import { User } from "../models/user";
import { MapView } from "../mapview/mapview";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-signup',
  templateUrl: '../signup/signup.html'
})
export class SignUp {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
              public viewCtrl: ViewController , public appCtrl: App ,
              public storage: Storage) {
    this.user = this.navParams.data;
  }

  signUp = function(): void {
    this.saveToDB();
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(MapView , this.user);
  };

  saveToDB = function(): any {
    //TODO:On success continue
    this.storage.set('user',this.user);
  }

}
