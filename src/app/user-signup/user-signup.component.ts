import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserRes } from '../user-res';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  user : User=new User;
  res:UserRes=new UserRes;
  mesage:string;

  constructor(private service:UserService,private route: Router) { }
  ngOnInit(): void {
  }
  userSignup(){
    console.log(JSON.stringify(this.user));
    this.service.signupUser(this.user).subscribe(
      msg=> {
        this.mesage=msg.message;
        console.log(this.mesage)
        Swal.fire(
          'User Signup Successfull',
          'Please login to start shopping. ',
          'success'
        )
        this.route.navigate(['/login'])
      }
    );
  }
}
