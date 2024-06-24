import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridsRoutingModule } from './grids-routing.module';
import { ColumnVisibilityComponent } from './column-visibility/column-visibility.component';
import { ColumnVisibilityDirective } from './shared/column-visibility.directive';
import { FormsModule } from '@angular/forms';
import { GridsComponent } from './grids.component';


@NgModule({
  declarations: [
    ColumnVisibilityComponent,
    ColumnVisibilityDirective,
    GridsComponent
  ],
  imports: [
    CommonModule,
    GridsRoutingModule,
    FormsModule
  ]
})
export class GridsModule { }
