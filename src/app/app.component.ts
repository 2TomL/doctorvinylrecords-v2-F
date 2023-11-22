import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'doctorvinylrecords-v2';
  cartProducts: any[] = [];
  subTotal: number = 0;
  constructor(private productService: ProductService){
    this.productService.cartAddedSubject.subscribe(res=>{
      this.loadCart();
    })
  }
  ngOnInit(): void{
    this.loadCart();
  }
  loadCart(){
    this.productService.getCartItemsByCustId(1).subscribe((res:any)=>{
      this.cartProducts = res.data;
      debugger;
    })
  }
}
