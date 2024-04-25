import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollingRoutingModule } from './virtual-scrolling-routing.module';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    VirtualScrollingComponent
  ],
  imports: [
    CommonModule,
    VirtualScrollingRoutingModule,
    ScrollingModule
  ]
})
export class VirtualScrollingModule { }
