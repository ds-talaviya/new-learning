import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CacheClearHardRefreshWebsiteComponent } from './cache-clear-hard-refresh-website/cache-clear-hard-refresh-website.component';
import { AppInitializerService } from './app-initializer.service';

export function initApp(appInitializerService: AppInitializerService) {
  return () => appInitializerService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    CacheClearHardRefreshWebsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [AppInitializerService],
      useFactory: initApp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
