import {Component, Input} from '@angular/core';
import { ChooseLocation } from "../choose-location/choose-location";
import {NavController} from "ionic-angular";

@Component({
  selector: 'drop',
  templateUrl: '../drop/drop.html'
})

export class Drop {
@Input() location;
@Input() geolocation;

  constructor(public navCtrl: NavController) {

  }

  searchLocation() {
    this.navCtrl.push(ChooseLocation , {type: 'Drop' , geolocation: this.geolocation ,location: this.location});
  }
}
