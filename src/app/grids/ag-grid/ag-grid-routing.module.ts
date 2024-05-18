import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridRowExpandComponent } from './ag-grid-row-expand/ag-grid-row-expand.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'row-expand',
    pathMatch: 'full'
  },
  {
    path: 'row-expand',
    component: AgGridRowExpandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgGridRoutingModule { }
