import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
 //holds the form values (name and password)
 login!:FormGroup;
  constructor(private formbuilder: FormBuilder, private http:HttpClient, private router :Router,private dataservice:DataService) { }
 //
  ngOnInit(): void { 
    this.login=this.formbuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  } 
  //we are invoking the localjson server available in our machine
  //signup is an object that holds set of user objects(email and password)

  submit(){
    this.http.get<any>("http://localhost:3000/signup").subscribe((res)=>{
      const val=res.find((a:any)=>{
        return a.email===this.login.value.email && a.password===this.login.value.password
  }); 
  // once the user clicks the submit button, the credentials are checked against the 
  //available credentials 
  //if true, then navigate to the homepage , else : pop up an error
  if(val)
  {
  alert("success, now you are navigating to the homepage");
  this.login.reset()
  this.router.navigate(['login/home'])  
  this.dataservice.isAuthenticated(true)

  }
  else{
  alert("Please Retry ") 
  this.dataservice.isAuthenticated(false)
}}) 

  }

}
