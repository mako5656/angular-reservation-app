import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../products';

@Component({
  standalone: true,
  selector: 'app-product-listings',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent implements OnInit {
  products: { 
    name: string; 
    price: number; 
    description: string; 
    heading1: string;
    heading2: string;
    heading3: string;
    heading_text1: string;
    heading_text2: string;
    heading_text3: string;
  }[] = [];

  constructor() { }

  ngOnInit() {
    this.products = products;
  }
}
