import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.scss']
})
export class FirestoreComponent implements OnInit {
  allData: any[] = [];
  docId = 'leads';
  singleData: any;

  constructor(private fs: FirestoreService, private af: AngularFireStorage) { }

  ngOnInit() {
    this.getAll();
  }

  add() {
    this.fs.addData(this.docId, { name: 'leads', status: 'active' })
      .then(() => this.getAll());
  }

  edit() {
    this.fs.editData(this.docId, { status: 'inactive' })
      .then(() => this.getAll());
  }

  delete() {
    this.fs.deleteData(this.docId)
      .then(() => this.getAll());
  }

  getAll() {
    this.fs.getAll().subscribe(res => {
      this.allData = res.map(e => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data() as any
      }));
    });
  }

  getById() {
    this.fs.getById(this.docId).subscribe(res => {
      this.singleData = res;
    });
  }
}

