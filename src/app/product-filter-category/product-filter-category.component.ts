import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter-category',
  templateUrl: './product-filter-category.component.html',
  styleUrls: ['./product-filter-category.component.css']
})
export class ProductFilterCategoryComponent implements OnInit {

  @Input() productDetailsByCategory:any;
  rImage='data:image/png;base64,'
  constructor() { }

  ngOnInit(): void {
    //console.log(this.productDetailsByCategory)
  }

}
