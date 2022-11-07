import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { logtime } from '../models/logtime';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
 userdata:logtime[]=[]
  constructor() {  
    
   
  } 
  pushdata(val:any){
      this.userdata.push(val) 
      
  } 
  retrievedata(){
    return this.userdata
  }
}
