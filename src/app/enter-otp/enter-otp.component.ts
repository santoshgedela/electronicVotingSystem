import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.component.html',
  styleUrls: ['./enter-otp.component.scss']
})
export class EnterOTPComponent implements OnInit {
  otpForm: FormGroup;
  users: any;
  data: any;
  otpData: any

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private service: UsersService) {

    this.otpData = JSON.parse(sessionStorage.getItem('userData')!);
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
    });
  }
  ngOnInit(): void {

  }
  get otpFormErrors() {
    return this.otpForm.controls

  }

  verifyOTP() {
    const enteredOTP = this.otpForm.value.otp;
    if (enteredOTP == this.otpData.otp) {
      if (this.otpData?.candidate == 1) {
        this.router.navigateByUrl('/nomination');

      } else {
        this.router.navigateByUrl('/voting');
      }
    } else {

      alert('Incorrect OTP. Please enter the correct OTP.');

    }
  }
}
