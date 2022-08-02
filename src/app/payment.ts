import { Cart } from "./cart";

export class Payment {
    paymentId:number;
    paymentType:string;
    orderStatus:string;
    amount:number;
	paymentDate:Date;
	cart:Cart;
}
