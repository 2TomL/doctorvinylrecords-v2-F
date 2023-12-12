import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartAddedSubject = new Subject<boolean>();
  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>("");
  }
  addToCart(obj: any) : Observable<any> {
    debugger;
    return this.http.post<any>("",obj);
  }

  getCartItemsByCustId(custId: number) : Observable<any[]>  {
    return this.http.get<any[]>("" + custId);
  }
   removeCartItemById(cartId: number) : Observable<any[]>  {
    return this.http.get<any[]>("" + cartId);
  }

  makeSale(obj: any) : Observable<any> {
    debugger;
    return this.http.post<any>("",obj);
  }
}
