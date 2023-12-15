import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-verify-aadhar',
  templateUrl: './verify-aadhar.component.html',
  styleUrls: ['./verify-aadhar.component.scss']

})
export class VerifyAadharComponent implements OnInit {
  otpForm!: FormGroup;
  otpReceived: boolean = false;
  users: any;


  constructor(private formBuilder: FormBuilder, private router: Router, private service: UsersService) {
    this.otpForm = this.formBuilder.group({
      email_id: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }
  ngOnInit(): void {
    // this.service.getData().subscribe((a: any) => {
    //   this.users = a;
    //   console.log(this.users)
    // });
  
  }

  get otpFormErrors() {
    return this.otpForm.controls

  }




  login() {
    // const user = this.users.find(
    //   (x: any) =>
    //     x.email_id === this.otpForm.value.email_id && x.password === this.otpForm.value.password
    // );

    // if (user) {
    //   sessionStorage.setItem('id', user.id);
    const userData = {
      email_id: this.otpForm.value.email_id,
      password: this.otpForm.value.password,

    };
    
    this.service.getOtp(userData).subscribe((response: any) => {
      sessionStorage.setItem('userData', JSON.stringify(response));
      this.router.navigate([`/enter-otp/${response.otp}`]);
    }, (error: HttpErrorResponse) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: 'error',
        title: 'Invalid credentials',
      });
    });

    // } else {

    // }
  }

}
