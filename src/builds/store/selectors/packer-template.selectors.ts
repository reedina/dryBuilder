import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPacker from '../reducers/packer-template.reducers';

import { PackerTemplate } from '../../models/packer-template.model';

export const getPackerTemplateState = createSelector(
  fromFeature.getBuildState , (state: fromFeature.BuildState) => state.packer
);


export const getPackerTemplateEntities = createSelector(getPackerTemplateState, fromPacker.getPackerTemplateEntities);
export const getPackerTemplateLoaded = createSelector(getPackerTemplateState, fromPacker.getPackerTemplateLoaded);
export const getPackerTemplateLoading = createSelector(getPackerTemplateState, fromPacker.getPackerTemplateLoading);



