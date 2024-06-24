import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPrintRoutingModule } from './ngx-print-routing.module';
import { NgxPrintComponent } from './ngx-print/ngx-print.component';
import { FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    NgxPrintComponent
  ],
  imports: [
    CommonModule,
    NgxPrintRoutingModule,
    FormsModule,
    NgxPrintModule
  ]
})
export class NgxPrintModules { }
