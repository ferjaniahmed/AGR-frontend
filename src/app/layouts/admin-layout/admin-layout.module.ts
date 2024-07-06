import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClipboardModule } from "ngx-clipboard";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TablesComponent } from "src/app/pages/tables/tables.component";
import { UserService } from "src/app/services/user.service";
import { ShopComponent } from "src/app/pages/shop/shop.component";
import { ShareModule } from "src/app/shares/shared.module";
import { ShareService } from "src/app/shares/shares.service";
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ShareModule
  ],
  declarations: [
    DashboardComponent,
    IconsComponent,
    MapsComponent,
    TablesComponent,

  ],
  providers: [UserService,ShareService],
})
export class AdminLayoutModule {}
