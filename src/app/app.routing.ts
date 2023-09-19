import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./services/auth.service";
import { ClientLayoutComponent } from "./layouts/client-layout/client-layout.component";
import { UserGuard } from "./guards/user.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/auth-layout/auth-layout.module").then(
            (m) => m.AuthLayoutModule
          ),
      },
    ],
  },
  {
    path: "app",
    component: ClientLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/client-layout/client-layout.module").then(
            (m) => m.ClientLayoutModule
          ),
      },
    ],
    canActivate: [UserGuard],
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
  providers: [AuthGuard, UserGuard],
})
export class AppRoutingModule {}
