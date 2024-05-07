import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { OrgGraphComponent } from './org-graph/org-graph.component';
import { OrganizationChartModule } from 'primeng/organizationchart';


@NgModule({
  declarations: [
    OrgGraphComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    OrganizationChartModule
  ]
})
export class GraphsModule { }
