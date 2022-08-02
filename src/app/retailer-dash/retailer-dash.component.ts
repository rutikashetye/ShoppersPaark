import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Retailer } from '../retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-dash',
  templateUrl: './retailer-dash.component.html',
  styleUrls: ['./retailer-dash.component.css']
})
export class RetailerDashComponent implements OnInit {
  rid:number;
  retailer:Retailer=new Retailer();
  constructor(private route: ActivatedRoute,private router: Router,private service :RetailerService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.rid = +params.get('id');
    //   this.service.searchRetailer(this.rid).subscribe(
    //     data=>{
    //       this.retailer=data;
    //     }
    //     )
    //   }
    // );
    this.rid=JSON.parse(sessionStorage.getItem("retailerDetails"))
  }

  signout(){
    sessionStorage.removeItem("retailerDetails");
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

}
