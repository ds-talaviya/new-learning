import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportsComponent } from './exports.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pdf',
    pathMatch: 'full'
  },
  {
    path: 'pdf',
    component: ExportsComponent,
    loadChildren: () => import('./pdf/pdf.module').then((m) => m.PdfModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportsRoutingModule { }
