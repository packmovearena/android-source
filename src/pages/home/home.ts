import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignIn} from "../signin/signin";

@Component({
  selector: 'page-home',
  templateUrl: '../home/home.html'
})
export class HomePage {
  page: any;

  constructor(public navCtrl: NavController) {
    this.page = SignIn;
  }

}
