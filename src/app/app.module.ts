import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, Loading} from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignIn } from "../pages/signin/signin";
import { SignUp } from "../pages/signup/signup";
import { MapView } from "../pages/mapview/mapview";
import { About , Bookings , Contact , Map , Payments , RateCard , Share , Pointer , Profile } from "./app.config";
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    About,
    Contact,
    MapView,
    Map,
    Payments,
    Pointer,
    Profile,
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
    MapView,
    Map,
    Profile,
    Pointer,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
