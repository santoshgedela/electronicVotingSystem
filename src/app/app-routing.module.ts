import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyAadharComponent } from './verify-aadhar/verify-aadhar.component';
import { EnterOTPComponent } from './enter-otp/enter-otp.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { CandidateRegComponent } from './candidate-reg/candidate-reg.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NominationComponent } from './nomination/nomination.component';
import { VotingComponent } from './voting/voting.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'userReg', component:UserRegComponent},
  { path: 'candidateReg', component:CandidateRegComponent},
  { path: 'login',component: VerifyAadharComponent },
  { path: 'enter-otp/:id', component: EnterOTPComponent },
  {path:'nomination', component:NominationComponent},
  { path: 'voting', component: VotingComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

