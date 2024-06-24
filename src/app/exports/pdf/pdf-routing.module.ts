import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfComponent } from './pdf.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ngx-print',
    pathMatch: 'full'
  },
  {
    path: 'ngx-print',
    component: PdfComponent,
    loadChildren: () => import('./ngx-print/ngx-print.module').then((m) => m.NgxPrintModules)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfRoutingModule { }
