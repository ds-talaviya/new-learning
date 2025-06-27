import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirestoreComponent } from './firestore/firestore.component';

const routes: Routes = [
  {
    path: '', component: FirestoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirestoreRoutingModule { }
