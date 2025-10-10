import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContollerService {

  constructor(private api: ApiService) { }

  getUsers(payload: any) {
    return new Promise((res, rej) => {
      this.api.get('users', JSON.stringify(payload)).subscribe((data: any) => {
        res(data);
      }, (err) => {
        rej(err);
      });
    })
  }

  getUserById(id: number) {
    return new Promise((res, rej) => {
      this.api.get('users/' + id).subscribe((data: any) => {
        res(data);
      }, (err) => {
        console.log(err)
        rej(err);
      });
    })
  }

  deleteUser(id: number) {
    return new Promise((res, rej) => {
      this.api.delete('users/' + id).subscribe((data: any) => {
        res(data);
      }, (err) => {
        console.log(err)
        rej(err);
      });
    })
  }

  updateUser(id: number, payload: any) {
    return new Promise((res, rej) => {
      this.api.patch('users/' + id, payload).subscribe((data: any) => {
        res(data);
      }, (err) => {
        console.log(err)
        rej(err);
      });
    })
  }

  addUser(payload: any) {
    return new Promise((res, rej) => {
      this.api.post('users', payload).subscribe((data: any) => {
        res(data);
      }, (err) => {
        console.log(err)
        rej(err);
      });
    })
  }
}
