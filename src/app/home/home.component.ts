import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
 

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.viewProducts();
  }
  viewProducts(){
    this.productService.viewProduct().subscribe((data) => {
      if(data)
      {
        this.products=data;
      }
    },(data)=>{
      alert(data.error.message);
      
    })
  }
}
