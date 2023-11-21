import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doctorvinylrecords-v2';
  cartProducts: any[] = [];
  subTotal: number = 0;
  constructor(private productService: ProductService){

  }
}
