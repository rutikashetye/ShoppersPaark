import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddProductDto } from '../add-product-dto';
import { AdminService } from '../adminservice.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RegisterServiceService } from '../register-service.service';
import { Retailer } from '../retailer';
import { RetailerService } from '../retailer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-view-products',
  templateUrl: './admin-view-products.component.html',
  styleUrls: ['./admin-view-products.component.css']
})
export class AdminViewProductsComponent implements OnInit {
  product: any;
  id: number;
  p: Product = new Product;
  rid:number;
  obj:AddProductDto=new AddProductDto();
  retailer:Retailer=new Retailer();

  constructor(private rservice: RetailerService, private pservice: ProductService,private regser:RegisterServiceService) { }

  ngOnInit(): void {
    this.rservice.is_approveproducts().subscribe(
      data => {
        this.product = data;
        for(let c of this.product)
           { this.regser.productImageDownload(c.productId).subscribe(
              data=>{ console.log(data)
              });
            }
      }
    )
  }

  udProduct(productId: number) {
    this.id = productId;
    this.pservice.getProductByProductId(this.id).subscribe(
      obj => {
        this.p = obj;
      }
    );
  }
  // update() {
  //   this.obj.setProduct=this.product;
  //   this.obj.setRetailerId=this.rid;
  //   this.regser.updateProduct(this.product).subscribe(
  //     obj=>{
  //       console.log(obj)
  //       Swal.fire(
  //         {
  //           text:'Products Updated',
  //           icon:'success'
  //         }
  //       )
  //     }
  //   )
    // this.regser.addProductToProductTable(this.obj).subscribe(
    //   obj => { 
    //     console.log(obj);
    //     console.log('Products Updated')
    //     Swal.fire(
    //       {
    //         text:'Products Updated',
    //         icon:'success'
    //       }
    //     )
    //   }
    // )
  }
