import { Component } from '@angular/core';
import './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dog-things-angular';
  page = 'products';

  isCart() {
    return this.page === 'cart';
  }

  isProducts() {
    return this.page === 'products';
  }
}
