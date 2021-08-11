import { combineReducers } from 'redux';
import authReducer from './auth';
import settingsReducer from './settings';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
  wallet: walletReducer,
});

export default rootReducer;
