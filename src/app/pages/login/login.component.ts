import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
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
    //console.log(this.email + "/////////////" + this.password);
    this.authService.login(this.email, this.password).subscribe((data) => {
      localStorage.setItem("token", data.access_token);
      this.router.navigate(["/dashboard"]);
    });
  }
}
