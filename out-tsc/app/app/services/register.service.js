import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RegisterService {
    // baseUrl:string = "http://www.eguarddocshield.com/hdlrdev/carryr/b2b";
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://eguarddocshieldapi/carryr/b2b";
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
    getCall(url) {
        return this.http.get(url);
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(i0.ɵɵinject(i1.HttpClient)); };
RegisterService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=register.service.js.map