import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/pages/home/home.component";
import { TablesComponent } from "src/app/pages/tables/tables.component";
import { UserProfileComponent } from "src/app/pages/user-profile/user-profile.component";

export const ClientLayoutRoutes: Routes = [
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "home", component: HomeComponent },
];
