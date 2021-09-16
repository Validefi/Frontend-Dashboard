import * as ActionTypes from '../ActionTypes';

const initState = {
  monitored_wallet: null,
  balance: 0,
  message: null,
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WALLET_BALANCE:
      return {
        ...state,
        balance: action.balance,
      };

    case ActionTypes.REGISTER_MONITOR_WALLET_REQUEST:
      return {
        ...state,
        message: null,
        monitored_wallet: action.wallet,
      };

    case ActionTypes.REGISTER_MONITOR_WALLET_SUCCESS:
      return {
        ...state,
        message: action.message,
      };

    case ActionTypes.REGISTER_MONITOR_WALLET_FAILED:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default settingsReducer;
