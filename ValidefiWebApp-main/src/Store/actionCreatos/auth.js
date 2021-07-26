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

export const registerAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.REGISTER_REQUEST });
    return await axios
      .post(`${url}/registration/`, data)
      .then((response) => {
        if (response.data) dispatch({ type: ActionTypes.REGISTER_SUCCESS });
        else
          dispatch({
            type: ActionTypes.REGISTER_FAILED,
            errmess: 'Registeration failed',
          });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.REGISTER_FAILED,
          errmess: 'Something went wrong. Please try again',
        });
      });
  };
};
