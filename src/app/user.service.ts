import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddAddress } from './add-address';
import { Address } from './address';
import { Cart } from './cart';
import { Item } from './item';
import { Payment } from './payment';
import { User } from './user';
import { UserLogin } from './user-login';
import { UserRes } from './user-res';
import { ViewCart } from './view-cart';
import { ViewOrderDto } from './view-order-dto';

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

  viewCart(userId: number): Observable<ViewCart[]> {
    return this.http.get<ViewCart[]>("http://localhost:9090/paark/viewCart/" + userId);
  }
  viewOrder(cartId: number): Observable<ViewOrderDto[]> {
    return this.http.get<ViewOrderDto[]>("http://localhost:9090/paark/viewOrders/" + cartId);
  }

  // upProfile(userId: number): Observable<User> {
  //   return this.http.get<User>("http://localhost:9090/paark/user/" + userId);
  // }
  addAddress(add: AddAddress){
    console.log(JSON.stringify(add));
    return this.http.post("http://localhost:9090/paark/addAddress/",add);
  }

  getCartByUserId(userId: number): Observable<Cart> {
    return this.http.get<Cart>("http://localhost:9090/paark/getCartbyUserId/" + userId);
  }
  placeOrder(cartId: number) {
    return this.http.post("http://localhost:9090/paark/placeOrderFromCart/" + cartId,{responseType: 'text'});
  }
  getTotalAmount(cId: number): Observable<number> {
    return this.http.get<number>("http://localhost:9090/paark/getTotalAmount/" + cId);
  }
  getTotalPriceAmount(cartId: number): Observable<number> {
    return this.http.get<number>("http://localhost:9090/paark/getTotalPriceAmount/" + cartId);
  }

  updateQuantity(itemId: number, quantity: number): Observable<String> {
    return this.http.post<String>("http://localhost:9090/paark/updateItem/" + itemId + "/" + quantity, {responseType:'text'});
  }


  viewAddress(uid:number): Observable<Address[]> {
    return this.http.get<Address[]>("http://localhost:9090/paark/showAddresses/" + uid);
  }


  removeCartItem(itemId: number) {
    return this.http.delete("http://localhost:9090/paark/removeItemFromCart/" + itemId, {responseType:'text'});
  }

  // removeWishItem(itemId: number) {
  //   return this.http.delete("http://localhost:9090/paark/removeItemFromWishList/" + itemId, { responseType: 'text' });
  // }

  deleteAddress(uId: number) {
    return this.http.delete("http://localhost:9090/paark/removeAddressFromAddress/" + uId, {responseType:'text'});
  }


}

