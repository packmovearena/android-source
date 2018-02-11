import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignIn } from "../pages/signin/signin";
import { SignUp } from "../pages/signup/signup";
import { MapView } from "../pages/mapview/mapview";
import { About , Bookings , ChooseLocation , Contact , MapPage , Payments , RateCard , HorizontalScroll , Share , Pickup , Pointer , Profile } from "./app.config";
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    About,
    ChooseLocation,
    Contact,
    MapView,
    MapPage,
    Payments,
    Pickup,
    Pointer,
    Profile,
    RateCard,
    HorizontalScroll,
    Share,
    SignIn,
    SignUp,
    Bookings
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    About,
    ChooseLocation,
    Contact,
    MapView,
    MapPage,
    Profile,
    Pointer,
    Payments,
    Pickup,
    RateCard,
    HorizontalScroll,
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
