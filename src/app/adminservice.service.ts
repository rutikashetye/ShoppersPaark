import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  loginAdmin(admin:Admin):Observable<boolean>{
    
    return this.http.post<boolean>("http://localhost:9090/paark/admin-login",admin);
    }

    public getProductByCat(cat) {}

}
