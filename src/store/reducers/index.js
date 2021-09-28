import { combineReducers } from 'redux';
import propertyReducer from './PropertyReducer';

const reducers = combineReducers({
  propertyReducer: propertyReducer,
});

export default reducers;