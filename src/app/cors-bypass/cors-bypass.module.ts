import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CORSBypassRoutingModule } from './cors-bypass-routing.module';
import { CORSBypassComponent } from './cors-bypass/cors-bypass.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CORSBypassComponent
  ],
  imports: [
    CommonModule,
    CORSBypassRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CORSBypassModule { }
