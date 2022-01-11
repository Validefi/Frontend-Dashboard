import { combineReducers } from 'redux';
import authReducer from './auth';
import settingsReducer from './settings';
import walletReducer from './wallet';
import utilsReducer from './utils';

const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
  wallet: walletReducer,
  utils: utilsReducer,
});

export default rootReducer;
