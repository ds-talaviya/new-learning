import { Component, OnInit } from '@angular/core';
class CustomFilter {
  constructor(
    public StartDate: any = null,
    public EndDate: any = null
  ) { }
}
@Component({
  selector: 'app-ngx-print',
  templateUrl: './ngx-print.component.html',
  styleUrls: ['./ngx-print.component.scss']
})
export class NgxPrintComponent implements OnInit {

  filter: CustomFilter = new CustomFilter();
  DateMode: any = 1;

  totalLabourQuantity: any;

  DeliveredMaterial: Array<any> = [];
  LabourDetails: Array<any> = [];
  EquipmentDetails: Array<any> = [];
  MaterialConsumptionDetails: Array<any> = [];
  InventoryDetails: Array<any> = [];
  IssueDetails: Array<any> = [];
  ProjectProgressReport: Array<any> = [];
  DprDetails: any = {};
  constructor() { }


  ngOnInit(): void {
    this.setToday();
  }

  // based on date filter change set start and end date
  setDprFilterDate() {
    switch (this.DateMode) {
      case "1":
        this.setToday();
        break;
      case "2":
        this.setYesterDay();
        break;
      case "3":
        this.filter.EndDate = new Date();
        this.filter.StartDate = new Date();
        this.filter.StartDate.setDate(this.filter.StartDate.getDate() - 1);
        break;
      default:
        break;
    }
  }

  // set start and end date while select date from date picker
  setDate() {
    if (!!this.filter.StartDate && !!this.filter.EndDate) {
      if (+new Date(this.filter.StartDate) < +new Date(this.filter.EndDate)) {
        this.filter.StartDate.setHours(0);
        this.filter.StartDate.setMinutes(0);
        this.filter.EndDate.setHours(23);
        this.filter.EndDate.setMinutes(59);
      } else {
      }
    } else {
    }
  }

  // set today date
  setToday() {
    let StartDate = new Date();
    let EndDate = new Date();
    StartDate.setHours(0);
    StartDate.setMinutes(0);
    StartDate.setMilliseconds(0);
    EndDate.setHours(23);
    EndDate.setMinutes(59);
    EndDate.setMilliseconds(59);
    this.filter.StartDate = StartDate;
    this.filter.EndDate = EndDate;
  }

  // set yesterday date
  setYesterDay() {
    let StartDate = new Date();
    let EndDate = new Date();
    StartDate.setDate(StartDate.getDate() - 1);
    StartDate.setHours(0);
    StartDate.setMinutes(0);
    StartDate.setMilliseconds(0);
    EndDate.setDate(EndDate.getDate() - 1);
    EndDate.setHours(23);
    EndDate.setMinutes(59);
    EndDate.setMilliseconds(59);
    this.filter.StartDate = StartDate;
    this.filter.EndDate = EndDate;
  }
}
