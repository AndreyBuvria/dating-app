import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.routes').then((c) => c.mainRoutes)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then((c) => c.routes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
