import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { Product } from './product';
import { Retailer } from './retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  constructor(private http:HttpClient) { }

  is_not_Approvedproducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/paark/is_notApprovedProducts");
  }

  viewproducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/paark/viewproducts");
  }

  
 

}
