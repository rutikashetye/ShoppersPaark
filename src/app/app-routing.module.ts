import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApproveProductsComponent } from './admin-approve-products/admin-approve-products.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewProductsComponent } from './admin-view-products/admin-view-products.component';
import { HomeComponent } from './home/home.component';
import { MyordersComponent } from './myorders/myorders.component';
import { ProductSpecificComponent } from './product-specific/product-specific.component';
import { ProductComponent } from './product/product.component';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  // user dashboard routes
 

  {path:'user-dash/:id',component:UserDashComponent,
   children: [
    {path:'profile', component:UserProfileComponent},
    {path:'orders', component:MyordersComponent},
    {path:'wishlist', component:WishlistComponent},
    {path:'address', component:ShippingAddressComponent},
   ]
  },

  {path:'products/:cat', component:ProductComponent},
  {path:'product', component:ProductSpecificComponent},

  {path:'login', component:UserLoginComponent},
  {path:'signup', component:UserSignupComponent},

  {path:'retailer-login', component:RetailerLoginComponent},


  // Admin dashboard
  {path:'admin-login', component:AdminLoginComponent},
  {path:'admin-dash/:id', component:AdminDashComponent,
  children:[
    {path:'viewproducts', component:AdminViewProductsComponent},
    {path:'approveproducts', component:AdminApproveProductsComponent},

  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
