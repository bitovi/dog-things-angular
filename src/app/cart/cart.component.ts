import { Component, OnInit, Input } from '@angular/core';
import * as api from '../../api.js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() count: number

  constructor() { }

  ngOnInit() {
    this.count = 0;
    this.loadCart();
  }

  async loadCart() {
    let cart = await api.getCart();
    this.count = cart.count;
  }

}
