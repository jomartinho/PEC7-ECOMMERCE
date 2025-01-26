import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [ReactiveFormsModule, RouterModule], 
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <label>Username:</label>
      <input formControlName="username" />
      <label>Password:</label>
      <input formControlName="password" type="password" />
      <button type="submit">Login</button>
    </form>
  `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(() => {
        alert('Login successful!');
      });
    }
  }
}
