import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs";
import { Product } from '../app/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _productsUrl = "http://localhost:3050/api/products";
  private _productsDetailsUrl = "http://localhost:3050/api/details"
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getProduct() {
    return this.http.get<Product[]>(this._productsUrl)
   .subscribe(
     res => console.log(res),
     error => console.error(error)
   )
  }

  registerProduct(product) {
    return this.http.post<any>(this._productsUrl, product)
    .subscribe(
      res => console.log(res),
      error => console.error(error)
    )
  }

  updateProduct(product) {
    return this.http.put(`${this._productsDetailsUrl}${product.id}`, product)
    .subscribe(
      res => console.log(res),
      error => console.error(error)
    )
  }

  deleteProduct(id) {
    return this.http.delete(`${this._productsDetailsUrl}/${id}`)
    .subscribe(
      res => console.log(res),
      error => console.error(error)
    )
  }

}
