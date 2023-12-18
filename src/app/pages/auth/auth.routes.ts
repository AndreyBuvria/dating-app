import { Route } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthRoutes } from './enums';

export const routes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: AuthRoutes.Login },
      {
        path: AuthRoutes.Login,
        component: LoginComponent
      },
      {
        path: AuthRoutes.Signup,
        component: SignupComponent
      }
    ]
  }
];
