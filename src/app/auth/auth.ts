import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],

  templateUrl: './auth.html',
  styleUrls: ['./auth.css'],
})
export class Auth {
  googleLogo = '/google.png';
  isLoginMode = false;

  signUpForm: FormGroup;
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onCreateUser() {
    if (this.signUpForm.valid) {
      const userData = this.signUpForm.value;

      this.authService.registerUser(userData).subscribe({
        next: (response: any) => {
          console.log(' New user created:', response);
          this.isLoginMode = true;
          this.loginForm.patchValue({
            email: userData.email,
            password: userData.password,
          });
          Swal.fire({
            icon: 'success',
            title: 'Account Registered',
            text: `Redirecting to Login Page.`,
            confirmButtonColor: '#7e102c',
            background: 'rgba(43, 19, 25)',
            color: '#E1D4C1'
          });
        },
        error: (error: any) => {
          console.error('Error creating user:', error);
        },
        complete: () => {
          console.log('User created success.');
        },
      });
    } else {
      console.warn('Something went wrong!');
    }
  }
  onLogInUser() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      this.authService.logInUser(user).subscribe({
        next: (response: any) => {
          console.log('log in sucess', response);

          if (response && response.user && response.user._id) {
            localStorage.setItem('userId', response.user._id);
            localStorage.setItem('user', JSON.stringify(response.user));
      console.log('User stored successfully:', response.user);
          }
          this.router.navigate(['/main']);
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('Completed log in');
        },
      });
    }
  }
}
