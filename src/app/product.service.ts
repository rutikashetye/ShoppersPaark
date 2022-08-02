import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  viewTop4Products():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/paark/viewTopProducts");
  }
// working  
  UpdateProduct(product){
    return this.http.post("http://localhost:9090/paark/updateprodct",product);
  }
  getProductByProductId(pid:number):Observable<Product>
  {
    return this.http.get<Product>("http://localhost:9090/paark/viewProductById/"+pid);
  }
  viewproductsByCat(category:string):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/paark/view-productByCategory/"+category);
  }
  addTocart(pid:number,uid:number,qun:number){
    return this.http.post("http://localhost:9090/paark/addToCart/"+pid+"/"+uid+"/"+qun,{responseType:'text'});
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


  getProductByItemId(itemId:number):Observable<Product>
  {
    return this.http.get<Product>("http://localhost:9090/paark/getProductByItemId/"+itemId);
  }



}
