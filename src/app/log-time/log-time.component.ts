import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { FirebaseDataService } from '../firebase/firebase-data.service';
import { logtime } from '../models/logtime';
import { UserdataService } from '../service/userdata.service';
@Component({
  selector: 'app-log-time',
  templateUrl: './log-time.component.html',
  styleUrls: ['./log-time.component.css']
})
export class LogTimeComponent implements OnInit { 
  //to store the department value
selectedrole: string = '';
//to store the group of form fields
 logtime!:FormGroup; 
 datalist:logtime[]=[]
 data:logtime={ 
   id:'',
   pname: '',
   date:'',
   timework:'',
   role:'',
   desc: ''
 } 
 //for firebase
 
  constructor(private formBuilder:FormBuilder,private user:UserdataService,private firebase:FirebaseDataService) { }
 //event handler for the select element's change event 
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedrole = event.target.value;
  }
  ngOnInit(): void {  
    this.logtime=this.formBuilder.group({
      pname:[''] ,
      date:[''],
      timework:[''],
      role:[''],
      desc:['']
    }) 
    this.getalldata()
  } 
  submit(){  
    this.data=this.logtime.value 
    this.data.role=this.selectedrole 
    //this below funtion stores thre data in a service , but once we refresh the page 
    //the data is lost
   // this.user.pushdata(this.data)   
   //to overcome this, we are pushing data to the firestore
    this.firebase.addData(this.data) 
    //once  data is pushed into the firebase collection, reset form values
    this.logtime.reset()
    console.log("pull data")  
    console.log(this.data) 
   // console.log(this.user.retrievedata())
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
 delete(s:logtime){
  this.firebase.deldata(s)
}

}
