import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productId:any
  no:any

  constructor(private httpClient:HttpClient) { }

  addProduct(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:8001/product',data);
  }
  viewProduct():Observable<any>{
    return this.httpClient.get('http://localhost:8001/product/get/all');
  }
  setProductId(id:any){
    this.productId=id;
  }
  getProductId(){
    return this.productId;
  }
  updateProduct(id:any,product:any){
    return this.httpClient.put('http://localhost:8001/product/'+id, product);
  }
  getProductById(id:any):Observable<any>{
    return this.httpClient.get('http://localhost:8001/product/get/id/'+id);
  }
  getProductByName(name:any){
    return this.httpClient.get('http://localhost:8001/product/get/name/'+name);
  }
  getProductByCategory(category:any){
    return this.httpClient.get('http://localhost:8001/product/get/category/'+category);
  }
  getCurrentProduct(){
    return this.httpClient.get('http://localhost:8001/product');
  }
  deleteProduct(id:any){
    return this.httpClient.delete('http://localhost:8001/product/delete/'+id);
 }
 notification(id:any ,msg:any):Observable<any>{
 
   let params = new HttpParams();
   params=params.append('productId',id);
   params=params.append('message',msg);
   //console.warn(params.toString());
  return this.httpClient.post('http://localhost:8001/notification?',params);
 }
 viewNotification():Observable<any>{
  return this.httpClient.get('http://localhost:8001/notification');
}
 setNotificationCount(count:any){
  this.no=count;
}
getNotificationCount(){
  return this.no;
}
}