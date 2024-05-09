import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { OrgGraphComponent } from './d3-org-chart/org-graph.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { BasicOrgGraphComponent } from './d3-org-chart/basic-org-graph/basic-org-graph.component';


@NgModule({
  declarations: [
    OrgGraphComponent,
    BasicOrgGraphComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    OrganizationChartModule
  ]
})
export class GraphsModule { }
