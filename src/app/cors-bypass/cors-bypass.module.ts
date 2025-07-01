import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CORSBypassRoutingModule } from './cors-bypass-routing.module';
import { CORSBypassComponent } from './cors-bypass/cors-bypass.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CORSBypassComponent
  ],
  imports: [
    CommonModule,
    CORSBypassRoutingModule,
    FormsModule
  ]
})
export class CORSBypassModule { }
