import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-retailer-view-product',
  templateUrl: './retailer-view-product.component.html',
  styleUrls: ['./retailer-view-product.component.css']
})
export class RetailerViewProductComponent implements OnInit {
rid:number;
product:any;
  constructor(private regser:RegisterServiceService) { }

  ngOnInit(): void {
      this.rid=JSON.parse(sessionStorage.getItem("retailerDetails"));
      console.log(this.rid)

      this.regser.getProductsByRetailerId(this.rid).subscribe(
        data=>{
          this.product=data
          for(let c of this.product)
          { this.regser.productImageDownload(c.productId).subscribe(
             data=>{ console.log(data)
             });
           }

        }
      )
  
  }

}
