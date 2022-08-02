import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../register-service.service';
import { Regresponse } from '../regresponse';
import { Retailer } from '../retailer';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-retailer-register',
  templateUrl: './retailer-register.component.html',
  styleUrls: ['./retailer-register.component.css']
})
export class RetailerRegisterComponent implements OnInit {
  retailer: Retailer = new Retailer();
  message: string;
  newMessage: string;
  aadhar: boolean;
  pan: boolean;

  constructor(private service: RegisterServiceService, route: Router) { }
  regResponse: Regresponse = new Regresponse();
  ngOnInit(): void {
  }

  registerRetailer() {
    console.log(JSON.stringify(this.retailer));
    this.service.registerRetailer(this.retailer)
      .subscribe(
        response => {
          this.regResponse = response;
          console.log((this.regResponse.message));
        }
      )
  }


  aadharCard: any;
  panCard: any;
  retailerId: any;
  onFileChange1(event) {
    this.aadharCard = event.target.files[0];
  }
  onFileChange2(event) {
    this.panCard = event.target.files[0];
  }
  upload1() {
    let formData1 = new FormData();
    formData1.append('retailerId', this.regResponse.retailerId.toString());
    formData1.append('aadharPic', this.aadharCard);

    this.service.upload1(formData1).subscribe(data => {
      console.log(data);
      // Swal.fire({
      //   text: 'Aadhar Card Uploaded',
      //   icon: 'success'
      // })
    });
  }

  upload2() {
    let formData2 = new FormData();
    formData2.append('retailerId', this.regResponse.retailerId.toString());
    formData2.append('panPic', this.panCard);
    this.service.upload2(formData2).subscribe(data => {
      console.log(data)
      // Swal.fire(
      //   {
      //     text: 'Pan Card Uploaded',
      //     icon: 'success'
      //   })

    });
  }
  validate1() {
    this.aadhar = true;

  }
  validate2() {
    this.pan = true;
    if (this.aadhar) {
      this.newMessage = "Registration Successful.Kindly wait for Admin approval";
    }
    else {
      this.newMessage = "Please upload the documents.";

    }



  }


}