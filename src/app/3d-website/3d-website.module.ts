;
import { ThreeJsComponent } from './three-js/three-js.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { _3dWebsiteRoutingModule } from './3d-website-routing.module';


@NgModule({
  declarations: [
    ThreeJsComponent
  ],
  imports: [
    CommonModule,
    _3dWebsiteRoutingModule
  ]
})
export class _3dWebsiteModule { }
