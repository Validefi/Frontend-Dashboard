import axios from '../axios';
import * as ActionTypes from '../ActionTypes';
import { url } from '../urls';

export const loginAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_REQUEST });
    return await axios
      .post(`${url}/authenticate/`, data)
      .then((response) => {
        if (response?.data?.access) {
          dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
            data: response.data,
          });
        } else {
          dispatch({
            type: ActionTypes.LOGIN_FAILED,
            errmess: 'Login failed, Please try again.',
          });
        }
      })
      .catch(() => {
        dispatch({
          type: ActionTypes.LOGIN_FAILED,
          errmess: 'Something went wrong. Please try again',
        });
      });
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.LOGOUT_REQUEST });
    return await axios
      .post(`${url}/logout/`)
      .then(() => {
        dispatch({ type: ActionTypes.LOGOUT_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: ActionTypes.LOGOUT_FAILED });
      });
  };
};

export const setAddress = (address) => {
  return {
    type: ActionTypes.SET_WALLET_ADDRESS,
    address: address,
  };
};
export const setChainId = (chainId) => {
  return {
    type: ActionTypes.SET_CHAIN_ID,
    chainId: chainId,
  };
};
export const setNetwork = (network) => {
  return {
    type: ActionTypes.SET_NETWORK,
    network: network,
  };
};
