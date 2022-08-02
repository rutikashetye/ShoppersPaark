import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductDto } from '../add-product-dto';
import { AddProductResponse } from '../add-product-response';
import { Product } from '../product';
import { RegisterServiceService } from '../register-service.service';
import { Retailer } from '../retailer';
import { RetailerService } from '../retailer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product=new Product();
  rid:number;
  obj:AddProductDto=new AddProductDto();
  retailer:Retailer=new Retailer();

  pic:boolean;

  constructor(private registerService:RegisterServiceService,
    private router:Router,private route:ActivatedRoute,private service:RetailerService) { }
  addProductResponse:AddProductResponse=new AddProductResponse();

  ngOnInit(): void {
      this.rid=JSON.parse(sessionStorage.getItem("retailerDetails"));
  }

  addProductToProductTable(){
    console.log(JSON.stringify(this.product));
    this.obj.setProduct=this.product;

    
    console.log(this.retailer.retailerId);
    this.obj.setRetailerId=this.rid;


    console.log("this is object "+this.obj);
    console.log(this.obj.retailerId);
  
    this.registerService.addProductToProductTable(this.obj)
    .subscribe(
      response=>{
        this.addProductResponse=response;
        console.log(this.addProductResponse.message);
        Swal.fire(
          'Product Added',
          'Add Product Picture. ',
          'success'
        )

      }
    )
    
  }

productImage:any;
productId:any;

onFileChange(event){
  this.productImage=event.target.files[0];
}
  upload3(){
    let formData=new FormData();
    formData.append('productId',this.addProductResponse.productId.toString());
    formData.append('productPic',this.productImage);
    this.registerService.upload3(formData).subscribe(data=>{ console.log(data)
    Swal.fire(
      'Product Added',
      'Wait for Admin Approval. ',
      'success'
    )
    }
    )
  }
  validate3(){
    this.pic=true;
  }
  
}