import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostalChannelServiceRoutingModule } from './postal-channel-service-routing.module';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { PostalChannelServiceComponent } from './postal-channel-service.component';


@NgModule({
  declarations: [
    PostalChannelServiceComponent,
    SenderComponent,
    ReceiverComponent
  ],
  imports: [
    CommonModule,
    PostalChannelServiceRoutingModule
  ]
})
export class PostalChannelServiceModule { }
