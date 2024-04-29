import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackByRoutingModule } from './track-by-routing.module';
import { TrackByComponent } from './track-by/track-by.component';


@NgModule({
  declarations: [
    TrackByComponent
  ],
  imports: [
    CommonModule,
    TrackByRoutingModule
  ]
})
export class TrackByModule { }
