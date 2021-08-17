import * as ActionTypes from '../ActionTypes';

const initState = {
  monitored_wallet: null,
  balance: 0,
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MONITOR_WALLET:
      return {
        ...state,
        monitored_wallet: action.wallet,
      };
    case ActionTypes.SET_WALLET_BALANCE:
      return {
        ...state,
        balance: action.balance,
      };

    default:
      return state;
  }
};

export default settingsReducer;
