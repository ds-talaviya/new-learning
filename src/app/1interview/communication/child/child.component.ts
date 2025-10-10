import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Output() setName: EventEmitter<string> = new EventEmitter();
  childName = "TEST CHILD"
  constructor(public utilityService: UtilityService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.name)
    this.utilityService.serviceName.subscribe((data: string) => {
      this.name = data;
    })
  }

  ngOnInit(): void {
    console.log(this.name)
  }

  showFullName() {
    this.setName.emit("Talaviya " + this.name)
    this.utilityService.setServiceName("Talaviya " + this.name)
  }

}
