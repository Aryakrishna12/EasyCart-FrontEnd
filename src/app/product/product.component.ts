import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Product } from 'src/app/model/product';
import { ProductService } from '../product.service';
//import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public userFile:any=File
  public product:any
 
  count:number=0;

 
  productRegForm=this.fb.group({
    productName: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]{3,15}$")]],
    description: ["", [Validators.required]],
    unitPrice: ["",],
    msrp: ["",],
    category:["",],
    stock:["",],
    size: ["",],
    color: ["", ],

    //categoryName: this.fb.array([this.fb.control('')])

  })

  constructor(private fb:FormBuilder, 
    public service:ProductService, 
    private router:Router) { }

  public dropdown:any=[]
  ngOnInit(): void {
    //this.getDropdown();
  }
  register() {
    this.productRegForm.markAllAsTouched();
    console.log(this.productRegForm.value)
    if (this.productRegForm.valid) {
      this.product=this.productRegForm.value
      const formData=new FormData();
      formData.append('product',JSON.stringify(this.product))
      formData.append('file',this.userFile)
      this.service.addProduct(formData)
      .subscribe((data) => {
          if (data) {
            alert("Registered Successfully!")
            this.service.notification(data.productId,'add')
            .subscribe((data)=>{
              this.count=this.count+1;
              this.service.setNotificationCount(this.count)
              //.subscribe((data)=>{
              //  this.count=this.service.getNotificationCount();
              //  console.log(this.count)
              //})
            })
            //this.router.navigateByUrl("/productview")
      
          }
        }, (data) => {
          alert(data.error.message)
        }
        
      )

    }
    else {
      alert("Invalid details")
    }

  }
  get f(){
    return this.productRegForm.controls
  }

  onSelectFile(event:any){
    const file= event.target.files[0];
    this.userFile=file

  }
  viewNotifications(){
    this.router.navigateByUrl("/sellernotification")
  }

}