import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { Payload } from "src/app/api/payload";
import { UserService } from "src/app/services/user.service";

@Component({
  templateUrl: "./home.component.html",
  selector: "app-home",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  token: string = "";
  constructor(private route: Router, private userService: UserService) {
    //read token from localStorage
    this.token = localStorage.getItem("token");
  }
  ngOnInit(): void {
    // decode token
    const payload = jwtDecode<Payload>(this.token);
    //get user connect
    this.userService.getById(payload.id).subscribe((data) => console.log(data));
  }
  pizzaClick() {
    this.route.navigate(["/product", { food: "pizza" }]);
  }

  humburgerClick() {
    this.route.navigate(["/product", { food: "humburger" }]);
  }
}
