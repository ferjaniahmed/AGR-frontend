import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { FoodService } from "src/app/services/food.service";


@Component({
  templateUrl: "./home.component.html",
  selector: "app-home",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  token: string = "";
  constructor(private route: Router, private authService: AuthService , private foodSrevice : FoodService) {
    //read token from localStorage
    this.token = localStorage.getItem("token");
    localStorage.setItem("orders" , "[]")
    
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
    this.route.navigate(["app/shop", { food: "hamburger" }]);
  }
}
