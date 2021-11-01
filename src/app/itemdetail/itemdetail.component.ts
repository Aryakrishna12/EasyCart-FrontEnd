import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../Products';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})

export class ItemdetailComponent implements OnInit {
  
  //products: any;
  products:Products;
  id:any;
  rImage='data:image/png;base64,'

  constructor(private router:Router,private productService:ProductService) { }
  

  ngOnInit(): void {
    this.viewProducts();
  }
  viewProducts(){
    this.id=this.productService.getProductId()
    //console.log(this.id)
  this.productService.getProductById(this.id)
  .subscribe((data:any)=>{
     console.log(data)
     console.log(data[0].productName)
     this.products=data;
  });
  }
}