import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { FirebaseDataService } from '../firebase/firebase-data.service';
import { logtime } from '../models/logtime';

@Component({
  selector: 'app-show-history',
  templateUrl: './show-history.component.html',
  styleUrls: ['./show-history.component.css']
})
export class ShowHistoryComponent implements OnInit { 
  temp:any
  datalist:logtime[]=[] 
  templist:logtime[]=[] 
  i:number;
  constructor(private  firebase:FirebaseDataService, private location:Location) { }

  ngOnInit(): void { 
    this.getalldata()
  } 
  getalldata(){
    this.firebase.getallData().subscribe(
      (res:any)=>{
        this.datalist=res.map((e:any)=>{
          const data=e.payload.doc.data()
         data.id=e.payload.doc.id  
        console.log(this.datalist ) 
          return data
        }) 
      },
      (err)=>{ 
        alert('incorrect')
      }
    )
   } 
 filter(value:any){  

  this.temp=value
  // console.log(this.temp)  
  // console.log(this.datalist.length) 
  
  this.datalist.map((val)=>{
  if(val.date==this.temp){
  this.templist.push(val)
  }
  
  })
  // console.log(this.templist)
 } 
 previous(){
  this.location.back()
 }
}
