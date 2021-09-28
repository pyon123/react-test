import {
  LOAD_PORPERTY,
  LOAD_PORPERTY_SUCCESS,
  LOAD_PORPERTY_FAILURE,
} from '../actions/types';

const INIT_STATE = {
  loading: false,
  properties: []
};

const propertyReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_PORPERTY:
      return {...state, loading: true};
    
    case LOAD_PORPERTY_SUCCESS:
      return {...state, properties: action.payload.properties, loading: false};
    
    case LOAD_PORPERTY_FAILURE:
      return {...state, properties: [], loading: false};

    default:
      return {...state};
  }
}

export default propertyReducer;