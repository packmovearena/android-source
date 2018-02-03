import { Component , NgZone } from '@angular/core';
import { NavController , ViewController , LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMap , GoogleMapsEvent} from "@ionic-native/google-maps";
import {Observable} from "rxjs/Observable";

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: '../map/map.html',
})
export class Map {

  map: GoogleMap;
  timer: any;
  loader: any;
  location: any;
  pickupLocation: any;
  currentLocation: any;
  geoTracker: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation,
              public viewCtrl: ViewController, public loadCtrl: LoadingController, public ngZone : NgZone) {

  }

  ionViewDidLoad(){
    this.loader = this.loadCtrl.create({
      content: 'Locating...'
    });
    this.loader.present();
    try {
      this.getCurrentLocation('loadMap');
    } catch (error) {
      alert(error);
    }
  }
  getCurrentLocation(callback){
    let options = { timeout:10000 , enableHighAccuracy:true };
      this.geolocation.getCurrentPosition(options).then((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this[callback]({lat: latitude , lng: longitude});
      }, (err) => {
        console.log(err);
    });
  }

  loadMap(location){
      if(!this.map) {
        let element = document.getElementById('map');
        this.map = new GoogleMap(element, {
          'controls': {
            'compass': false,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': false
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'target': location,
            'tilt': 30,
            'zoom': 17
          }
        });
      }else {
        this.map.setCameraTarget(location);
      }
      try {
        this.addMarker(location);
      } catch (err) {
        alert(JSON.stringify(err));
      }
  }

  addMarker(location) {
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.moveCamera(location);
      this.getLocationText(location);

      this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe(() => {
        this.doFetch();
      });
      this.loader.dismiss();
      this.updatePickUpLocation();
    });
  }

  doFetch() {
    let loc = this.map.getCameraPosition();
    this.getLocationText(loc.target);
    this.updatePickUpLocation();
  }

  getLocationText(loc) {
    this.forceUpdate('pickupLocation' , 'Fetching Address........');
    let geocoder = new google.maps.Geocoder();
    this.geoTracker = Observable.create((observer) => {
      geocoder.geocode({'location': loc}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            observer.next(results[0].formatted_address);
          }
        } else {
          alert('Geocoder failed due to: ' + status);
        }
      });
    });
  }

  forceUpdate(field , value) {
    this.ngZone.run(() => {
      this[field] = value;
    });
  }

  updatePickUpLocation() {
    this.geoTracker.subscribe((value) => {
      this.forceUpdate('pickupLocation' , value);
    });
  }
}
