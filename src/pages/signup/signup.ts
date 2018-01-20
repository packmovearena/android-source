import { Component } from '@angular/core';
import { App, NavController, NavParams,ViewController } from "ionic-angular";
import { User } from "../models/user";
import { MapView } from "../mapview/mapview";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-signup',
  templateUrl: '../signin/signup.html'
})
export class SignUp {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
              public viewCtrl: ViewController , public appCtrl: App ,
              private storage: Storage) {
    this.user = this.navParams.data;
  }

  signUp = function(): void {
    this.saveToDB();
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(MapView , this.user.mobileNumber);
  };

  saveToDB = function(): any {
    //TODO:On success continue
    this.storage.set('user',this.user);
  }

}
