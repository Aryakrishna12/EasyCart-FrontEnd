import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {

  public userFile:any=File
  public product:any
  productEditForm=this.fb.group({
    productName: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]{3,15}$")]],
    description: ["", [Validators.required]],
    unitPrice: ["",],
    category: ["",],
    stock: ["",],
    msrp: ["",],
    size: ["",],
    color: ["", ],
   

  })
  id: any;

  constructor(private fb:FormBuilder, private productService:ProductService, private router:Router) { }
  public dropdown:any=[]
  ngOnInit(): void {
    //this.getDropdown();
    this.id=this.productService.getProductId();
    this.productService.getProductById(this.id).subscribe((res:any)=>{
    this.productEditForm.patchValue(res[0])
    console.log(res)
    });
  }
  edit() {
    this.productEditForm.markAllAsTouched();
    
    if (this.productEditForm.valid) {
      this.product=this.productEditForm.value
      console.log(this.id)
      const formData=new FormData();
      formData.append('product',JSON.stringify(this.product))
      formData.append('file',this.userFile)
      this.productService.updateProduct(this.id,formData)
      .subscribe(
        (data) => {
          if (data) {
            alert("Updated Successfully!")
            this.router.navigateByUrl("/productview")
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
    return this.productEditForm.controls
  }
  get getCategoryName(){
    return this.productEditForm.get('categoryName') as FormArray;
  }
  onSelectFile(event:any){
    const file= event.target.files[0];
    this.userFile=file

  }
  //getDropdown(){
    //this.service.getDropdown().subscribe(data=>{
      //this.dropdown=data;
    //},data=>{
      //alert(data.error.message);
      
    //})
  //}

}
