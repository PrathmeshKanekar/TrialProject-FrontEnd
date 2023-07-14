import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "https://localhost:7241/api/";
  constructor(private http:HttpClient) { }

  getHeaders(){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return headers;
  }

  get(url:string){
    return this.http.get( this.baseurl + url, {headers:this.getHeaders()});
  }

  post(url:string , data:any){
    return this.http.post( this.baseurl + url , data, {headers:this.getHeaders()});
  }

  put(url:string , data:any){
    return this.http.put( this.baseurl + url , data, {headers:this.getHeaders()});
  }

  delete(url:string){
    return this.http.delete( this.baseurl + url, {headers:this.getHeaders()});
  }
}
