import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  uid:number
  result:boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem("userDetails")) {
      this.router.navigate(['/home']);
      this.result=false;
    }
    else{
      this.result=true;
      this.uid=JSON.parse(sessionStorage.getItem("userDetails"));
    }
  }

}
