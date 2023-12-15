import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})
export class UserRegComponent implements OnInit {
  registrationForm: FormGroup;
  fieldTextType: boolean= false;

  constructor(private fb: FormBuilder, private service: UsersService) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.minLength(6), Validators.required]],
      fullname: ['', [Validators.minLength(6), Validators.required]],
      email_id: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8), Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-zA-Z0-9])(?=.*[^a-zA-Z0-9]).*$/)]],
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      age: [{ value: '', disabled: true }, [Validators.required, Validators.min(18)]],
      voter_id: ['', [Validators.required, Validators.pattern(/^[A-Z]{3}\d{7}$/)]]
    });

    this.registrationForm.get('dob')?.valueChanges.subscribe((dob) => {
      this.calculateAge(dob);
    });
  }

  ngOnInit(): void {
  }

  calculateAge(dob: string): void {
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      const age = today.getFullYear() - birthDate.getFullYear();

      // Check if the age is below 18
      if (age < 18) {
        this.registrationForm.get('age')?.setErrors({ 'min': true });
      } else {
        // Clear the age validation error
        this.registrationForm.get('age')?.setErrors(null);

        // Update the age form control
        this.registrationForm.get('age')?.setValue(age);
      }
    }
  }

  get registerFormErrors() {
    return this.registrationForm.controls;
  }

  register() {
    this.service.createData(this.registrationForm.value).subscribe((x) => {
      console.log(this.registrationForm.value);
    });
  }
}
