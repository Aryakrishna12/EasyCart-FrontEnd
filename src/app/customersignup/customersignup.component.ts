import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerloginService } from '../customerlogin.service';
@Component({
  selector: 'app-customersignup',
  templateUrl: './customersignup.component.html',
  styleUrls: ['./customersignup.component.css']
})
export class CustomersignupComponent implements OnInit {
  hide=true;
  signupForm: FormGroup;
  submitted: boolean;
  data: any;
 
  constructor(private loginService:CustomerloginService,
      public dialogRef:MatDialogRef<CustomersignupComponent>,
      private router:Router
     ) { 
        this.signupForm = new FormGroup({
          name: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
          password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
        });
    }

  ngOnInit(): void {
  }
  get f() { return this.signupForm.controls; } 
  onSubmit(){
    this.submitted = true;
    if(this.signupForm.valid){
      this.data=this.signupForm.value;
      this.loginService.register(this.data)
      .subscribe(
        (res:any)=>{
         console.warn(res)
        }
      );
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
