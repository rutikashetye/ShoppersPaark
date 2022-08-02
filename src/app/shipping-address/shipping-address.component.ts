import { Component, OnInit } from '@angular/core';
import { AddAddress } from '../add-address';
import { Address } from '../address';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
  add:Address= new Address();
  add2:AddAddress=new AddAddress();
  address:any
  val:any
  uid:number;
  constructor(private service:UserService,private rou:Router) { }

  ngOnInit(): void {
    this.uid=JSON.parse(sessionStorage.getItem("userDetails"))
    this.service.viewAddress(this.uid).subscribe(
      data=>
      this.address=data
    )
  }
  addAddress(){
    console.log(this.add)
    this.add2.setAddress=this.add;
    this.add2.setUserId=this.uid;
    console.log(this.add2)
    this.service.addAddress(this.add2).subscribe(
      data=>{
        this.val=data;
        console.log(this.val)
        Swal.fire({
          icon: 'success',
          title: 'Address Added',
          
        })
      }
    )
  }


  deLete(aid:number){
    this.service.deleteAddress(aid).subscribe(
      data=>{
        // console.log(data)
        Swal.fire({
          icon: 'success',
          title: 'Address Deleted',
        })
        this.rou.navigate(['/user-dash',this.uid]);
      }
    )
  }
}
