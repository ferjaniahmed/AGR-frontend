import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FoodCardComponent } from "./food-card/food-card.component";
import { NgxPaginationModule } from "ngx-pagination";
import { OrderCardComponnet } from "./order-card/order.component";

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, NgxPaginationModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    FoodCardComponent,
    OrderCardComponnet
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    FoodCardComponent,
    OrderCardComponnet
  ],
})
export class ComponentsModule {}
