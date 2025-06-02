import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlValueAccessorRoutingModule } from './control-value-accessor-routing.module';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ControlValueAccessorComponent,
    ToggleComponent
  ],
  imports: [
    CommonModule,
    ControlValueAccessorRoutingModule,
    FormsModule
  ]
})
export class ControlValueAccessorModule { }
