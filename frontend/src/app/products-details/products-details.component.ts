import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  productData = {}
  constructor(private _product: ProductsService, private _router: Router) { }

  ngOnInit() {
  }

  updateProduct() {
    this._product.updateProduct(this.productData)
      res => {
        console.log(res)
      }
      error => console.error(error) 
  }


  deleteProduct() {
    this._product.deleteProduct(this.productData)
      res => {
        console.log(res)
      }
      error => console.error(error)
  }
}
