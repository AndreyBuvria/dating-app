import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./containers/main').then((m) => m.MainModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
