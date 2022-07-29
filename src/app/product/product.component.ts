import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
cat:string="";
// products=Product[];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
       this.cat = params.get('cat'); 
       console.log(this.cat);
      //  let products=this.service.getProductsByCat(cat);
    }
    );
  }
}
