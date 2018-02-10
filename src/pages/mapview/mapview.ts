import { Component , ViewChild} from '@angular/core';
import { NavController , NavParams , Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { About , Contact , MapPage , Payments , RateCard , Share , Bookings } from "../../app/app.config";
import {Profile} from "../profile/profile";
import {User} from "../models/user";

@Component({
  selector: 'page-mapview',
  templateUrl: '../mapview/mapview.html'
})

export class MapView {
  @ViewChild(Nav) nav: Nav;
  mapPage: any ;
  user: User;
  pages: Array<{title: string, component: any}>;
  profile: {title: string, component: any};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.mapPage = MapPage;
    this.user = this.navParams.data;
    this.profile = { title: 'Profile', component: Profile };
    this.pages = [
      { title: 'Bookings', component: Bookings },
      { title: 'Payments', component: Payments },
      { title: 'Rate Card', component: RateCard },
      { title: 'Refer and Earn', component: Share },
      { title: 'About', component: About },
      { title: 'Contact', component: Contact }
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
