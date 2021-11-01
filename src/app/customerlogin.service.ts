import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerloginService  {
   
  constructor(private httpClient:HttpClient) { }
  getToken(){
  return localStorage.getItem('token1')
  }
  register(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:8001/customer',data);
  }
  login(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:8001/cust_login',data);
  }
  update(id:any,data:any):Observable<any>{
    return this.httpClient.put('http://localhost:8001/customer/'+id, data);
  }
  getCurrentCustomer(){
    return this.httpClient.get('http://localhost:8001/cust_login');
  }
  getCustomerByEmail(email:any):Observable<any>{
    return this.httpClient.get('http://localhost:8001/customer/getId/'+email);
  }
  loggedIn(){
    return !!localStorage.getItem('token1')
  }
  logoutUser(){
  localStorage.removeItem('token1')
  }

}
