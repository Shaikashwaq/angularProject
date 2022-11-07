import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
isloggedin:boolean;
  constructor(private http: HttpClient) { } 
  isAuthenticated(val:boolean){
    if(val){ 
     this.isloggedin=true
      return true
    } 
    else{ 
      this.isloggedin=false
      return false
    }
  }
}
