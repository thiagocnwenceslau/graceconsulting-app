import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productData = {}
  constructor(private _product: ProductsService, private _router: Router) {
    
   }

  ngOnInit() {
    this._product.getProduct()
    res => {
      console.log(res)
    }
    error => console.error(error)  
  }

  registerProduct() { 
    this._product.registerProduct(this.productData)
      res => {
        console.log(res)
        this._router.navigate(['/products'])
      }
      error => console.error(error) 
  }
}
