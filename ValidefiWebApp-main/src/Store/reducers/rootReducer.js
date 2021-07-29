import { combineReducers } from 'redux';
import authReducer from './auth';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});

export default rootReducer;
