import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportsRoutingModule } from './exports-routing.module';
import { ExportsComponent } from './exports.component';


@NgModule({
  declarations: [
    ExportsComponent
  ],
  imports: [
    CommonModule,
    ExportsRoutingModule
  ]
})
export class ExportsModule { }
