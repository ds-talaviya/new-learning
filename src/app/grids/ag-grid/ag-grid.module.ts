import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridRoutingModule } from './ag-grid-routing.module';
import { AgGridRowExpandComponent } from './ag-grid-row-expand/ag-grid-row-expand.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import { ModuleRegistry } from '@ag-grid-community/core';

@NgModule({
  declarations: [
    AgGridRowExpandComponent
  ],
  imports: [
    CommonModule,
    AgGridRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class _AgGridModule {
    constructor() {
      ModuleRegistry.registerModules(AllModules);
    }
}