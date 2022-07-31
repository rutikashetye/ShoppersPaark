import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  loginUser(user:UserLogin):Observable<boolean>{
    
    return this.http.post<boolean>("http://localhost:9090/paark/user-login",user);
    }

    signupUser(user:User):Observable<User>{
        return this.http.post<User>("http://localhost:9090/paark/add-user",user);
      }


}
