import { ActionReducerMap } from '@ngrx/store';
import { commonReducer } from './reducers';
import { CommonState } from './states/common.state';

export interface AppState {
  common: CommonState;
}

export const reducers: ActionReducerMap<AppState> = {
  common: commonReducer
};
