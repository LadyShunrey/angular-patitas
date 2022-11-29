import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://62b613b242c6473c4b3f4601.mockapi.io/api/products';

@Injectable({
  providedIn: 'root'
})

export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(URL)
      .pipe(
        tap((products: Product[]) => products.forEach(product => product.quantity = 0))
      )
    ;
  }
}
