import { Routes } from "@angular/router";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
//import { UserProfileComponent } from "src/app/pages/user-profile/user-profile.component";
import { TablesComponent } from "src/app/pages/tables/tables.component";
import { ShopComponent } from "src/app/pages/shop/shop.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "tables", component: TablesComponent },
  { path: "shop", component: ShopComponent },
];
