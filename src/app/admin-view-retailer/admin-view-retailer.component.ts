import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminservice.service';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-admin-view-retailer',
  templateUrl: './admin-view-retailer.component.html',
  styleUrls: ['./admin-view-retailer.component.css']
})
export class AdminViewRetailerComponent implements OnInit {
  retailer:any;
  id:number;

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.service.is_approvedRetailer().subscribe(
      data=>{
        this.retailer=data;
      }
    )
  }

  downloadDoc(retailerId:number){
    this.service.retailerProfile(retailerId).subscribe(
      data => {
        console.log(data)

      }
    )
  }
}
