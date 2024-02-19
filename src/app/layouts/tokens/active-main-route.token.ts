import { InjectionToken, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MainRoutesEnum } from '@pages/main/enums';
import { Observable, concat, filter, map, startWith } from 'rxjs';

export const ACTIVE_MAIN_ROUTE = new InjectionToken<Observable<MainRoutesEnum>>(
  'Active main route tab',
  {
    providedIn: 'root',
    factory: () => {
      const router = inject(Router);

      return concat(
        router.events.pipe(
          filter((event) => event instanceof NavigationEnd),
          map((_ev) => {
            const { urlAfterRedirects } = _ev as NavigationEnd;

            const mainRoute = urlAfterRedirects.split('/')[1];

            return mainRoute as MainRoutesEnum;
          })
        )
      ).pipe(startWith(router.url.split('/')[1] as MainRoutesEnum));
    }
  }
);
