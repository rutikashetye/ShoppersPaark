import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../adminservice.service';
import { RegisterServiceService } from '../register-service.service';
import { RetailerService } from '../retailer.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-admin-approve-products',
  templateUrl: './admin-approve-products.component.html',
  styleUrls: ['./admin-approve-products.component.css']
})
export class AdminApproveProductsComponent implements OnInit {
 
  product:any;
  constructor(private service:AdminService, private ser:RetailerService,private router:Router,private regser:RegisterServiceService) { }

  ngOnInit(): void {
    this.ser.is_not_Approvedproducts().subscribe(
      data=>{
        this.product=data;
        for(let c of this.product)
           { this.regser.productImageDownload(c.productId).subscribe(
              data=>{ console.log(data)
              });
            }
      }
    )
  }
  ApproveProduct(productId:number){
    console.log(productId)
    this.service.approveProducts(productId).subscribe(
      msg=>{console.log(msg)
        Swal.fire(
          'Product Approved',
          'View Products To see ',
          'success'
        )    
      }    
      
    );
    location.reload();
    // location.reload();
    // this.router.navigate(['admin-dash/'+JSON.parse(sessionStorage.getItem("adminDetails"))+'/viewproducts']);
  }
  RejectProduct(productId:number)
  {
    console.log(productId)
    this.service.rejectProducts(productId).subscribe(
      msg=>{console.log(msg)
        Swal.fire({
         text: 'Product Reject',
          icon:'success'
        }
        )    
        location.reload();
      }    
    );
  }
  


}
