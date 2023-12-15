import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterOTPComponent } from './enter-otp/enter-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyAadharComponent } from './verify-aadhar/verify-aadhar.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { CandidateRegComponent } from './candidate-reg/candidate-reg.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NominationComponent } from './nomination/nomination.component';
import { VotingComponent } from './voting/voting.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    VerifyAadharComponent,
    EnterOTPComponent,
    UserRegComponent,
    CandidateRegComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    NominationComponent,
    VotingComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
