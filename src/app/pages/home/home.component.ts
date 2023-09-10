import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { Payload } from "src/app/api/payload";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";

@Component({
  templateUrl: "./home.component.html",
  selector: "app-home",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  token: string = "";
  constructor(private route: Router, private authService: AuthService) {
    //read token from localStorage
    this.token = localStorage.getItem("token");
  }
  ngOnInit(): void {
    //get user connect
    if (this.token.length > 0) {
      this.authService.getProfile(this.token).subscribe((data) => {
        localStorage.setItem("user", JSON.stringify(data));
      });
    }
  }
  pizzaClick() {
    this.route.navigate(["app/shop", { food: "pizza" }]);
  }

  humburgerClick() {
    this.route.navigate(["app/shop", { food: "humburger" }]);
  }
}
