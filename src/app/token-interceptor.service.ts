import { Injectable, Injector } from '@angular/core';
import { } from '@angular/common/';
import { HttpEvent, HttpHandler ,HttpInterceptor,HttpRequest } from '@angular/common/http';
import { CustomerloginService} from './customerlogin.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector :Injector) { }
  res:any
  
  intercept(req: HttpRequest<any>,next: HttpHandler){
    let pro=this.injector.get(CustomerloginService)
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:`Contacts ${pro.getToken()}`
      }
    });
    return next.handle(tokenizedReq)
  }
}
