import { Injectable } from "@angular/core";

@Injectable()
export class Location {
  private id: string;
  private changed: boolean;
  private text: string;
  private lat: number;
  private lng: number;

  constructor() {
    this.id = '';
    this.changed = false;
    this.text = '';
    this.lat = 0;
    this.lng = 0;
  }

  getId(): string {
    return this.id;
  }

  setId(value: string) {
    this.id = value;
  }

  getText(): string {
    return this.text;
  }

  isChanged():boolean {
    return this.changed;
  }

  setChanged(value: boolean) {
    this.changed = value;
  }

  setText(value: string) {
    this.text = value;
  }

  getLat(): number {
    return this.lat;
  }

  setLat(value: number) {
    this.lat = value;
  }

  getLng(): number {
    return this.lng;
  }

  setLng(value: number) {
    this.lng = value;
  }
}
