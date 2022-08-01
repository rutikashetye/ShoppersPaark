import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddToCartDto } from '../add-to-cart-dto';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-product-specific',
  templateUrl: './product-specific.component.html',
  styleUrls: ['./product-specific.component.css']
})
export class ProductSpecificComponent implements OnInit {
  num = 1;
  pid: number;
  p: Product = new Product;
  dto:AddToCartDto=new AddToCartDto;
  res:string="";
  constructor(private route: ActivatedRoute, private service: ProductService) { }

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
    this.service.addTocart(prodid,JSON.parse(sessionStorage.getItem("userDetails")),this.num).subscribe(
      msg=>{
        this.res=msg
        alert(JSON.stringify(this.res));
      }
    );
  }
  inc(): void {
    ++this.num;
  }
  dec(): void {
    --this.num;
  }
}
