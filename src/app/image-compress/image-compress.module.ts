import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCompressRoutingModule } from './image-compress-routing.module';
import { ImageCompressComponent } from './image-compress/image-compress.component';
import { ImageCompress2Component } from './image-compress2/image-compress2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageCompressComponent,
    ImageCompress2Component
  ],
  imports: [
    CommonModule,
    ImageCompressRoutingModule,
    FormsModule
  ]
})
export class ImageCompressModule { }
