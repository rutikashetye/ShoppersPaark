import { Address } from "./address";

export class AddAddress {
    public address:Address;
    public userId:number;
    constructor() { }

    set setUserId(val:number){
      this.userId=val;
    }
  
    get getUserId():number{
      return this.userId;
    }
    
    set setAddress(val:Address){
        this.address=val;
      }
    
      get getAddress():Address{
        return this.address;
      }
}
