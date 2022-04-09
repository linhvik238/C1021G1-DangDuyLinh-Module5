import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  password: string;
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern(this.password)]),
    country: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern(/(84|03|05|07|08|09)[0-9]{8}/)])
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
