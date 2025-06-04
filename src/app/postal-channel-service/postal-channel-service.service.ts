import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostalChannelServiceService implements OnDestroy {
  private channelName = 'my-postal-channel';
  private broadcastChannel?: BroadcastChannel;
  private messageSubject = new Subject<any>();

  public message$ = this.messageSubject.asObservable();

  constructor(private ngZone: NgZone) {
    if ('BroadcastChannel' in window) {
      this.broadcastChannel = new BroadcastChannel(this.channelName);
      this.broadcastChannel.onmessage = (event) => {
        // Run in Angular zone to trigger change detection
        // as postal channel works outside of angular (otherwise you can see just message inside console, but it wont reflect in view)
        this.ngZone.run(() => {
          this.messageSubject.next(event.data);
        });
      };
    } else {
      console.warn('BroadcastChannel API is not supported in this browser.');
    }
  }

  sendMessage(message: any) {
    if (this.broadcastChannel) {
      this.broadcastChannel.postMessage(message);
    }
  }

  ngOnDestroy() {
    this.broadcastChannel?.close();
  }
}
