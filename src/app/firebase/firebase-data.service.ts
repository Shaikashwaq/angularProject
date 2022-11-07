import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { logtime } from '../models/logtime';
@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  constructor(private angF:AngularFirestore) { } 
  addData(s:logtime){
    s.id=this.angF.createId();
     this.angF.collection('/data').add(s)
  } 
  getallData(){
    return this.angF.collection('/data').snapshotChanges()
  } 
  deldata(s: logtime){
    return this.angF.doc('/data/'+ s.id).delete()

  } 
}
