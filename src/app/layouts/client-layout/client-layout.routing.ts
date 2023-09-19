import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/pages/home/home.component";
import { ProductPageComponent } from "src/app/pages/product-page/product-page.component";
import { ShopComponent } from "src/app/pages/shop/shop.component";
import { UserProfileComponent } from "src/app/pages/user-profile/user-profile.component";

export const ClientLayoutRoutes: Routes = [
  { path: "user-profile", component: UserProfileComponent },
  { path: "home", component: HomeComponent },
  { path: "shop", component: ShopComponent },
  { path: "product-page", component: ProductPageComponent },
];
