import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogTimeComponent } from './log-time/log-time.component';
import { ShowHistoryComponent } from './show-history/show-history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {   HttpClientModule} from '@angular/common/http'
import { DataService } from './service/data.service';
import { AuthGuard } from './auth/auth.guard';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore'; 
import {AngularFireModule} from '@angular/fire/compat'
@NgModule({
  declarations: [
    AppComponent,
    LogTimeComponent,
    ShowHistoryComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [DataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
