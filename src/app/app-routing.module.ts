import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LogTimeComponent } from './log-time/log-time.component';
import { LoginComponent } from './login/login.component';
import { ShowHistoryComponent } from './show-history/show-history.component';

const routes: Routes = [
  { path:'',component:LoginComponent,pathMatch:'full' },
 {path:'login',component:LoginComponent},
 {path:'login/home', component:HomeComponent,
canActivate:[AuthGuard]}, 
{path:'login/home/logtime',component:LogTimeComponent},
{path:'login/home/showhistory' ,component:ShowHistoryComponent},
{path:'**', component:LoginComponent}

  

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
