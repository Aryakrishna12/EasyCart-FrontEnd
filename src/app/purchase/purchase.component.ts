import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerprofileService } from '../customerprofile.service';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchaseForm:FormGroup;
  data: any;
  purchaseList:[]
  constructor(private customerProfileService:CustomerprofileService,
    private datePipe:DatePipe) {
    this.purchaseForm = new FormGroup({
      date: new FormControl('')
    
    });
   }

   onSubmit(){
     this.data=this.purchaseForm.value;
    console.log(this.data);
    const d=this.data['date']
    this.customerProfileService.purchase(d)
    .subscribe((pdata:any)=>{
       console.log(pdata)
       this.purchaseList=pdata;
       console.log(this.purchaseList)
    });
   }
  ngOnInit(): void {
  }

}
