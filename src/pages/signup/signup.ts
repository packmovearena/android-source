import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { User } from "../models/user";
import { MapView } from "../mapview/mapview";

@Component({
  selector: 'page-signup',
  templateUrl: '../signin/signup.html'
})
export class SignUp {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.user = this.navParams.data;
    console.log(this.user);
  }

  signUp = function(): void {
    this.navCtrl.push(MapView , this.user.mobileNumber);
  };
}
