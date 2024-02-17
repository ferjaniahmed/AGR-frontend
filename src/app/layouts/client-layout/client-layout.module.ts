import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClientLayoutRoutes } from "./client-layout.routing";
import { UserProfileComponent } from "src/app/pages/user-profile/user-profile.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ClipboardModule } from "ngx-clipboard";
import { ClientLayoutComponent } from "./client-layout.component";
import { ComponentsModule } from "src/app/components/components.module";
import { HomeComponent } from "src/app/pages/home/home.component";
import { UserService } from "src/app/services/user.service";
import { ShareModule } from "src/app/shares/shared.module";
import { FoodService } from "src/app/services/food.service";
import { ShareService } from "src/app/shares/shares.service";
import { Store, StoreModule } from "@ngrx/store";
import { orderReducer } from "src/app/store/order.reducer";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ClientLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule,
    ShareModule,
    StoreModule.forRoot({orders : orderReducer})
  ],
  declarations: [
    UserProfileComponent,
    ClientLayoutComponent,
    HomeComponent,
  ],
  providers: [UserService,FoodService,ShareService],
})
export class ClientLayoutModule {}
