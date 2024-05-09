import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgGraphComponent } from './d3-org-chart/org-graph.component';
import { BasicOrgGraphComponent } from './d3-org-chart/basic-org-graph/basic-org-graph.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'basic-org', pathMatch: 'full'
  },
  {
    path: 'org', component: OrgGraphComponent
  },
  {
    path: 'basic-org', component: BasicOrgGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
