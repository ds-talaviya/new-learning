import { Component } from '@angular/core';
import { PostalChannelServiceService } from '../postal-channel-service.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  constructor(private postal: PostalChannelServiceService) { }

  send() {
    this.postal.sendMessage({ type: 'GREET', content: 'Hello from another tab!' });
  }

}
