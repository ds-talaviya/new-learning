import { Component, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements AfterContentInit {
  @ContentChild('content') content: ElementRef;
  hasContent = false;

  ngAfterContentInit() {
    this.hasContent = !!this.content;
  }
}
