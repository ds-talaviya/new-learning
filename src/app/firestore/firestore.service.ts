import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private collectionName = 'my-data';

  constructor(private afs: AngularFirestore) { }

  addData(id: string, data: any) {
    return this.afs.doc(`${this.collectionName}/${id}`).set(data);
  }

  editData(id: string, data: any) {
    return this.afs.doc(`${this.collectionName}/${id}`).update(data);
  }

  deleteData(id: string) {
    return this.afs.doc(`${this.collectionName}/${id}`).delete();
  }

  getById(id: string) {
    return this.afs.doc(`${this.collectionName}/${id}`).valueChanges();
  }

  getAll() {
    return this.afs.collection(this.collectionName).snapshotChanges();
  }
}
