import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ADMIN_ROUTES, CLIENT_ROUTES } from "../routes";
import { User } from "src/app/api/user";
import { Role } from "src/app/api/role";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "ni-tv-2 text-primary",
    class: "",
  },
  {
    path: "/icons", //complete URL
    title: "Icons",
    icon: "ni-planet text-blue",
    class: "",
  },
  {
    path: "/maps",
    title: "Maps",
    icon: "ni-pin-3 text-orange",
    class: "",
  },
  {
    path: "user-profile",
    title: "User profile",
    icon: "ni-single-02 text-yellow",
    class: "",
  },
  {
    path: "tables",
    title: "Tables",
    icon: "ni-bullet-list-67 text-red",
    class: "",
  },
];

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
