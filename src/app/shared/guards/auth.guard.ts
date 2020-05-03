import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '@app/core/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const adminLoggedIn = this.loginService.getLoggedInUserName();
    if (state.url.indexOf('/login/admin') > -1 && adminLoggedIn) {
      this.router.navigate(['/dashboard']);
      return false;
    } else if (state.url.indexOf('/news/add') > -1 && !adminLoggedIn) {
      this.router.navigate(['/news']);
      return false;
    } else {
      return true;
    }
  }
}
