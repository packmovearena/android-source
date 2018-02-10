import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {User} from "../models/user";
import { Storage } from '@ionic/storage';
import { SignIn } from "../signin/signin";

@Component({
  selector: 'page-profile',
  templateUrl: './profile.html'
})

export class Profile {
  isEdit: boolean = false;
  user: User;

  constructor(public navCtrl: NavController , private storage: Storage) {
    this.storage.get('user').then(user => {
      this.user = user;
    });
  }

  ionViewWillLeave() {
    console.log('want to do any thing on exit ?');
  }

  logOut() {
    this.storage.remove('user');
    this.navCtrl.setRoot(SignIn);
  }

  save() {
    this.storage.set('user',this.user);
    this.isEdit = false;
  }

  edit() {
    this.isEdit = true;
  }

  isDisabled() {
    if(this.isEdit) {
      return false;
    }
    return true;
  }
}
