import { Cart } from "./cart";
import { Product } from "./product";

export class Item {
    itemId:number;
    product:Product;
    quantity:number;
    cart:Cart;
    totalPrice: number;
    purchased: boolean;
}
