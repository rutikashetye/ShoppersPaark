import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User=new User();
  uid:number
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.uid=JSON.parse(sessionStorage.getItem("userDetails"));
    this.service. getUserByUserId(this.uid).subscribe(
      data=>{
        this.user=data;
        console.log(this.user)
      }
    )

  }
  upProfile(){
      this.service.signupUser(this.user).subscribe(
        data=>{
            console.log(data)
            Swal.fire({
              text:'Profile Updated',
              icon:'success'
             } )
        }
      )
  }

}
