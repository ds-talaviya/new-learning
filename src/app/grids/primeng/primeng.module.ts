import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengRoutingModule } from './primeng-routing.module';
import { PrimengRowExpandFixedColumnComponent } from './primeng-row-expand-fixed-column/primeng-row-expand-fixed-column.component';
import { TreeTableModule } from 'primeng/treetable';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton'
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    PrimengRowExpandFixedColumnComponent
  ],
  imports: [
    CommonModule,
    PrimengRoutingModule,
    FormsModule,
    TreeTableModule,
    SelectButtonModule,
    ButtonModule,
    MultiSelectModule
  ]
})
export class PrimengModule { }
