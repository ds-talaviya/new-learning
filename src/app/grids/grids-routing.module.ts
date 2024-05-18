import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ag-grid',
    pathMatch: 'full'
  },
  {
    path: 'ag-grid',
    loadChildren: () => import('./ag-grid/ag-grid.module').then((m) => m._AgGridModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridsRoutingModule { }
