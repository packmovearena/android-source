import {Component, Input} from "@angular/core";

@Component({
  selector: 'horizontal-scroll',
  templateUrl: '../horizontal-scroll/scroller.html'
})

export class HorizontalScroll {
  @Input() vehicleList;
  activeVehicleList:any;

  constructor() {
    this.setActiveFlag(0);
  }

  setActiveFlag(index) {
    this.activeVehicleList=[];
    this.activeVehicleList[index] = true;
  }
}
