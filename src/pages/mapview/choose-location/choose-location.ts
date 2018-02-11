import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';
import {Location} from "../../models/location";

declare var google: any;

@Component({
  selector: 'choose-location',
  templateUrl: '../choose-location/choose-location.html'
})

export class ChooseLocation {
  autoComplete:any;
  type:string ;
  location:Location;
  searchText:any;
  previousSearchText:any;

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
        if(place) {
          let location = place.geometry.location.toJSON();
          if(location.lat && location.lng) {
            this.location.setText(place.formatted_address);
            this.location.setId(place.place_id);
            this.location.setLat(location.lat);
            this.location.setLng(location.lng);
            this.location.setChanged(true);
          }
        }
        this.navCtrl.pop();
      });
    });
  }


  searchLocation() {
    if(!this.searchText || this.searchText == this.previousSearchText) {
        return;
    }
    this.previousSearchText = this.searchText;
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
