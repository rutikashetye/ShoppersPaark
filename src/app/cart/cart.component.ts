import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  num=1;
  constructor() { 
  }
  inc():void{
    ++this.num;
}
dec():void{
  --this.num;
}
  ngOnInit(): void {
  }

}
