import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ADMIN_ROUTES, CLIENT_ROUTES } from "../routes";
import { User } from "src/app/api/user";
import { Role } from "src/app/api/role";


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  user :User;

  constructor(private router: Router) {
    this.user =JSON.parse(localStorage.getItem("user"))  as unknown as User
  }

  ngOnInit() {
    if(this.user.role == Role.CLIENT){
      this.menuItems = CLIENT_ROUTES.filter((menuItem) => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    }
    if(this.user.role == Role.ADMIN){
      this.menuItems = ADMIN_ROUTES.filter((menuItem) => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    }

  }
}
