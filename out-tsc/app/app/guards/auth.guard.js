import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "ngx-toastr";
export class AuthGuard {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    canActivate(route, state) {
        const raw = localStorage.getItem('logindata');
        const session = raw ? JSON.parse(raw) : null;
        // User never logged in
        if (!session) {
            this.router.navigate(['/']);
            return false;
        }
        // Session expired
        if (new Date().getTime() > session.expiryTime) {
            localStorage.clear();
            this.toastr.info('Session expired. Please login again.');
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.ToastrService)); };
AuthGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.ToastrService }]; }, null); })();
//# sourceMappingURL=auth.guard.js.map