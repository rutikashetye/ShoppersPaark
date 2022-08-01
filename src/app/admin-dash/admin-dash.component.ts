import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  aid: number;
  var :String;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.aid = +params.get('id');
      if(!sessionStorage.getItem("adminDetails"))
      {this.router.navigate(['/home']);  }
      }
    );
  }

  signout(): void {
    sessionStorage.removeItem("adminDetails");
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}
