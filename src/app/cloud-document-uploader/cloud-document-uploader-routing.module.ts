import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudDocumentUploaderComponent } from './cloud-document-uploader/cloud-document-uploader.component';

const routes: Routes = [
  {
    path: '',
    component: CloudDocumentUploaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudDocumentUploaderRoutingModule { }
