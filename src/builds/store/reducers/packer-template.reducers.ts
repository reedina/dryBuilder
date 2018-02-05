import * as fromPacker from '../actions/packer-template.actions';
import { PackerTemplate } from '../../models/packer-template.model';

export interface PackerTemplateState {
   entities: PackerTemplate[];
   loaded: boolean;
   loading: boolean;
}

// Initial State
export const initialState: PackerTemplateState = {
   entities: [
      {  friendly_name: 'packer template 01',
         builders:
           [
                {
                  friendly_name: 'simple builder aws',
                  access_key: 'access_one',
                  secret_key: 'secret_one',
                  type: 'amazon-ebs',
                  region: 'region_name',
                  instance_type: 'instance_name',
                  ssh_username: 'ssh_username',
                  ami_name: 'ami_name',
                  source_ami_filter: {
                    filters: { virtualization: 'hvm', name: 'ubuntu', 'root-device-type': 'ebs'},
                    owners: ['owners'],
                    most_recent: true
                  }
                },
                {
                  friendly_name: 'simple builder azure',
                  type: 'azure-arm'
                }
           ]
      }
  ],
  loaded: false,
  loading: false
};

// Reducer
export function reducer(
    state = initialState,
    action: fromPacker.PackerTemplateActions
) {
    switch ( action.type ) {
      case fromPacker.LOAD_PACKER_TEMPLATE: {
          return {
            ...state,
            loading: true
          };
      } // end case

      case fromPacker.LOAD_PACKER_TEMPLATE_SUCCESS: {
        const packer = action.payload;
        const entities = [...state.entities, ...packer];

        return {
            ...state,
            loading: false,
            loaded: true,
            entities
        };
      } // end case

      case fromPacker.LOAD_PACKER_TEMPLATE_FAIL: {
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
export const getPackerTemplateEntities = (state: PackerTemplateState) => state.entities;
export const getPackerTemplateLoading = (state: PackerTemplateState) => state.loading;
export const getPackerTemplateLoaded = (state: PackerTemplateState) => state.loaded;
