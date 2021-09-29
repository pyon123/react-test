import {
  LOAD_PORPERTY,
  LOAD_PORPERTY_SUCCESS,
  LOAD_PORPERTY_FAILURE,
} from './types';

export const action_loadProperty = (params) => ({
  type: LOAD_PORPERTY,
  payload: {params}
})

export const action_loadPropertySuccess = (properties) => ({
  type: LOAD_PORPERTY_SUCCESS,
  payload: { properties }
})

export const action_loadPropertyFailure = (properties) => ({
  type: LOAD_PORPERTY_FAILURE,
})