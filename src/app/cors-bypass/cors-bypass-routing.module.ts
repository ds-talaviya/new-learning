import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CORSBypassComponent } from './cors-bypass/cors-bypass.component';

const routes: Routes = [
  {
    path: '', component: CORSBypassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CORSBypassRoutingModule { }
