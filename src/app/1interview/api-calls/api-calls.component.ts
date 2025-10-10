import { Component, OnInit } from '@angular/core';
import { ContollerService } from './contoller.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.scss']
})
export class APICallsComponent implements OnInit {
  users: any = [];
  userData: any = null;
  loading = false;
  error = "";
  pagination = { pageNumber: 0, pageSize: 10 }
  constructor(private cs: ContollerService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.users = [];
    this.error = "";
    this.cs.getUsers(this.pagination).then((data: any) => {
      this.loading = false;
      this.users = data;
    }).catch(e => {
      this.loading = false;
      this.error = e.message;
      console.error(e);
    })
  }

  getUserById(id: number) {
    this.loading = true;
    this.userData = null;
    this.error = "";
    this.cs.getUserById(id).then((data: any) => {
      this.loading = false;
      this.userData = data;
    }).catch(e => {
      this.loading = false;
      this.error = e;
      console.error(e);
    })
  }

  addUser() {
    this.loading = true;
    let user = {};
    this.error = "";
    user = {
      "first_name": "Dhruvil" + Math.random(),
      "last_name": "Talaviya",
      "email": "dhruvil@gmail.com",
      "gender": "male"
    },
      this.cs.addUser(user).then((data: any) => {
        this.loading = false;
        this.getUsers();
      }).catch(e => {
        this.loading = false;
        this.error = e;
        console.error(e);
      })
  }
  updateUser(user: any) {
    this.loading = true;
    this.error = "";
    this.cs.updateUser(user.id, user).then((data: any) => {
      this.loading = false;
      this.getUsers();
    }).catch(e => {
      this.loading = false;
      this.error = e;
      console.error(e);
    })
  }
  deleteUser(user: any) {
    this.error = "";
    this.loading = true;
    this.cs.deleteUser(user.id).then((data: any) => {
      this.loading = false;
      this.getUsers();
    }).catch(e => {
      this.loading = false;
      this.error = e;
      console.error(e);
    })
  }
}
