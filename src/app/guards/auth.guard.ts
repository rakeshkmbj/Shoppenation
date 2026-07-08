import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

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