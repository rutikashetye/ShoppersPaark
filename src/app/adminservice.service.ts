import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Retailer } from './retailer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  loginAdmin(admin:Admin):Observable<boolean>{
    
    return this.http.post<boolean>("http://localhost:9090/paark/admin-login",admin);
    }

    viewretailer():Observable<Retailer[]>{
      return this.http.get<Retailer[]>("http://localhost:9090/paark/viewAllRetailers");
    }
    approveProducts(id:number):Observable<string>{
      return this.http.post<string>("http://localhost:9090/paark/approveproduct/"+id,{responseType:'text'});
    }

}
