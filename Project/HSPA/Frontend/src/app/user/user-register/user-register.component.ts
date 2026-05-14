import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class UserRegisterComponent implements OnInit {

  registrationData !: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registrationData = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }
  )
    // , 
    // {
    //   validators: this.passwordMatchValidator
    // });
  }

  passwordMatchValidator(fg: FormGroup) {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null :
    { passwordNotMatched : true };
  }

  onSubmit() {

    if (this.registrationData.invalid) {
      this.registrationData.markAllAsTouched();
      return;
    }

    console.log('Submit clicked');
    console.log(this.registrationData);
  }
}