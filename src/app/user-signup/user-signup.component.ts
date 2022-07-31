import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  user : User=new User;


  constructor(private service:UserService) { }
  ngOnInit(): void {
  }
  userSignup(){
    console.log(JSON.stringify(this.user));
    this.service.signupUser(this.user);
  }
}
