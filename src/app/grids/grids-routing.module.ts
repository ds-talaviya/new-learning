import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnVisibilityComponent } from './column-visibility/column-visibility.component';
import { GridsComponent } from './grids.component';

const routes: Routes = [
  {
    path: '',
    component: GridsComponent
  },
  {
    path: 'column-visibility',
    component: ColumnVisibilityComponent
  },
  {
    path: 'ag-grid',
    component: GridsComponent,
    loadChildren: () => import('./ag-grid/ag-grid.module').then((m) => m._AgGridModule)
  },
  {
    path: 'primeng',
    component: GridsComponent,
    loadChildren: () => import('./primeng/primeng.module').then((m) => m.PrimengModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridsRoutingModule { }
