import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductResponse } from '../add-product-response';
import { Product } from '../product';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product=new Product();
  
  pic:boolean;

  constructor(private registerService:RegisterServiceService,route:Router) { }
  addProductResponse:AddProductResponse=new AddProductResponse();

  ngOnInit(): void {
  }

  addProductToProductTable(){
    console.log(JSON.stringify(this.product));
    this.registerService.addProductToProductTable(this.product)
    .subscribe(
      response=>{
        this.addProductResponse=response;
        console.log(this.addProductResponse.message);
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
    this.registerService.upload3(formData).subscribe(data=>alert(JSON.stringify(data)));

  }
  validate3(){
    this.pic=true;
  }
  
}