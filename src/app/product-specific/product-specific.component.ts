import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-product-specific',
  templateUrl: './product-specific.component.html',
  styleUrls: ['./product-specific.component.css']
})
export class ProductSpecificComponent implements OnInit {
  pid: number;
  p: Product = new Product;
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

}
