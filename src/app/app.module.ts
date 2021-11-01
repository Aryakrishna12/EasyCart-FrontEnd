import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './material.module';
import {FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule} from 'angular2-notifications';

import {Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import{ HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { CustomerloginService } from './customerlogin.service';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { HomeComponent } from './home/home.component';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { SellernotificationComponent } from './sellernotification/sellernotification.component';
import { PurchaseComponent } from './purchase/purchase.component';

import{ DatePipe} from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductViewComponent } from './productview/productview.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductFilterCategoryComponent } from './product-filter-category/product-filter-category.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
///mport { SafeHtmlPipe} from './SafeHtmlPipe';
@NgModule({
  declarations: [
    AppComponent,
    CustomerloginComponent,
    CustomersignupComponent,
    ForgotpasswordComponent,
    ItemdetailComponent,
    HomeComponent,
    OrderconfirmComponent,
    SellernotificationComponent,
    PurchaseComponent,
    ProductComponent,
    ProductViewComponent,
    ProducteditComponent,
    ProductItemComponent,
    ProductFilterComponent,
    ProductFilterCategoryComponent,
    DisplayCategoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot()
   

  ],
  providers: [
    DatePipe,
    CustomerloginService,{ 
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
 }],
  bootstrap: [AppComponent],
  entryComponents:[
    CustomerloginComponent,
    CustomersignupComponent]
})
export class AppModule { }
