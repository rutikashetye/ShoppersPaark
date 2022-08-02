import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../adminservice.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-approve-retailer',
  templateUrl: './admin-approve-retailer.component.html',
  styleUrls: ['./admin-approve-retailer.component.css']
})
export class AdminApproveRetailerComponent implements OnInit {
  retailer: any;
  constructor(private service: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.service.is_not_ApprovedRetailer().subscribe(
      data => {
        this.retailer = data;
      }
    )
  }
  downloadDoc(retailerId:number){
    this.service.retailerProfile(retailerId).subscribe(
      data => {
        console.log(data)

      }
    )
  }
  ApproveRetailer(retailerId: number) {
    console.log(retailerId)
    this.service.approveRetailer(retailerId).subscribe(
      msg => {
        console.log(msg)

       
       }
    );
    this.router.navigate(['/admin-dash/' + JSON.parse(sessionStorage.getItem("adminDetails")) + '/viewretailer']);
  }


}
