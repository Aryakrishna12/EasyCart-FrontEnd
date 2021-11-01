import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemdetailComponent } from '../itemdetail/itemdetail.component';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() allProductDetails:any;

  rImage='data:image/png;base64,'
  orderFinished = false;

  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(): void {

  }
 detailPage(){
  this.productService.setProductId(this.allProductDetails.productId)
  this.router.navigate(['itemdetail']);
  
 }
 
}


