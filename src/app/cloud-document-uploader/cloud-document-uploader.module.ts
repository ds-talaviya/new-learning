import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudDocumentUploaderRoutingModule } from './cloud-document-uploader-routing.module';
import { CloudDocumentUploaderComponent } from './cloud-document-uploader/cloud-document-uploader.component';


@NgModule({
  declarations: [
    CloudDocumentUploaderComponent
  ],
  imports: [
    CommonModule,
    CloudDocumentUploaderRoutingModule
  ]
})
export class CloudDocumentUploaderModule { }
