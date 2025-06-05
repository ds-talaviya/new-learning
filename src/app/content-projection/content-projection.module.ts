import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ContentProjectionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ContentProjectionRoutingModule
  ]
})
export class ContentProjectionModule { }
