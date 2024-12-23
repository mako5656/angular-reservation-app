import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: { name: string; price: number; description: string } | undefined = undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      if (productId !== null) {
        this.product = products[+productId];
      }
    });
  }
}
