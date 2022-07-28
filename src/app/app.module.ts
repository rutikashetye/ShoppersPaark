import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MyordersComponent } from './myorders/myorders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ProductSpecificComponent } from './product-specific/product-specific.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CompareComponent } from './compare/compare.component';
import { MissingComponent } from './missing/missing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { RetailerDashComponent } from './retailer-dash/retailer-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MyordersComponent,
    NavbarComponent,
    ProductComponent,
    UserDashComponent,
    UserProfileComponent,
    WishlistComponent,
    ShippingAddressComponent,
    ProductSpecificComponent,
    UserLoginComponent,
    UserSignupComponent,
    CartComponent,
    CompareComponent,
    MissingComponent,
    AdminLoginComponent,
    RetailerLoginComponent,
    AdminDashComponent,
    RetailerDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
