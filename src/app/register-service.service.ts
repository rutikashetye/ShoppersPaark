import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductResponse } from './add-product-response';
import { Product } from './product';
import { Regresponse } from './regresponse';
import { Retailer } from './retailer';
import { RetailerLogin } from './retailer-login';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private httpClient:HttpClient) { }

  loginRetailer(retailerLogin:RetailerLogin):Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:9090/paark/retailerLogin",retailerLogin);
  }

  upload1(formData:FormData){
    return this.httpClient.post("http://localhost:9090/paark/aadharpic-upload",formData,{responseType:'text'});
  }

  upload2(formData:FormData){
    return this.httpClient.post("http://localhost:9090/paark/panpic-upload",formData,{responseType:'text'});
  }

  
  registerRetailer(retailer:Retailer):Observable<Regresponse>{
    return this.httpClient.post<Regresponse>("http://localhost:9090/paark/retailerSignup",retailer);

  }

  addProductToProductTable(product:Product):Observable<AddProductResponse>{
    return this.httpClient.post<AddProductResponse>("http://localhost:9090/paark/add-product",product);
  }

  upload3(formData:FormData){
    return this.httpClient.post("http://localhost:9090/paark/productpic-upload",formData,{responseType:'text'});
  }
}