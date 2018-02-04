import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as fromPacker from './packer.reducers';


export interface BuildState {
   packer: fromPacker.PackerState;
}

export const reducers: ActionReducerMap<BuildState> = {
  packer: fromPacker.reducer
};


export const getBuildState = createFeatureSelector<BuildState>('builds');
