import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Products>;
  listView: boolean = true;
  
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe( resp => {
      console.log('Data:', resp);
      this.products = resp;
      
    }, err => {
      console.log('Api failed with status: ' + err.status);
    });
  }

  sort(event: Event) {
    if((<HTMLSelectElement>event.target).value === 'L') {
      this.products = this.products.sort( (lowPrice, highPrice) => lowPrice.price - highPrice.price);
    } else {
      this.products = this.products.sort( (lowPrice, highPrice) => highPrice.price - lowPrice.price);
    }
  }

}
