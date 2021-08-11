import * as ActionTypes from '../ActionTypes';

const initState = {
  monitored_wallet: null,
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MONITOR_WALLET:
      return {
        ...state,
        monitored_wallet: action.wallet,
      };

    default:
      return state;
  }
};

export default settingsReducer;
