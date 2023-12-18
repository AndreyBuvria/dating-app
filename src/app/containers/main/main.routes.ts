import { Route } from '@angular/router';
import { AppRoutes } from '@core/enums';
import { MainComponent } from './main.component';

export const mainRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: AppRoutes.Auth },
      {
        path: AppRoutes.Auth,
        loadChildren: () => import('../../pages/auth').then((m) => m.AuthModule)
      }
    ]
  }
];
