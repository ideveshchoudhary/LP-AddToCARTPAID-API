import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>("https://freeapi.gerasim.in/api/amazon/GetAllProducts")
  }
  addToCart(obj: any): Observable<any> {
    debugger
    return this.http.post<any>("https://freeapi.gerasim.in/api/amazon/AddToCart", obj)
  }
}
