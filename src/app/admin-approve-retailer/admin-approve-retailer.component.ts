import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminservice.service';

@Component({
  selector: 'app-admin-approve-retailer',
  templateUrl: './admin-approve-retailer.component.html',
  styleUrls: ['./admin-approve-retailer.component.css']
})
export class AdminApproveRetailerComponent implements OnInit {
  retailer:any;
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.service.is_not_ApprovedRetailer().subscribe(
      data=>{
        this.retailer=data;
      }
    )
  }
  ApproveRetailer(retailerId:number){
    console.log(retailerId)
    this.service.approveRetailer(retailerId).subscribe(
      msg=>{console.log(msg)}
    );

  }

}
