import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'primeng',
    pathMatch: 'full'
  },
  {
    path: 'ag-grid',
    loadChildren: () => import('./ag-grid/ag-grid.module').then((m) => m._AgGridModule)
  },
  {
    path: 'primeng',
    loadChildren: () => import('./primeng/primeng.module').then((m) => m.PrimengModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridsRoutingModule { }
