import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCompressComponent } from './image-compress/image-compress.component';
import { ImageCompress2Component } from './image-compress2/image-compress2.component';

const routes: Routes = [
  {
    path: '', component: ImageCompressComponent
  },
  {
    path: 'new', component: ImageCompress2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageCompressRoutingModule { }
