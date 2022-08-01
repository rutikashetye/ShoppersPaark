import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserRes } from '../user-res';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  user : User=new User;
  res:UserRes=new UserRes;

  constructor(private service:UserService,private route: Router) { }
  ngOnInit(): void {
  }
  userSignup(){
    console.log(JSON.stringify(this.user));
    this.service.signupUser(this.user).subscribe(
      msg=> {
        this.res=msg
        alert(JSON.stringify(this.res.message))
      }
    );
  }
}
