import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl:string = "http://eguarddocshieldapi/carryr/b2b";
  imgUrl: string = "http://eguarddocshieldapi";
  getlogindata: any;
  domainid: string;
 homeDeliverydata: any;
  homdeliverydata: any;
  constructor(
    private httpClient: HttpClient,
    private http : HttpClient
  ) {
console.log(this.homeDeliverydata);
  }

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

  fetchDataFromGetType2(url) : Observable <any> {
    let headers = new HttpHeaders({ 
      "Content-Type": "application/json",
      "Authorization":"Basic cmFrZXNoazplcHBhcHBsaWNhdGlvbg==" });
      return this.httpClient.get(url, { headers: headers });
  }

  getCall(url) {
    return this.http.get(url);
}

public stringSubject = new Subject<any>();
public stringSubject1 = new Subject<any>();
passLoginData(loginData) {
  //passing the data as the next observable
  this.stringSubject.next(loginData);
  console.log(loginData);
}


getHomeDelivery(data) {
  //passing the data as the next observable
  this.stringSubject1.next(data);
  console.log(data);
  this.homdeliverydata = data;
}




}
