import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
cat:string="";
product:any;
// products=Product[];
  constructor(private route:ActivatedRoute,private service:ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
       this.cat = params.get('cat'); 
       console.log(this.cat);
       this.service.viewproductsByCat(this.cat)
       .subscribe(
         msg => {
           this.product=msg;
         }
      );
    }
    )
  }
}

