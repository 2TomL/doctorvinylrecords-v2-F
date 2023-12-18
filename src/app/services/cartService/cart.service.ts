import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: any[] = [];

  constructor(private http: HttpClient){ 
  }

  getCartProducts(): any[] {
    return this.cartProducts;
  }

  removeFromCart(product: any): void {
    const index = this.cartProducts.findIndex(p => p === product);
    if (index !== -1) {
      this.cartProducts.splice(index, 1);
    }
}
calculateSubTotal(): number {
  return this.cartProducts.reduce((total, product) => total + product.productPrice, 0);
}
clearCart(): void {
  this.cartProducts = [];
}
fetchProductData(productId: number): Observable<any> {
  const url = `http://localhost:8080/api/vinyl/${productId}`;
  return this.http.get(url);
}
}