import { signalStore, withState } from '@ngrx/signals';
import { withAppMethods } from './app.methods';
import { AppState, initialState } from './app.state';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState<AppState>(initialState),
  withAppMethods()
);
