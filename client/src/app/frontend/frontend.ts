import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule
  ],
  templateUrl: './frontend.html',
  styleUrl: './frontend.scss',
})
export class Frontend {
  cartItemCount = 2;
  
  categories = ['All', 'Electronics', 'Clothing', 'Home & Garden', 'Sports'];

  products: Product[] = [
    {
      id: 1,
      title: 'Premium Wireless Headphones',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
      category: 'Electronics',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Minimalist Smart Watch',
      price: 199.50,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
      category: 'Electronics',
      rating: 4.5
    },
    {
      id: 3,
      title: 'Ergonomic Desk Chair',
      price: 159.00,
      image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80',
      category: 'Home & Garden',
      rating: 4.2
    },
    {
      id: 4,
      title: 'Classic Leather Sneakers',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80',
      category: 'Clothing',
      rating: 4.6
    },
    {
      id: 5,
      title: 'Professional Camera Lens',
      price: 849.00,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
      category: 'Electronics',
      rating: 4.9
    },
    {
      id: 6,
      title: 'Organic Cotton T-Shirt',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
      category: 'Clothing',
      rating: 4.3
    },
    {
      id: 7,
      title: 'Yoga Mat with Alignment Lines',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80',
      category: 'Sports',
      rating: 4.7
    },
    {
      id: 8,
      title: 'Ceramic Coffee Mug Set',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80',
      category: 'Home & Garden',
      rating: 4.8
    }
  ];
}
