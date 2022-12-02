import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  addToCart(product: Product) {
    let item = this._cartList.find((v1) => v1.name == product.name);
    if(!item){
      this._cartList.push({... product, totalPrice: product.price * product.quantity});
    } else{
      item.quantity = item.quantity + product.quantity;
      item.totalPrice = item.quantity * item.price
      if(item.quantity>product.stock){
        item.quantity = item.quantity - product.quantity;
      }
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

  getCartList(): Observable<Product[]> {
    return this.cartList
  }
}
