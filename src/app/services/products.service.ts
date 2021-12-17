import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Products } from "../models/products.model";

@Injectable()
export class ProductsService {
    constructor(private http: HttpClient) {}

    getProducts(): Observable<Array<Products>> {
        const URL: string = environment.PRODUCTS_API;
        return this.http.get<Array<Products>>(URL);
    }
}