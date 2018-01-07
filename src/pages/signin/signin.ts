import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from "../models/user";

@Component({
  selector: 'page-signin',
  templateUrl: '../signin/signin.html'
})

export class SignIn {
  user: User;
  page: any;

  constructor() {
    this.user = new User();
  }

  signIn = function(): void {

  };
}
