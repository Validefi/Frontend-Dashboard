import axios from 'axios';
import * as ActionTypes from '../ActionTypes';
import { apiUrl } from '../../Urls';

export const registerUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.REGISTER_USER_REQUEST });
    return await axios
      .get(apiUrl + '/api/users', {
        params: { publicAddress: data.account },
      })
      .then((response) => {
        if (response.status === 200 && response.data.nonce) {
          dispatch({
            type: ActionTypes.REGISTER_USER_SUCCESS,
            nonce: response.data?.nonce,
          });
        } else {
          axios
            .post(apiUrl + '/api/users/', data)
            .then((res) => {
              if (res.status === 200 && res.data.nonce) {
                dispatch({
                  type: ActionTypes.REGISTER_USER_SUCCESS,
                  nonce: res.data?.nonce,
                });
              }
            })
            .catch((error) => {
              dispatch({
                type: ActionTypes.REGISTER_USER_FAILED,
                message: error?.data?.response || 'Invalid nonce',
              });
            });
        }
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.REGISTER_USER_FAILED,
          message:
            error?.data?.response || 'Something went wrong. Please try again',
        });
      });
  };
};

export const authenticateUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.AUTHENTICATE_USER_REQUEST });
    return await axios
      .post(apiUrl + '/api/authentication', data)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: ActionTypes.AUTHENTICATE_USER_SUCCESS,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.AUTHENTICATE_USER_FAILED,
          message:
            error?.data?.response || 'Something went wrong. Please try again',
        });
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LOGOUT_USER });
  };
};

export const toggleNetwork = (isEthereum) => {
  return {
    type: ActionTypes.TOGGLE_NETWORK,
    isEthereum: isEthereum,
  };
};
export const toggleLoading = (isLoading) => {
  return {
    type: ActionTypes.TOGGLE_LOADING,
    isLoading: isLoading,
  };
};
