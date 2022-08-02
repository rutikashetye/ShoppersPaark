import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
aid:number;
cid: number;
user: User = new User();
src: String;
prod:any;
  constructor( private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.aid=JSON.parse(sessionStorage.getItem("userDetails"));
    this.service.getUserByUserId(this.aid).subscribe(
      data => {
        this.user = data;
        this.service.getCartByUserId(this.user.userId).subscribe(
          id => {
            this.cid = id.cartId
            console.log(this.cid)
            this.service.viewOrder(this.cid).subscribe(
              data=>{
                this.prod=data
                console.log(this.prod)
              }
            )
          }
        )
      }
    );
  }

}
