import { Retailer } from "./retailer";

export class Product {
    productId:number;
	productName:string;
	brand:string;
	productImage:string;
    price:number;
	deal:number;
	discountedPrice:number;
	description:string;
	isApproved:boolean;
	category:string;
	available_quantity:number;
	color:string;
	retailer:Retailer;
	
}
