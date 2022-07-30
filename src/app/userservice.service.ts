import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private http:HttpClient) { }

  loginUser(user:UserLogin):Observable<boolean>{
    
    return this.http.post<boolean>("http://localhost:9090/paark/user-login",user);
    }

}
