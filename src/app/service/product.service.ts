import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartAddedSubject = new Subject<boolean>();
  constructor(private http: HttpClient) {

  }
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>("https://freeapi.gerasim.in/api/amazon/GetAllProducts")
  }
  addToCart(obj: any): Observable<any> {
    return this.http.post<any>("https://freeapi.gerasim.in/api/amazon/AddToCart", obj)
  }
  getSingleCstId(custId: number): Observable<any[]> {
    return this.http.get<any[]>("https://freeapi.gerasim.in/api/amazon/GetCartProductsByCustomerId?id=" + custId)
  }
  singleItemDel(cartId: number): Observable<any[]> {
    return this.http.get<any[]>("https://freeapi.gerasim.in/api/amazon/DeleteProductFromCartById?id=" + cartId)
  }
  makeSingleSale(custId: number): Observable<any> {
    return this.http.post<any>("https://freeapi.gerasim.in/api/amazon/GetAllSaleByCustomerId", custId)
  }

}
