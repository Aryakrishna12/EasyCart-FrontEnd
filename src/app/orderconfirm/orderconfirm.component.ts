import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { CustomerprofileService } from '../customerprofile.service';
@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.component.html',
  styleUrls: ['./orderconfirm.component.css']
})
export class OrderconfirmComponent implements OnInit {

  addressForm: FormGroup
  submitted: boolean;
  data: any;
  constructor(private profileService:CustomerprofileService) { 
    this.addressForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.maxLength(30)]),
      lastName: new FormControl('',[Validators.required,Validators.maxLength(30)]),
      address: new FormControl('',[Validators.required,Validators.maxLength(200)]),
      city: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      landmark: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      pinCode: new FormControl('',[Validators.required,Validators.maxLength(6)]),
      state: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      country: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      phone: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
    });
  }
  get f() { return this.addressForm.controls; } 
  onSubmit(){
    this.submitted = true;
    if(this.addressForm.valid){
      this.data=this.addressForm.value;
      this.profileService.delevaryTo(this.data)
      .subscribe((data:any)=>{
        console.warn(data)
      });
    this.profileService.setNotify('order placed') 
    } 
    else{
      alert('invalid')
    }
  }
  ngOnInit(): void {
  }

}
