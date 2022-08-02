import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: any;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.viewTop4Products()
        .subscribe(
          msg => {
            this.product = msg;
          }
        )
  }

}
