import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  @Input() productDetails:any;
  rImage='data:image/png;base64,'
  
  constructor(private productService:ProductService,private router:Router) { }
  
  ngOnInit(): void {  
    console.log(this.productDetails)
  }
  detailPage(){
    this.productService.setProductId(this.productDetails.productId)
    this.router.navigate(['itemdetail']);
    
   }
}
