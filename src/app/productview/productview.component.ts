import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductViewComponent implements OnInit {
  products:any=[]
  rImage='data:image/png;base64,'
  productlist:any=[];
  displayedColumns :String[] = ['productId','productName','description','unitPrice','color','size','createDate','image','edit','delete']
  constructor(private productService:ProductService,private router:Router,
    private dialogRef:MatDialog) { }

  ngOnInit(): void {
    this.viewProducts()
  }
  viewProducts() {

    this.productService.viewProduct().subscribe((data) => {
      if(data)
      {
        console.log(data);
        this.products=data;
      }
    },(data)=>{
      alert(data.error.message);
      
    })
  }
  deleteProduct(productId:any){
    this.productlist.slice(productId,1)
    if(confirm('Are you sure want to delete this?')){
      this.productService.deleteProduct(productId).subscribe((res)=>{
      if(res){
        alert('Deleted Successfully')  
        window.location.reload();      
      }
    },(res)=>{
      alert(res.error.message);
      })
    }
  
  }
  editProduct(productId:any){
    
    this.productService.setProductId(productId)
    this.router.navigateByUrl("productedit")
  } 
  addProduct(){
    this.router.navigateByUrl("product")
  }
  












    //if(confirm('Are you sure to want delete the data?'))
    //{
    /*this.productService.deleteProduct(productId).subscribe(()=>{
      alert("Deleted")
      window.location.reload()
    })*/
    //}

  /*export(data:any){
    localStorage.setItem('data',JSON.stringify(data))
    this.router.navigateByUrl('/export-product')

  }
  exportAll(){
    var token = localStorage.getItem('token');
    this.service.exportAll(token)
    .subscribe((data)=>{
      let file=new Blob([data],{type:'text/csv'});
      var fileURL= window.URL.createObjectURL(file);
      var anchor=document.createElement("a")
      anchor.download="products.csv";
      anchor.href=fileURL;
      anchor.click();
      // window.open(fileURL);
    })
  }
  openDialog(data:any){

    this.dialogRef.open(PopupComponent,{data});
  }*/
}