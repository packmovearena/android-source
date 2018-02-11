import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'choose-location',
  templateUrl: '../choose-location/choose-location.html'
})

export class ChooseLocation {
  autoComplete:any;
  type:string ;
  location:any;

  constructor(private geolocation: Geolocation,private navParams: NavParams,
              private platform: Platform , private navCtrl: NavController) {
    this.geolocation = this.navParams.data.geolocation;
    this.location = this.navParams.data.location;
    this.type = this.navParams.data.type;
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.autoComplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')));
      this.autoComplete.setComponentRestrictions({'country': ['in']});
      this.autoComplete.addListener('place_changed',() => {
        let place = this.autoComplete.getPlace();
        this.location.text = place.formatted_address;
        this.location.id = place.place_id;
        this.location.setLat(place.geometry.location.toJSON().lat);
        this.location.setLng(place.geometry.location.toJSON().lng);
        this.navCtrl.pop();
      });
    });
  }


  searchLocation() {
    let options = { timeout:10000 , enableHighAccuracy:true };
    this.geolocation.getCurrentPosition(options).then((position) => {
      let geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      let circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      this.autoComplete.setBounds(circle.getBounds());
    }, (err) => {
      console.log(err);
    });
  }
}
