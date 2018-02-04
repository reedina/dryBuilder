import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPacker from '../reducers/packer.reducers';

import { Packer } from '../../models/packer.model';

export const getPackerState = createSelector(
  fromFeature.getBuildState , (state: fromFeature.BuildState) => state.packer
);


export const getPackerEntities = createSelector(getPackerState, fromPacker.getPackerEntities);
export const getPackerLoaded = createSelector(getPackerState, fromPacker.getPackerLoaded);
export const getPackerLoading = createSelector(getPackerState, fromPacker.getPackerLoading);



