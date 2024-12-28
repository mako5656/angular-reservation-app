import { Injectable } from "@angular/core";
import { products } from "../../products";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {}

    getProducts(): Observable<any> {
        return this.http.get('/api/v1/products');
    }

    getProductById(productId: number) {
        return products[productId];
    }
}