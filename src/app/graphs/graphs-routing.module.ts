import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgGraphComponent } from './org-graph/org-graph.component';

const routes: Routes = [
  {
    path: 'org', component: OrgGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
