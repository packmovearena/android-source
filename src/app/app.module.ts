import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignIn } from "../pages/signin/signin";
import { SignUp } from "../pages/signup/signup";
import { MapView } from "../pages/mapview/mapview";
import { About , Contact , Map , Payments , RateCard , Share , Trips } from "./app.config";

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
    Trips
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
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
    Trips
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
