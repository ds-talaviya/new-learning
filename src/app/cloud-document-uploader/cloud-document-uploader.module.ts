import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudDocumentUploaderRoutingModule } from './cloud-document-uploader-routing.module';
import { CloudDocumentUploaderComponent } from './cloud-document-uploader/cloud-document-uploader.component';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CloudDocumentUploaderComponent
  ],
  imports: [
    CommonModule,
    CloudDocumentUploaderRoutingModule,
    ImagekitioAngularModule.forRoot({
      publicKey: "public_rhyB6mJFoPtRWbvQGNV7SKDyKCE=",
      urlEndpoint: "https://ik.imagekit.io/rghybhnpd",
      authenticationEndpoint: "http://localhost:3000/api/auth"
    }),
    HttpClientModule
  ]
})
export class CloudDocumentUploaderModule { }
