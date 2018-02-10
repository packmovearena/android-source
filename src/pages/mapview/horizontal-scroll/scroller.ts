import {Component, Input} from "@angular/core";

@Component({
  selector: 'horizontal-scroll',
  templateUrl: '../horizontal-scroll/scroller.html'
})

export class HorizontalScroll {
  @Input() vehicleList;
  activeVehicleList:any;
  activeIndex:number;
  etaMessages:any = [
    'ETA : 5 minutes',
    'ETA : 10 minutes',
    'No Vehicles are available. Try after sometime'
  ];
  constructor() {
    this.setActiveFlag(0);
  }

  getETAText() {
    return this.etaMessages[this.activeIndex];
  }

  setActiveFlag(index) {
    this.activeVehicleList=[];
    this.activeVehicleList[index] = true;
    this.activeIndex = index;
  }
}
