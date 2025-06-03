import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomSanitizerComponent } from './dom-sanitizer/dom-sanitizer.component';

const routes: Routes = [
  {
    path: '',
    component: DomSanitizerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomSanitizerRoutingModule { }
