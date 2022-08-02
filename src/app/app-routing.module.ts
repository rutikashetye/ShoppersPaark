import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminApproveProductsComponent } from './admin-approve-products/admin-approve-products.component';
import { AdminApproveRetailerComponent } from './admin-approve-retailer/admin-approve-retailer.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewProductsComponent } from './admin-view-products/admin-view-products.component';
import { AdminViewRetailerComponent } from './admin-view-retailer/admin-view-retailer.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MissingComponent } from './missing/missing.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { ProductSpecificComponent } from './product-specific/product-specific.component';
import { ProductComponent } from './product/product.component';
import { RetailerDashComponent } from './retailer-dash/retailer-dash.component';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { RetailerRegisterComponent } from './retailer-register/retailer-register.component';
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
 
  {path:'login', component:UserLoginComponent},
  {path:'signup', component:UserSignupComponent},
  {path:'user-dash/:id',component:UserDashComponent,
   children: [
    {path:'profile', component:UserProfileComponent},
    {path:'orders', component:MyordersComponent},
    {path:'wishlist', component:WishlistComponent},
    {path:'address', component:ShippingAddressComponent},
   ]
  },

  {path:'products/:cat', component:ProductComponent},
  {path:'product/:id', component:ProductSpecificComponent},
  {path:'payment/:msg', component:PaymentSuccessComponent},
 
  {path:'cart', component:CartComponent},
  {path:'missingcart', component:MissingComponent},

  {path:'retailer-login', component:RetailerLoginComponent},
  {path:'retailer-signup', component:RetailerRegisterComponent},
  {path:'retailer-dash', component:RetailerDashComponent,
    children:[
      {path:'addproduct', component:AddProductComponent},
    ]
   },
  // Admin dashboard
  {path:'admin-login', component:AdminLoginComponent},
  {path:'admin-dash/:id', component:AdminDashComponent,
  children:[
    {path:'viewproducts', component:AdminViewProductsComponent},
    {path:'approveproducts', component:AdminApproveProductsComponent},
    {path:'viewretailer', component:AdminViewRetailerComponent},
    {path:'approveretailer', component:AdminApproveRetailerComponent},
  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
