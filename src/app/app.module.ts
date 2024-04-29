import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollingModule } from './virtual-scrolling/virtual-scrolling.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackByModule } from './track-by/track-by.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VirtualScrollingModule,
    TrackByModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
