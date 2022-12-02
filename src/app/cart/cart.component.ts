import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {

  cartList$!: Observable<Product[]>;

  partialPrice: number = 0;
  totalPrice$: Observable<number> = this.cart.getCartList().pipe(map((cartList: any) => cartList.reduce((a: any, b: any) => a + b["totalPrice"], 0)));

  constructor(private cart: ProductCartService){
    this.cartList$ = cart.cartList.asObservable();
  }

  getPartialPrice(price:number, quantity: number){
    this.partialPrice = price * quantity;
    return this.partialPrice;
  }
}
