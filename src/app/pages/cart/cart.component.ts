import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CartService } from '../../services/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartProducts: any[] = [];
  subTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProducts();
    this.calculateSubTotal();
  }

  calculateSubTotal() {
    this.subTotal = this.cartService.calculateSubTotal();
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.calculateSubTotal();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartProducts = [];
    this.calculateSubTotal();
  }
}