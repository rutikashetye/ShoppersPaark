import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  aid: number;
  cid: number;
  user: User = new User();
  src: String;
  prod:any;

  constructor(private route: ActivatedRoute, private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.aid = +params.get('id');
      if (!sessionStorage.getItem("isLog")) {
        this.router.navigate(['/home']);
      }

    }
    );
    this.service.getUserByUserId(this.aid).subscribe(
      data => {
        this.user = data;
        this.src = "./assets/images/" + this.user.gender + "User.png";
        console.log(data)
      }
    );
  }

  // viewOrders(uid: number) {
  //   this.service.getCartByUserId(uid).subscribe(
  //     id => {
  //       this.cid = id.cartId
  //       console.log(this.cid)
  //       this.service.viewOrder(this.cid).subscribe(
  //         data=>{
  //           this.prod=data
  //           console.log(this.prod)
  //         }
  //       )
  //     }
  //   )
    
  // }


  signout() {
    sessionStorage.removeItem("userDetails");
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}
