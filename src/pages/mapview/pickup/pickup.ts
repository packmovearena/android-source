import {Component, Input} from '@angular/core';
import { ChooseLocation } from "../choose-location/choose-location";
import {NavController} from "ionic-angular";

@Component({
  selector: 'pick-up',
  templateUrl: '../pickup/pickup.html'
})

export class Pickup {
  @Input() map;
  @Input() location;
  @Input() geolocation;

  constructor(public navCtrl: NavController) {

  }

  searchLocation() {
    this.navCtrl.push(ChooseLocation , {type: 'Pickup' , geolocation: this.geolocation ,location: this.location});
  }
}
