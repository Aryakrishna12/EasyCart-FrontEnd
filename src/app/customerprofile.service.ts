import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerprofileService {

  constructor(private httpClient:HttpClient) { }
  message=[];
  delevaryTo(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:8001/contact',data);
  }
  setNotify(msg:String){
  this.message.push(msg);
  console.warn(this.message)
  }
  getNotify(){
   return this.message;
  }
  purchase(date:any):Observable<any>{
    return this.httpClient.get('http://localhost:8001/purchase/'+date);
  }
}
