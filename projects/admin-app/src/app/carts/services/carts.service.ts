import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  _http = inject(HttpClient);

  private baseUrl: any = 'https://fakestoreapi.com';

  constructor() { }

  getAllCarts(param?:any){
    let params = new HttpParams()
    params = params.append("startDate", param?.start).append("endDate",param?.end)
    return this._http.get(`${this.baseUrl}/carts`,{params})
  }

  deleteCart(id:number){
    return this._http.delete(`${this.baseUrl}/carts/${id}`)

  }
}
