import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route2RoutingModule } from './route2-routing.module';
import { ProductsService } from '../services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    Route2RoutingModule,
    HttpClientModule
    
  ],
  providers: [ProductsService]
})
export class Route2Module { }
