import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartDto } from '../add-to-cart-dto';
import { Product } from '../product';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-specific',
  templateUrl: './product-specific.component.html',
  styleUrls: ['./product-specific.component.css']
})
export class ProductSpecificComponent implements OnInit {
  num = 1;
  pid: number;
  p: Product = new Product;
  message:string;
  dto:AddToCartDto=new AddToCartDto;
  res:string="";
  constructor(private route: ActivatedRoute, private service: ProductService,private uSer:UserService,private rou:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pid = +params.get('id');
    }
    );
    this.service.getProductByProductId(this.pid).subscribe(
      obj => {
        this.p = obj;
      }
    );
  }


  AddToCart(prodid:number){
    if(!sessionStorage.getItem("userDetails"))
    {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Please Login First!',
      })
    }
    else{
    this.service.addTocart(prodid,JSON.parse(sessionStorage.getItem("userDetails")),this.num).subscribe(
      msg=>{
        // this.res=msg.toString()
        this.rou.navigate(['/cart']);
        // console.log(msg);
        // alert("Product Added ");
        // window.alert("Product Added");
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'Please Login First!',
        })
      });
    }
  }
  inc(): void {
    ++this.num;
  }
  dec(): void {
    --this.num;
  }
  // placeOrder(){
  //   this.uSer.placeOrder(this.cid).subscribe(
  //     data=>{
  //       this.message=data.toString();
  //       this.route.navigate(['/payment',this.message]);  
  //     }
  //   ) 
  // }
}
