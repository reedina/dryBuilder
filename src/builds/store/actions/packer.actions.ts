import { Action } from '@ngrx/store';
import { Packer } from '../../models/packer.model';


// LOAD PACKER
// Action Constants
export const LOAD_PACKER = '[Builds] Load Packer';
export const LOAD_PACKER_FAIL = '[Builds] Load Packer Fail';
export const LOAD_PACKER_SUCCESS = '[Builds] Load Packer Success';

// Action Creators
export class LoadPacker implements Action {
   readonly type = LOAD_PACKER;
}
export class LoadPackerFail implements Action {
  readonly type = LOAD_PACKER_FAIL;
  constructor(public payload: any) {}
}
export class LoadPackerSuccess implements Action {
  readonly type = LOAD_PACKER_SUCCESS;
  constructor(public payload: Packer[]) {}
}

// Action Types
export type PackerActions =
 | LoadPacker
 | LoadPackerFail
 | LoadPackerSuccess;
