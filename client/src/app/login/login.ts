import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  credentials = { email: '', password: '' };
  message = '';

  constructor(private auth: ApiService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      error: err => this.message = 'Invalid email or password!'
    });
  }
}
