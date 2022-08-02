import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Retailer } from './retailer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  loginAdmin(admin: Admin): Observable<boolean> {
    return this.http.post<boolean>("http://localhost:9090/paark/admin-login", admin);
  }

  approveProducts(id: number): Observable<string> {
    return this.http.post<string>("http://localhost:9090/paark/approveproduct/" + id, { responseType: 'text' });
  }

  approveRetailer(id: number): Observable<string> {
    return this.http.post<string>("http://localhost:9090/paark/approveretailer/" + id, { responseType: 'text' });
  }

  is_not_ApprovedRetailer(): Observable<Retailer[]> {
    return this.http.get<Retailer[]>("http://localhost:9090/paark/is_notApprovedRetailer");
  }

  is_approvedRetailer():Observable<Retailer[]>{
    return this.http.get<Retailer[]>("http://localhost:9090/paark/viewretailers");
  }
  retailerProfile(rid:number){
    return this.http.get("http://localhost:9090/paark/profile?retailerId="+rid);
  }
}
