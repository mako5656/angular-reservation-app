import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: { 
    _id: string;
    cover_image: string;
    name: string; 
    price: number; 
    description: string ;
    heading1: string;
    heading2: string;
    heading3: string;
    heading_text1: string;
    heading_text2: string;
    heading_text3: string;
  } | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productObservable  = this.productService.getProductById(params.get('productId')!);
      productObservable.subscribe({
        next: (data: any) => {
          this.product = data;
        },
        error: (error: any) => {
          console.error('次のエラーが発生しました:', error);
        }
      });
    });
  }
}
