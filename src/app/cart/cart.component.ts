import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  num = 1;
  product:Product=new Product();
  item:any;
  constructor(private service:UserService,private pserv:ProductService) {
  }
  inc(): void {
    ++this.num;
  }
  dec(): void {
    --this.num;
  }

  ngOnInit(): void {
    this.service.viewCart()
       .subscribe(
         msg => {
           this.item=msg;

         }
      );
    this.pserv.getProductByProductId(this.item.productId).subscribe(data=>{this.product=data})

  }

}
