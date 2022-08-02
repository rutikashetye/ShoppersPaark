import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Retailer } from '../retailer';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  num =1
  a:number
  product:Product=new Product();
  retailer:Retailer=new Retailer();
  cid:number;
  amount:number;
  priceamount:number;
  list:any;
  message:String;
  user:User=new User;
  usid:string;
  currentDate = new Date();
  constructor(private service:UserService,private route:Router) {
  }

  ngOnInit(): void {
    this.currentDate.setDate(this.currentDate.getDate() + 3 );
  
    this.usid=sessionStorage.getItem("userDetails");
    console.log(JSON.parse(this.usid))
    this.service.viewCart(JSON.parse(this.usid))
       .subscribe(
         msg => {
           this.list=msg;
           
         }
      );

    this.service.getCartByUserId(JSON.parse(this.usid)).subscribe(
      id=>{
        this.cid=id.cartId
        console.log(this.cid)
        this.service.getTotalAmount(this.cid).subscribe(
          amt=>{
            console.log(amt);
            this.amount=amt

          }
        )
        this.service.getTotalPriceAmount(this.cid).subscribe(
          amt=>{
            console.log(amt);
            this.priceamount=amt
          }
        )
      }
    )
    
  }
  inc(itemId:number): void {
    ++this.num;
    // sessionStorage.setItem("quan",this.num)
    // this.service.updateQuantity(itemId,this.num).subscribe(
    //   data=>{
    //     console.log(data)
    //     // this.num=sessionStorage.getItem("quan",this.num)
    //   }
    //  )
  }
  dec(itemId:number): void {
    --this.num;
    // this.service.updateQuantity(itemId,this.num).subscribe(
    //   data=>{
    //     console.log(data)
    //     this.num=this.a
    //   }
    //  )
  }
  placeOrder(){
      this.service.placeOrder(this.cid).subscribe(
        data=>{
          this.message=data.toString();
          this.route.navigate(['/payment',this.message]);  
        }
      ) }

      removeCartItem(itemId:number){
        this.service.removeCartItem(itemId).subscribe(
          remdata=>{
            console.log(remdata);
            location.reload();
          }
        )
      }

}
