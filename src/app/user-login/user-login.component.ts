import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../user-login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  us: UserLogin =new UserLogin;
  isValid:boolean;
  message:string;
  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(JSON.stringify(this.us));
    this.service.loginUser(this.us)
      .subscribe(
        msg => {
          this.isValid = msg;
          if (this.isValid) {
                  sessionStorage.setItem("userDetails",JSON.stringify(this.us.userId));
                  this.route.navigate(['/user-dash']);
                }
                else {
                  this.message = "Login Failed.";
                } 
          }
      );
        }
}
