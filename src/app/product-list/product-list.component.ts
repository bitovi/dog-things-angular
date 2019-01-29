import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import * as api from '../../api.js';

class Product {
  public name: String
  public desc: String
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>

  constructor() {}

  ngOnInit() {
    this.products = new Observable(observer => {
      let cont = true;
      let allProducts = [];

      api.getProducts(product => {

        if(cont) {
          allProducts.push(product);
          observer.next(allProducts);
        }
      });

      return {
        unsubscribe() {
          cont = false;
        }
      }
    });
  }
}
