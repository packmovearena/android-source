import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from "../models/user";
import { SignUp } from "../signup/signup";

@Component({
  selector: 'page-signin',
  templateUrl: '../signin/signin.html'
})

export class SignIn {
  user: User = new User();
  page: any;

  constructor(public navCtrl: NavController) {
  }

  signIn = function(): void {
    this.navCtrl.push(SignUp,this.user);
  };

}
