import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { ChildComponent } from './communication/child/child.component';
import { ParentComponent } from './communication/parent/parent.component';
import { SubectObservableComponent } from './subect-observable/subect-observable.component';
import { CDParentComponent } from './CD/parent.component';
import { ChildOnpushComponent } from './CD/child-onpush.component';
import { ChildDefaultComponent } from './CD/child-default.component';
import { OtherComponent } from './other/other.component';
import { LHParentComponent } from './LH/parent.component';
import { LHChildComponent } from './LH/child.component';
import { APICallsComponent } from './api-calls/api-calls.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    SubectObservableComponent,
    CDParentComponent,
    ChildOnpushComponent,
    ChildDefaultComponent,
    OtherComponent,
    LHParentComponent,
    LHChildComponent,
    APICallsComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    HttpClientModule
  ]
})
export class InterviewModule { }
