import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CacheClearHardRefreshWebsiteComponent } from './cache-clear-hard-refresh-website/cache-clear-hard-refresh-website.component';
import { AppInitializerService } from './app-initializer.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

export function initApp(appInitializerService: AppInitializerService) {
  return () => appInitializerService.loadConfig();
}

const firebaseConfig = {
  apiKey: "AIzaSyDJVzdi9ANa5CWF4SjL6_ffeiDoCwHP-CQ",
  authDomain: "angular-tutorial-b20af.firebaseapp.com",
  databaseURL: "https://angular-tutorial-b20af-default-rtdb.firebaseio.com",
  projectId: "angular-tutorial-b20af",
  storageBucket: "angular-tutorial-b20af.firebasestorage.app",
  messagingSenderId: "851901980001",
  appId: "1:851901980001:web:3e7f8d7851a6cfddaa3920",
  measurementId: "G-YDD5PZ70VM"
};

@NgModule({
  declarations: [
    AppComponent,
    CacheClearHardRefreshWebsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule
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
