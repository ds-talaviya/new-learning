import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocketRoutingModule } from './socket-routing.module';
import { SocketComponent } from './socket/socket.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SocketComponent
  ],
  imports: [
    CommonModule,
    SocketRoutingModule,
    FormsModule
  ]
})
export class SocketModule { }
