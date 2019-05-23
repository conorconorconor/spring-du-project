import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
constructor(private authService: AuthService, private router: Router) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // console.log("AuthGauard#canActivate called");
    // return true;
    let url = state.url;

    return this.checkLogin(url);
  }

  private checkLogin(url: string) {
    if(this.authService.getUserFromLocalStorage()) {
      return true;
    }

    this.authService.redirectUrl = url;
    this.router.navigate([""]);
    return false;
  }
}
