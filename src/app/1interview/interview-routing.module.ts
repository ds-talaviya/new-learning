import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './communication/parent/parent.component';
import { SubectObservableComponent } from './subect-observable/subect-observable.component';
import { CDParentComponent } from './CD/parent.component';
import { OtherComponent } from './other/other.component';
import { LHParentComponent } from './LH/parent.component';
import { APICallsComponent } from './api-calls/api-calls.component';

const routes: Routes = [
  {
    path: '', component: ParentComponent,
    children: [
      {
        path: 'subect-observable', component: SubectObservableComponent
      }
    ]
  },
  {
    path: 'CD', component: CDParentComponent
  },
  {
    path: 'API-calls', component: APICallsComponent
  },
  {
    path: 'lh', component: LHParentComponent
  },
  {
    path: 'other', component: OtherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }
