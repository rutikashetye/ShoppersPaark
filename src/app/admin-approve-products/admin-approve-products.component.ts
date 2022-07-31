import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminservice.service';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-admin-approve-products',
  templateUrl: './admin-approve-products.component.html',
  styleUrls: ['./admin-approve-products.component.css']
})
export class AdminApproveProductsComponent implements OnInit {
  product:any;
  constructor(private service:AdminService, private ser:RetailerService) { }

  ngOnInit(): void {
    this.ser.is_not_Approvedproducts().subscribe(
      data=>{
        this.product=data;
      }
    )
  }
  ApproveProduct(productId:number){
    console.log(productId)
    this.service.approveProducts(productId).subscribe(
      msg=>{console.log(msg)}
    );

  }

}
