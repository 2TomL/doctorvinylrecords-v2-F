import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartAddedSubject = new Subject<boolean>();
  constructor(private http: HttpClient) { }
  getAllVinyl(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>("http://localhost:8080/api/vinyl/getVinyls");
  }
  addToCart(obj: any) : Observable<any> {
    debugger;
    return this.http.post<any>("http://localhost:8080/api/cart/add",obj);
  }

  getCartItemsByCustId(custId: number) : Observable<any[]>  {
    return this.http.get<any[]>("" + custId);
  }
   removeCartItemById(cartId: number) : Observable<any[]>  {
    return this.http.get<any[]>("http://localhost:8080/api/cart/remove" + cartId);
  }

  makeSale(obj: any) : Observable<any> {
    debugger;
    return this.http.post<any>("http://localhost:8080/api/sale/make",obj);
  }
}
