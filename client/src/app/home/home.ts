import { Component, signal } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  title = signal('Dashboard');
  message: any;
  constructor(private apiService: ApiService) { };
  ngOnInit() {
      this.apiService.getMessage().subscribe(data => {
          this.message = data;
      });
  }

}
