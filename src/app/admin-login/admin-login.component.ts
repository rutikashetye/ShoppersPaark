import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../adminservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  ad: Admin =new Admin;
  isValid: boolean;
  message: string;
  constructor(private service: AdminService, private route: Router) { }

  ngOnInit(): void {
  }

  adminLogin(){
    console.log(JSON.stringify(this.ad));
    this.service.loginAdmin(this.ad)
      .subscribe(
        msg => {
          this.isValid = msg;
          if (this.isValid) {
                  sessionStorage.setItem("adminDetails",JSON.stringify(this.ad.adminId));
                  sessionStorage.setItem("isLog",JSON.parse('true'));
                  this.route.navigate(['/admin-dash',this.ad.adminId]);
                }
                else {
                  this.message = "Login Failed.";
                } 
          }
      );
        }
      }
