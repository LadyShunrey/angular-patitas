import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {

  products: Product[] = [];

  constructor(
    private cart: ProductCartService,
    private productsDataService: ProductDataService){
  }

  ngOnInit(): void{
    this.productsDataService.getAllProducts()
      .subscribe(products => this.products = products);
  }

  addToCart(product: Product): void {
    if(product.quantity > 0){
      this.cart.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;
    }
  }

  maxReached(message: string){
    alert(message);
  }

}
