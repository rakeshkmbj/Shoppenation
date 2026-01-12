import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';  



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl:string = "https://eguarddocshieldapi/carryr/b2b";
  Url :string;  
  token : string;  
  header : any; 

 // baseUrl:string = "http://www.eguarddocshield.com/hdlrdev/carryr/b2b";
  constructor(private http : HttpClient) {}

  postCallHttp(baseUrl,data) : Observable <any> {
    let headerOptions = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json;charset=utf-8',
      'Authorization' : 'Basic ZXBwdXNlcjpFcHBVc2VyQEVwcA=='
    });
  let options = {
      headers: headerOptions
  };
    return this.http.post(baseUrl, data, options)
  }


  getCall(url) {
    return this.http.get(url);
}


 
}

interface Article {
  id: number;
  title: string;
}


