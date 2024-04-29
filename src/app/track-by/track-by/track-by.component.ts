import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss']
})
export class TrackByComponent implements OnInit {

  users = [{
    "id": 1,
    "name": "Angelita"
  }, {
    "id": 2,
    "name": "Ginevra"
  }, {
    "id": 3,
    "name": "Dominga"
  }, {
    "id": 4,
    "name": "Jesselyn"
  }, {
    "id": 5,
    "name": "Claudetta"
  }]

  constructor() { }

  ngOnInit(): void {
  }

  assignSameData() {
    // // below code work same in normal and trackby as then reference of array is same
    // this.users.push({ id: 6, name: 'Dhruvil' })



    // // assign same data in list
    // this.users = [{
    //   "id": 1,
    //   "name": "Angelita"
    // }, {
    //   "id": 2,
    //   "name": "Ginevra"
    // }, {
    //   "id": 3,
    //   "name": "Dominga"
    // }, {
    //   "id": 4,
    //   "name": "Jesselyn"
    // }, {
    //   "id": 5,
    //   "name": "Claudetta"
    // }]



    // // add new item in list
    // this.users = [{
    //   "id": 1,
    //   "name": "Angelita"
    // }, {
    //   "id": 2,
    //   "name": "Ginevra"
    // }, {
    //   "id": 3,
    //   "name": "Dominga"
    // }, {
    //   "id": 4,
    //   "name": "Jesselyn"
    // }, {
    //   "id": 5,
    //   "name": "Claudetta"
    // }, {
    //   "id": 6,
    //   "name": "Dhruvil"
    // }]



    // // change id of object
    // this.users = [{
    //   "id": 11, // only render this object
    //   "name": "Angelita"
    // }, {
    //   "id": 2,
    //   "name": "Ginevra"
    // }, {
    //   "id": 3,
    //   "name": "Dominga"
    // }, {
    //   "id": 4,
    //   "name": "Jesselyn"
    // }, {
    //   "id": 5,
    //   "name": "Claudetta"
    // }]



    // // change value except unique id(id)
    // this.users = [{
    //   "id": 1, // this will also render
    //   "name": "Dhruvil"
    // }, {
    //   "id": 2,
    //   "name": "Ginevra"
    // }, {
    //   "id": 3,
    //   "name": "Dominga"
    // }, {
    //   "id": 4,
    //   "name": "Jesselyn"
    // }, {
    //   "id": 5,
    //   "name": "Claudetta"
    // }]



    // // adding same object 
    // this.users = [{
    //   "id": 1,
    //   "name": "Angelita"
    // }, {
    //   "id": 1,
    //   "name": "Angelita"
    // }, {
    //   "id": 2,
    //   "name": "Ginevra"
    // }, {
    //   "id": 3,
    //   "name": "Dominga"
    // }, {
    //   "id": 4,
    //   "name": "Jesselyn"
    // }, {
    //   "id": 5,
    //   "name": "Claudetta"
    // }]



    // // if we change order
    // this.users = [{
    //   "id": 1,
    //   "name": "Angelita"
    // }, {
    //   "id": 4, // rendered
    //   "name": "Jesselyn"
    // }, {
    //   "id": 5, // rendered
    //   "name": "Claudetta"
    // }, {
    //   "id": 2,
    //   "name": "Ginevra"
    // }, {
    //   "id": 3,
    //   "name": "Dominga"
    // }]
  }

  trackById(index: number, user: any) {
    return user.id
  }
}
