import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  standalone: true
})
export class Register {
  user = { name: '', email: '', password: '' };
  message = '';

  constructor(private auth: ApiService, private router: Router) {}

  register() {
    this.auth.register(this.user).subscribe({
      next: res => {
        this.message = 'Registration successful!';
        this.router.navigate(['/login']);
      },
      error: err => this.message = 'Registration failed!'
    });
  }
}
