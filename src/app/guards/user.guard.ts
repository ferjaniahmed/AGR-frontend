import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import jwtDecode from "jwt-decode";
import { Observable } from "rxjs";
import { Payload } from "../api/payload";
import { Injectable } from "@angular/core";

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    //throw new Error("Method not implemented.");
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      //decode token
      let payload = jwtDecode<Payload>(token);
      console.log(payload);
      if (payload.role === "client") {
        //this.router.navigate(["app/user-protfile"]);
        return true;
      } else {
        return false;
      }
    }
  }
}
