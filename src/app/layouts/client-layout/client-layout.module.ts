import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClientLayoutRoutes } from "./client-layout.routing";
import { UserProfileComponent } from "src/app/pages/user-profile/user-profile.component";
import { TablesComponent } from "src/app/pages/tables/tables.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ClipboardModule } from "ngx-clipboard";
import { ClientLayoutComponent } from "./client-layout.component";
import { SidebarComponent } from "src/app/components/sidebar/sidebar.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { NavbarComponent } from "src/app/components/navbar/navbar.component";
import { ComponentsModule } from "src/app/components/components.module";
import { HomeComponent } from "src/app/pages/home/home.component";
import { UserService } from "src/app/services/user.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule,
  ],
  declarations: [
    UserProfileComponent,
    TablesComponent,
    ClientLayoutComponent,
    HomeComponent,
  ],
  providers: [UserService],
})
export class ClientLayoutModule {}
