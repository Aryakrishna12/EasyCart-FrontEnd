import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component,OnInit } from '@angular/core';

import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerloginService } from './customerlogin.service';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerprofileService } from './customerprofile.service';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  productsName:any;
  productsCategory:any;
  searchTerm:String;
  category:String;
  m:String='mobiles';
  e:String='electronics';
  r:String='refrigerators';
  wm:String='whasing machine';
  ac:String='air conditioner';
  mw:String='microwave';
  ka:String='kitchen appliances';
  ku:String='kurthis';
  sh:String='shirts';
  je:String='jeans';
  s:String='shoes';

  products:any;
  
  constructor(public dialog:MatDialog,public loginService:CustomerloginService,
    private router:Router,
    private profileService:CustomerprofileService,
    private productService:ProductService){}

  ngOnInit(){
   
  }

  loginDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(CustomerloginComponent, dialogConfig);
  }  
  signupDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(CustomersignupComponent, dialogConfig);
  }
  toNotification(){
    this.router.navigate(['sellernotification'])
    this.profileService.getNotify()
  }
  searchByName(value:String){
    console.log(value)
    this.productService.getProductByName(value)
    .subscribe((data:any)=>{
         //console.log(data)
         this.productsName=data
         this.router.navigate(['filterByName'])
    });
  }
  searchByCategory(category){
      console.log(category)
      this.productService.getProductByCategory(category)
      .subscribe((data:any)=>{
         //console.log(data)
         this.productsCategory=data;
      });
  }    
 
}


