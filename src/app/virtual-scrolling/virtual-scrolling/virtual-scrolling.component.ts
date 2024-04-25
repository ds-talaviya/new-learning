import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.scss']
})
export class VirtualScrollingComponent implements OnInit {

  items = Array.from({ length: 40000 }).map((val, i) => `item #${i}`);
  constructor() { }

  ngOnInit(): void {
  }

}
