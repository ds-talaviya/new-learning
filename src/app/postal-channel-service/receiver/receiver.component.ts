import { Component, OnInit } from '@angular/core';
import { PostalChannelServiceService } from '../postal-channel-service.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
  message: any;

  constructor(private postal: PostalChannelServiceService) { }

  ngOnInit(): void {
    this.postal.message$.subscribe((msg) => {
      this.message = msg;
      console.log('Received message:', msg);
    });
  }

}
