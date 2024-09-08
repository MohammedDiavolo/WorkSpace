import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
_http = inject(HttpClient);
data: any[] = [];
dataCategory: any[] = [];


private baseUrl: any = 'https://fakestoreapi.com';

constructor( ) {}

getAllProducts(){
  return this._http.get(`${this.baseUrl}/products`)
}

getAllCategories() {
  return this._http.get(`${this.baseUrl}/products/categories`)
}

getProductByCategory(keyword:string){
  return this._http.get(`${this.baseUrl}/products/category/${keyword}`)
}

getProductById(id:any){
  return this._http.get(`${this.baseUrl}/products/${id}`)
}

createProduct(model: any) {
  return this._http.post(`${this.baseUrl}/products`, model);
}

}
