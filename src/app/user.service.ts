import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';
import { User } from './user';
import { UserLogin } from './user-login';
import { UserRes } from './user-res';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  loginUser(user: UserLogin): Observable<boolean> {

    return this.http.post<boolean>("http://localhost:9090/paark/login", user);
  }

  signupUser(user: User): Observable<UserRes> {
    return this.http.post<UserRes>("http://localhost:9090/paark/signup", user);
  }

  getUserByUserId(userId: number): Observable<User> {
    return this.http.get<User>("http://localhost:9090/paark/user/" + userId);
  }
  viewCart(): Observable<Item> {
    return this.http.post<Item>("http://localhost:9090/paark/signup", { responseType: 'text' });

  }


}
