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
    ProductSpecificComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
