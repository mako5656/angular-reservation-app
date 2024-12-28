import { Injectable } from "@angular/core";
import { products } from "../../products";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    getProducts() {
        return products;
    }

    getProductById(productId: number) {
        return products[productId];
    }
}