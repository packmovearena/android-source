import { Component } from '@angular/core';
import { NavController , ViewController , LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from "rxjs/Observable";
import { GoogleMap , GoogleMapsEvent} from "@ionic-native/google-maps";

@Component({
  selector: 'page-map',
  templateUrl: '../map/map.html',
})
export class Map {

  map: GoogleMap;
  timer: any;
  location: any;
  loader: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation,
              public viewCtrl: ViewController, public loadCtrl: LoadingController) {

  }

  ionViewDidLoad(){
    this.loader = this.loadCtrl.create({
      content: 'Locating...'
    });
    this.getCurrentLocation();
    this.loadMap();
  }

  getCurrentLocation(){
    let options = { timeout:10000 , enableHighAccuracy:true };
    this.location = Observable.create(observable => {
      let prevLat = 0;
      let prevLng = 0;
      this.loader.present();
        this.geolocation.getCurrentPosition(options).then((position) => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          if(prevLat !== latitude || prevLng !== longitude) {
            observable.next({lat: latitude , lng: longitude});
          }
        }, (err) => {
          console.log(err);
        })
    });
  }

  loadMap(){
    this.location.subscribe(location => {
      this.map = new GoogleMap('map', {
        'mapType' : 'MAP_TYPE_ROADMAP',
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
          'zoom': 15
        }
      });

      this.addMarker(location);
    });
  }

  addMarker(location) {
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.loader.dismiss();
      /*this.map.addMarker({
        title: 'Pickup Location',
        icon: {
          url : 'assets/imgs/locator.png',
          size: {
            width: 60,
            height: 50
          }
        },
        position: location ,
        draggable: true
      })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_DRAG_END)
            .subscribe(() => {
              //alert('clicked');
            });
        });*/
    });

    this.map.one(GoogleMapsEvent.MAP_DRAG_END).then(() => {

    });
  }
}
