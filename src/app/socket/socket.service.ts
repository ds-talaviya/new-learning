import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  sendAnswer(data: any) {
    this.socket.emit('sendAnswer', data);
  }

  addUser(num: any) {
    this.socket.emit('users', num);
  }

  getUsers(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('users', (data: any) => {
        observer.next(data);
      });
    });
  }
  getId(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('userId', (data: any) => {
        observer.next(data);
      });
    });
  }
}
