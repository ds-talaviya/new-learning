import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {

  num = null;
  name = null;
  users: any = [];
  userId: any;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.getUsers().subscribe((msg: any) => {
      console.log(msg)
      this.users = msg;
    });
    this.socketService.getId().subscribe((msg: any) => {
      this.userId = msg;
      sessionStorage.setItem('userId', msg)
    });

    let userId: any = sessionStorage.getItem('userId') || 0;
    this.userId = +userId;
    console.log(typeof this.userId)
  }

  sendAnswer() {
    console.log("called", this.num)
    if (this.num) {
      this.socketService.sendAnswer({ input: this.num, userId: this.userId });
      this.num = null;
    }
  }

  addUser() {
    if (this.name) {
      this.socketService.addUser(this.name);
      this.name = null;
    }
  }

}
