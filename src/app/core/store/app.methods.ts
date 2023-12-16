import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { AppState } from './app.state';

export const withAppMethods = () =>
  signalStoreFeature(
    { state: type<AppState>() },
    withMethods((state) => ({}))
  );
