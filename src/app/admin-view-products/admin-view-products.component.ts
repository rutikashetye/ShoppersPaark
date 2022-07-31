import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminservice.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-admin-view-products',
  templateUrl: './admin-view-products.component.html',
  styleUrls: ['./admin-view-products.component.css']
})
export class AdminViewProductsComponent implements OnInit {
  product:any;
  id:number;
  p: Product = new Product;

  constructor(private rservice:RetailerService, private pservice:ProductService) { }

  ngOnInit(): void {
    this.rservice.viewproducts().subscribe(
      data=>{
        this.product=data;
      }
    )
  }
udProduct(productId:number){
this.id=productId;
this.pservice.getProductByProductId(this.id).subscribe(
  obj => {
    this.p = obj;
  }
);
}
update(){
  this.pservice.createOrUpdateProduct(this.p).subscribe(
    obj=>{
      console.log(obj)
    }
  )


}


}
