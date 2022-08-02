import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../register-service.service';
import { Retailer } from '../retailer';
import { RetailerLogin } from '../retailer-login';

@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css']
})
export class RetailerLoginComponent implements OnInit {
  login: RetailerLogin = new RetailerLogin();
  message: string;
  isValid: boolean;

  constructor(private registerService: RegisterServiceService, private route: Router) { }


  ngOnInit(): void {
  }


  checkRetailerLogin() {
    console.log(JSON.stringify(this.login));
    this.registerService.loginRetailer(this.login)
      .subscribe(
        msg => {
          this.isValid = msg;
          if (this.isValid) {
            sessionStorage.setItem("retailerDetails", JSON.stringify(this.login.retailerId));
            sessionStorage.setItem("isLog",JSON.parse('true'));
            this.route.navigate(['retailer-dash']);
            this.message="login success"
          }
          else {
            this.message = "Login Failed.";
          }
          console.log(this.message);
        });
  }

}