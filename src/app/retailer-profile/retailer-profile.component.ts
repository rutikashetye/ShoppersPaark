import { Component, OnInit } from '@angular/core';
import { Retailer } from '../retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css']
})
export class RetailerProfileComponent implements OnInit {
  reg:Retailer=new Retailer();
  rid:number
  constructor(private service:RetailerService) { }

  ngOnInit(): void {
    this.rid=JSON.parse(sessionStorage.getItem("retailerDetails"));
    this.service. searchRetailer(this.rid).subscribe(
      data=>{
        this.reg=data;
        console.log(this.reg)
      }
    )

  }
  upProfile(){
      this.service.upProfile(this.rid).subscribe(
        data=>{

        }
      )
  }
}
