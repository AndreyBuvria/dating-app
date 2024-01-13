import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.routes').then((m) => m.routes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
