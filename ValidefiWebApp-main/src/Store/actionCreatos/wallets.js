import axios from 'axios';
import * as ActionTypes from '../ActionTypes';
import { apiUrl } from '../../Urls';

export const setMonitorWallet = (data) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.REGISTER_MONITOR_WALLET_REQUEST,
      wallet: data.wallet || null,
    });
    return await axios
      .post(apiUrl + '/api/wallet/monitor', data)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: ActionTypes.REGISTER_MONITOR_WALLET_SUCCESS,
            message: response.data?.mssg || 'Wallet monitored successfully.',
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.REGISTER_MONITOR_WALLET_FAILED,
          message:
            error?.data?.response || 'Something went wrong. Please try again',
        });
      });
  };
};

// export const setMonitorWallet = (wallet) => {
//   return {
//     type: ActionTypes.SET_MONITOR_WALLET,
//     wallet: wallet,
//   };
// };

export const setWalletBalance = (balance) => {
  return {
    type: ActionTypes.SET_WALLET_BALANCE,
    balance: balance,
  };
};
