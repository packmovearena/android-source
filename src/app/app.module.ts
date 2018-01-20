import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignIn } from "../pages/signin/signin";
import { SignUp } from "../pages/signup/signup";
import { MapView } from "../pages/mapview/mapview";
import { About , Bookings , Contact , Map , Payments , RateCard , Share , Profile } from "./app.config";
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from "@ionic-native/google-maps";

@NgModule({
  declarations: [
    MyApp,
    About,
    Contact,
    HomePage,
    MapView,
    Map,
    Payments,
    RateCard,
    Share,
    SignIn,
    SignUp,
    Bookings
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    About,
    Contact,
    HomePage,
    MapView,
    Map,
    Profile,
    Payments,
    RateCard,
    Share,
    SignIn,
    SignUp,
    Bookings
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
