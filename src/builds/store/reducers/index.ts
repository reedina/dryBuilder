import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as fromPacker from './packer-template.reducers';


export interface BuildState {
   packer: fromPacker.PackerTemplateState;
}

export const reducers: ActionReducerMap<BuildState> = {
  packer: fromPacker.reducer
};


export const getBuildState = createFeatureSelector<BuildState>('builds');
