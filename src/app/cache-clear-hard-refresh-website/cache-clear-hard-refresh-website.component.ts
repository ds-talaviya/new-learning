import { Component } from '@angular/core';

@Component({
  selector: 'app-cache-clear-hard-refresh-website',
  templateUrl: './cache-clear-hard-refresh-website.component.html',
  styleUrls: ['./cache-clear-hard-refresh-website.component.scss']
})
export class CacheClearHardRefreshWebsiteComponent {
  clearCacheAndReload() {
    // Clear all service worker caches
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }

    // Reload the page
    window.location.reload();
  }

}
