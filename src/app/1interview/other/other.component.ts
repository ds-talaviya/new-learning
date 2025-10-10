import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  count = Math.floor(Math.random() * 10)
  constructor() { }

  ngOnInit(): void {
  }

}
