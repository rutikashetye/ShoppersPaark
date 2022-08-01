import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-retailer-dash',
  templateUrl: './retailer-dash.component.html',
  styleUrls: ['./retailer-dash.component.css']
})
export class RetailerDashComponent implements OnInit {
  rid:number;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.rid = +params.get('id');
      if(!sessionStorage.getItem("RetailerDetails"))
      {this.router.navigate(['/home']);  }
      }
    );
  }
  signout(){
    sessionStorage.removeItem("RetailerDetails");
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

}
