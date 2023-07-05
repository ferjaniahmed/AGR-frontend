import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { Payload } from "../api/payload";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    //read token from localeStorage
    const token = localStorage.getItem("token");
    console.log(token);
    /*let payload = jwtDecode(token);
    console.log(payload);*/

    if (token) {
      //decode token
      let payload = jwtDecode<Payload>(token);
      if (payload.role === "admin") {
        return true;
      } else if (payload.role === "client") {
        this.router.navigate(["/user-profile"]);
        return true;
      } else {
        this.router.navigate(["/login"]);
        return false;
      }
    } else {
      this.router.navigate(["/login"]);
      return true;
    }
  }
}
