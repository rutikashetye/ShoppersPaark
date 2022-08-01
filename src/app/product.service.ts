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
  addTocart(pid:number,uid:number,qun:number):Observable<string>{
    return this.http.post<string>("http://localhost:9090/paark/addToCart/"+pid+"/"+uid+"/"+qun,{ responseType: 'text' });
  }
  getAllcolors(cat:String):Observable<String[]>
  {
    return this.http.get<String[]>("http://localhost:9090/paark/getColor/"+cat);
  }
  getAllBrands(cat:String):Observable<String[]>
  {
    return this.http.get<String[]>("http://localhost:9090/paark/getBrand/"+cat);
  }
  sortBylow(cat:String):Observable<String[]>
  {
    return this.http.get<String[]>("http://localhost:9090/paark/sortBylowPrice/"+cat);
  }
  sortByHigh(cat:String):Observable<String[]>
  {
    return this.http.get<String[]>("http://localhost:9090/paark/sortByhighPrice/"+cat);
  }
  newestFirst(cat:String):Observable<String[]>
  {
    return this.http.get<String[]>("http://localhost:9090/paark/newProducts/"+cat);
  }





}
