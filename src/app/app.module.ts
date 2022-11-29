import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { RescuersComponent } from './rescuers/rescuers.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { FormsModule } from '@angular/forms';
import { DogListComponent } from './dog-list/dog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    AdoptionsComponent,
    RescuersComponent,
    AboutComponent,
    ProductListComponent,
    CartComponent,
    HomeComponent,
    InputIntegerComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
