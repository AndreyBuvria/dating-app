import { Routes } from '@angular/router';
import { HomeComponent, MatchingComponent } from './components';
import { MainRoutesEnum } from './enums';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: MainRoutesEnum.Matching,
        component: MatchingComponent
      }
    ]
  }
];
