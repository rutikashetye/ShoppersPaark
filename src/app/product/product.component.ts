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
  cat: string = "";
  product: any;
  colorlist: String[];
  brandlist: String[];
  // products=Product[];
  constructor(private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cat = params.get('cat');
      console.log(this.cat);
      this.service.viewproductsByCat(this.cat)
        .subscribe(
          msg => {
            this.product = msg;
            this.service.getAllcolors(this.cat).subscribe(
              data => {
                this.colorlist = data;
                console.log(this.colorlist);
              }
            );
            this.service.getAllBrands(this.cat).subscribe(
              data => {
                this.brandlist = data;
                console.log(this.brandlist);
              }
            );
          }
        );
    }
    )
  }

  sortbylow(){
    this.service.sortBylow(this.cat)
        .subscribe(
          msg => {
            this.product = msg;
          }
        );
      }
  sortbyhigh(){
    this.service.sortByHigh(this.cat)
        .subscribe(
          msg => {
            this.product = msg;
          }
        );
  }
  newestFirst(){
    this.service.newestFirst(this.cat)
        .subscribe(
          msg => {
            this.product = msg;
          }
        );
  }
}

