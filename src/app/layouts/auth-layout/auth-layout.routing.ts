import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    //{ path: 'user-profile',   component: UserProfileComponent },
];
