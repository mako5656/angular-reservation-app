import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  standalone: true,
  selector: 'app-product-listings',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent implements OnInit {
  products: { 
    cover_image: string;
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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const productObservable  = this.productService.getProducts();

    productObservable.subscribe({
      next: (data: any) => {
        this.products = data;
      },
      error: (error: any) => {
        console.error('次のエラーが発生しました:', error);
      },
      complete: () => {
        console.log('データ取得が完了しました');
      }
    });
  }
}
