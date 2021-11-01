import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sellernotification',
  templateUrl: './sellernotification.component.html',
  styleUrls: ['./sellernotification.component.css']
})
export class SellernotificationComponent implements OnInit {

  constructor(private productService:ProductService) { }
  message:any;
  rImage='data:image/png;base64,'
  
  ngOnInit(): void {
    this.message=this.productService.viewNotification()
    .subscribe((data:any)=>{
      this.message=data
      console.log(data)
    })

  }
 

}
