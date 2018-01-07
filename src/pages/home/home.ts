import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignIn} from "../signin/signin";
import { User } from "../models/user";

@Component({
  selector: 'page-home',
  templateUrl: '../home/home.html'
})
export class HomePage {
  signController: SignIn;
  page: any;

  constructor() {
    this.signController = new SignIn();
    this.page = SignIn;
  }

}
