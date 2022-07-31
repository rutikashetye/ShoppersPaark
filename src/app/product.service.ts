import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  createOrUpdateProduct(product){
    return this.http.post("http://localhost:9090/paark/createprodct",product);
  }
  getProductByProductId(pid:number):Observable<Product>
  {
    return this.http.get<Product>("http://localhost:9090/paark/viewProductById/"+pid);
  }
  viewproductsByCat(category:string):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/paark/view-productByCategory/"+category);
  }

}
