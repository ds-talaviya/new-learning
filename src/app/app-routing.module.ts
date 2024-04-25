import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'virtual-scrolling',
    loadChildren: () => import('./virtual-scrolling/virtual-scrolling.module').then(m => m.VirtualScrollingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
