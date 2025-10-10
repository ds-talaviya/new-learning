import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent, { static: true }) child: any;
  name = "Dhruvil";
  fullName = "";

  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
    console.log(this.child.childName);
  }

  onSetName(event: string) {
    this.fullName = event;
  }

  ngAfterViewInit(): void {
    console.log(this.child.childName);
  }

}
