import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCompressRoutingModule } from './image-compress-routing.module';
import { ImageCompressComponent } from './image-compress/image-compress.component';


@NgModule({
  declarations: [
    ImageCompressComponent
  ],
  imports: [
    CommonModule,
    ImageCompressRoutingModule
  ]
})
export class ImageCompressModule { }
