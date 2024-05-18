import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimengRowExpandFixedColumnComponent } from './primeng-row-expand-fixed-column/primeng-row-expand-fixed-column.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'row-expand',
    pathMatch: 'full'
  },
  {
    path: 'row-expand',
    component: PrimengRowExpandFixedColumnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimengRoutingModule { }
