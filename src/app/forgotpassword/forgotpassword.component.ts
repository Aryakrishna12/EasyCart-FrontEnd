import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerloginService } from '../customerlogin.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  hide=true;
  updateForm: FormGroup;
  submitted: boolean;
  data: any;
  currentdata: any;
  id: any;
 
  constructor(private loginService:CustomerloginService,
      public dialogRef:MatDialogRef<ForgotpasswordComponent>,
      private router:Router
     ) { 
        this.updateForm = new FormGroup({
          name: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
          password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
        });
    }

  ngOnInit(): void {
  }
  get f() { return this.updateForm.controls; } 
  onSubmit(){
    this.submitted = true;
    if(this.updateForm.valid){
      this.data=this.updateForm.value;
      //console.log(this.data.email)
      this.currentdata=this.loginService.getCustomerByEmail(this.data.email)
      .subscribe((cdata:any)=>{
          this.id=cdata.customerId
          this.loginService.update(this.id,this.data)
           .subscribe((udata:any)=>{
               console.warn(this.data)
           });
           console.log(cdata)
      });

      this.onClose();
    
    } 
    else{
      alert('invalid');
      this.onClose();
    } 
  }
  onClose(){
    this.dialogRef.close();
  }

}
