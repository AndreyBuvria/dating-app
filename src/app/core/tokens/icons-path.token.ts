import { InjectionToken } from '@angular/core';

export const ICONS_PATH = new InjectionToken<string>('Path to the folder where are icons', {
  providedIn: 'root',
  factory: () => {
    return '../../../assets/icons';
  }
});
