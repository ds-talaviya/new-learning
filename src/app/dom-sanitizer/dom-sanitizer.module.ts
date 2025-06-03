import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomSanitizerRoutingModule } from './dom-sanitizer-routing.module';
import { DomSanitizerComponent } from './dom-sanitizer/dom-sanitizer.component';


@NgModule({
  declarations: [
    DomSanitizerComponent
  ],
  imports: [
    CommonModule,
    DomSanitizerRoutingModule
  ]
})
export class DomSanitizerModule { }
