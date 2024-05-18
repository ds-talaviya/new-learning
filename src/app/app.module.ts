import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CacheClearHardRefreshWebsiteComponent } from './cache-clear-hard-refresh-website/cache-clear-hard-refresh-website.component';

@NgModule({
  declarations: [
    AppComponent,
    CacheClearHardRefreshWebsiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
