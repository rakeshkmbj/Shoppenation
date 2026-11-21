import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CommonService {
    constructor(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
        this.baseUrl = "http://eguarddocshieldapi/carryr/b2b";
        this.imgUrl = "http://eguarddocshieldapi";
        this.stringSubject = new Subject();
        this.stringSubject1 = new Subject();
        console.log(this.homeDeliverydata);
    }
    postCallHttp(baseUrl, data) {
        let headerOptions = new HttpHeaders({
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json;charset=utf-8',
            'Authorization': 'Basic ZXBwdXNlcjpFcHBVc2VyQEVwcA=='
        });
        let options = {
            headers: headerOptions
        };
        return this.http.post(baseUrl, data, options);
    }
    fetchDataFromGetType2(url) {
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": "Basic cmFrZXNoazplcHBhcHBsaWNhdGlvbg=="
        });
        return this.httpClient.get(url, { headers: headers });
    }
    getCall(url) {
        return this.http.get(url);
    }
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
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i1.HttpClient)); };
CommonService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=common.service.js.map