import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CacheClearHardRefreshWebsiteComponent } from './cache-clear-hard-refresh-website/cache-clear-hard-refresh-website.component';

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
  {
    path: 'image-compress',
    loadChildren: () => import('./image-compress/image-compress.module').then(m => m.ImageCompressModule)
  },
  {
    path: 'cache-clear-hard-refresh-website',
    component: CacheClearHardRefreshWebsiteComponent
  },
  {
    path: 'grids',
    loadChildren: () => import('./grids/grids.module').then((m) => m.GridsModule)
  },
  {
    path: 'exports',
    loadChildren: () => import('./exports/exports.module').then((m) => m.ExportsModule)
  },
  {
    path: '3d-website',
    loadChildren: () => import('./3d-website/3d-website.module').then((m) => m._3dWebsiteModule)
  },
  {
    path: 'control-value-accessor',
    loadChildren: () => import('./control-value-accessor/control-value-accessor.module').then((m) => m.ControlValueAccessorModule)
  },
  {
    path: 'socket',
    loadChildren: () => import('./socket/socket.module').then((m) => m.SocketModule)
  },
  {
    path: 'dom-sanitizer',
    loadChildren: () => import('./dom-sanitizer/dom-sanitizer.module').then((m) => m.DomSanitizerModule)
  },
  {
    path: 'postal-channel-service',
    loadChildren: () => import('./postal-channel-service/postal-channel-service.module').then((m) => m.PostalChannelServiceModule)
  },
  {
    path: 'content-projection',
    loadChildren: () => import('./content-projection/content-projection.module').then((m) => m.ContentProjectionModule)
  },
  {
    path: 'firestore',
    loadChildren: () => import('./firestore/firestore.module').then((m) => m.FirestoreModule)
  },
  {
    path: 'cloud-document-uploader',
    loadChildren: () => import('./cloud-document-uploader/cloud-document-uploader.module').then((m) => m.CloudDocumentUploaderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
