import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // store the array of the current products in the cart
  items: Product[] = [];

  // add item to cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  // get items from cart
  getItems() {
    return this.items;
  }

  // empty cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  
  constructor(private http: HttpClient) {}
}
