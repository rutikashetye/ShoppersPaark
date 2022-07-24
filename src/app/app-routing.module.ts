import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyordersComponent } from './myorders/myorders.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [

  {path:'profile', component:UserProfileComponent},
  {path:'orders', component:MyordersComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'address', component:ShippingAddressComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
