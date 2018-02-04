import * as fromPacker from '../actions/packer.actions';
import { Packer } from '../../models/packer.model';

export interface PackerState {
   entities: Packer[];
   loaded: boolean;
   loading: boolean;
}


export const initialState: PackerState = {
   entities: [
          {access_key: 'access_one', secret_key: 'secret_one'},
          {access_key: 'access_two', secret_key: 'secret_two'}
        ],
  loaded: false,
  loading: false
};

export function reducer(
    state = initialState,
    action: fromPacker.PackerActions
) {
    switch ( action.type ) {
      case fromPacker.LOAD_PACKER: {
          return {
            ...state,
            loading: true
          };
      } // end case

      case fromPacker.LOAD_PACKER_SUCCESS: {
        const packer = action.payload;
        const entities = [...state.entities, ...packer];

        return {
            ...state,
            loading: false,
            loaded: true,
            entities
        };
      } // end case

      case fromPacker.LOAD_PACKER_FAIL: {
        return {
            ...state,
            loading: false,
            loaded: false
        };
      }
    }  // end switch
    return state;
}


// Selector Functions
// Given Entity return slice of entity state
export const getPackerEntities = (state: PackerState) => state.entities;
export const getPackerLoading = (state: PackerState) => state.loading;
export const getPackerLoaded = (state: PackerState) => state.loaded;
