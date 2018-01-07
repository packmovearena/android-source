import { Injectable } from "@angular/core";

@Injectable()
export class User {
    countryCode: string;
    emailId: string;
    mobileNumber: number;
    userName: string;

    constructor() {
      this.countryCode = '+91';
    }

    getCountryCode() {
      return this.countryCode;
    }

    setCountryCode(countryCode: string) {
      this.countryCode = countryCode;
    }

    getEmailId() {
      return this.emailId;
    }

    setEmailId(emailId: string) {
      this.emailId = emailId;
    }

    getMobileNumber() {
      return this.mobileNumber;
    }

    setMobileNumber(mobileNumber: number) {
      this.mobileNumber = mobileNumber;
    }

    getUserName() {
      return this.userName;
    }

    setUserName(userName: string) {
      this.userName = userName;
    }
}
