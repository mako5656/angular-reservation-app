import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: { 
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
      const productId = params.get('productId');
      if (productId !== null) {
        this.product = this.productService.getProductById(+params.get('productId')!);
      }
    });
  }
}
