import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { Payload } from "src/app/api/payload";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string = "";
  password: string = "";
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  ngOnDestroy() {}
  login() {
    this.authService.login(this.email, this.password).subscribe((data) => {
      localStorage.setItem("token", data.access_token);
      const payload = jwtDecode<Payload>(data.access_token);
      console.log(payload);
      if (payload.role === "admin") {
        this.router.navigate(["admin/dashboard"]);
      } else {
        console.log("pass");
        this.router.navigate(["app/home"]);
      }
    });
  }
}
