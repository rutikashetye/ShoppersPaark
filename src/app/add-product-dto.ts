import { Product } from "./product";
import { Retailer } from "./retailer";

export class AddProductDto {
    public product:Product;
    public retailerId:number;
 
  constructor() { }
  set setProduct(val: Product){
    this.product = val;
  }
  set setRetailerId(val:number){
    this.retailerId=val;
  }

  get getProduct():Product{
    return this.product;
  }
  get getRetailerId():number{
    return this.retailerId;
  }
}
