import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerloginComponent} from './customerlogin/customerlogin.component';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { HomeComponent } from './home/home.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductComponent } from './product/product.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductViewComponent } from './productview/productview.component';

import { PurchaseComponent } from './purchase/purchase.component';
import { SellernotificationComponent } from './sellernotification/sellernotification.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"customerlogin",component:CustomerloginComponent},
  {path:"customersignup",component:CustomersignupComponent},
  {path:"itemdetail",component:ItemdetailComponent},
  {path:"orderconfirm",component:OrderconfirmComponent},
  {path:"sellernotification",component:SellernotificationComponent},
  {path:"purchase",component:PurchaseComponent},
  {path:"product",component:ProductComponent},
 {path:"productview",component:ProductViewComponent},
 {path:"productedit",component:ProducteditComponent},
 //{path:"productItem",component:ProductItemComponent}
 {path:"filterByName",component:ProductFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
