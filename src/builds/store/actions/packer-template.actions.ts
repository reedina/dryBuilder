import { Action } from '@ngrx/store';
import { PackerTemplate } from '../../models/packer-template.model';


// LOAD PACKER
// Action Constants
export const LOAD_PACKER_TEMPLATE = '[Builds] Load Packer Template';
export const LOAD_PACKER_TEMPLATE_FAIL = '[Builds] Load Packer Template Fail';
export const LOAD_PACKER_TEMPLATE_SUCCESS = '[Builds] Load Packer Template Success';

// Action Creators
export class LoadPackerTemplate implements Action {
   readonly type = LOAD_PACKER_TEMPLATE;
}
export class LoadPackerTemplateFail implements Action {
  readonly type = LOAD_PACKER_TEMPLATE_FAIL;
  constructor(public payload: any) {}
}
export class LoadPackerTemplateSuccess implements Action {
  readonly type = LOAD_PACKER_TEMPLATE_SUCCESS;
  constructor(public payload: PackerTemplate[]) {}
}

// Action Types
export type PackerTemplateActions =
 | LoadPackerTemplate
 | LoadPackerTemplateFail
 | LoadPackerTemplateSuccess;
