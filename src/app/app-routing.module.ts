import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'track-by',
    pathMatch: 'full'
  },
  {
    path: 'virtual-scrolling',
    loadChildren: () => import('./virtual-scrolling/virtual-scrolling.module').then(m => m.VirtualScrollingModule)
  },
  {
    path: 'track-by',
    loadChildren: () => import('./track-by/track-by.module').then(m => m.TrackByModule)
  },
  {
    path: 'graphs',
    loadChildren: () => import('./graphs/graphs.module').then(m => m.GraphsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
