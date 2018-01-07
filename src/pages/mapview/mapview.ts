import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mapview',
  templateUrl: '../mapview/mapview.html'
})

export class MapView {
  mobileNumber: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.mobileNumber = this.navParams.data;
  }
}
