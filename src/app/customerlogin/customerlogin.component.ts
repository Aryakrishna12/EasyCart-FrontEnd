import { Component, OnInit } from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerloginService } from '../customerlogin.service';
import { CustomersignupComponent } from '../customersignup/customersignup.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { NotificationsService} from 'angular2-notifications';
import { title } from 'process';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  hide=true;
  loginForm: FormGroup;
  submitted: boolean;
  data: any;
 
  constructor(
      public dialogRef:MatDialogRef<CustomerloginComponent>,
      private notification:NotificationsService,
      private dialog:MatDialog,
      private loginService:CustomerloginService,
      private router:Router) { 
        this.loginForm = new FormGroup({
          email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
          password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
        });
    }
  ngOnInit(): void {
   
  }
  get f() { return this.loginForm.controls; } 
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      this.data=this.loginForm.value;
      this.loginService.login(this.data)
      .subscribe(
        (res:any)=>{
          if(res['status']==1){
            localStorage.setItem('token1',res.accessToken.value);
          }
        }
      );
      this.notification.success('Success','login success',{
        position:['top', 'right'],
        timeOut: 2000,
        animate:'fade',
        showProgressBar:true,
        clickIconToClose:false
         } );
      this.onClose();
    } 
    else{
      this.notification.error('failed','login failed',{
        position:['top', 'right'],
        timeOut: 2000,
        animate:'fade',
        showProgressBar:true
         } );
    } 
  }
  updateDialog(){
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(ForgotpasswordComponent, dialogConfig);
  }
  onClose(){
    this.dialogRef.close();
  }
}
