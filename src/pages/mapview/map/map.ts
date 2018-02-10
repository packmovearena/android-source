import { Component , NgZone } from '@angular/core';
import {NavController, ViewController, LoadingController, Platform} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMap , GoogleMapsEvent} from "@ionic-native/google-maps";

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: '../map/map.html',
})
export class MapPage {

  map: GoogleMap;
  timer: any;
  loader: any;
  location: any;
  pickupLocation: any;
  geocoder: any;
  vehicleList: Array<string> = new Array<string>();

  constructor(public navCtrl: NavController, public geolocation: Geolocation,
              public viewCtrl: ViewController, public loadCtrl: LoadingController, public ngZone : NgZone , platform: Platform) {
    platform.ready().then(() => {
      this.loader = this.loadCtrl.create({
        content: 'Locating...'
      });
      //this.loader.present();
      try {
        this.geocoder = new google.maps.Geocoder();
        this.getCurrentLocation('loadMap');
      } catch (error) {
        alert(error);
      }
      this.vehicleList.push('assets/imgs/mini.png');
      this.vehicleList.push('assets/imgs/medium.png');
      this.vehicleList.push('assets/imgs/large.png');
    });
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
      try {
        this.addMarker(location);
      } catch (err) {
        alert('got error '+ err.toString());
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
    });
  }

  doFetch() {
    let loc = this.map.getCameraPosition();
    this.getLocationText(loc.target);
  }

  getLocationText(loc) {
    this.forceUpdate('pickupLocation' , 'Fetching Address........');
      this.geocoder.geocode({'location': loc}, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.forceUpdate('pickupLocation' , results[0].formatted_address);
          }
        } else if (status === 'OVER_QUERY_LIMIT') {
          setTimeout(()=>{
            this.doFetch();
          },1000);
        } else {
          alert('Geocoder failed due to: ' + status);
        }
      });
  }

  forceUpdate(field , value) {
    this.ngZone.run(() => {
      this[field] = value;
    });
  }

}
