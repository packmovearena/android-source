import { Component } from '@angular/core';
import { App, NavController, NavParams,ViewController } from "ionic-angular";
import { User } from "../models/user";
import { MapView } from "../mapview/mapview";

@Component({
  selector: 'page-signup',
  templateUrl: '../signin/signup.html'
})
export class SignUp {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public viewCtrl: ViewController , public appCtrl: App) {
    this.user = this.navParams.data;
  }

  signUp = function(): void {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(MapView , this.user.mobileNumber);
  };
}
