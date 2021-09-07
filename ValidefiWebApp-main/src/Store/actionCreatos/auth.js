import axios from 'axios';
import * as ActionTypes from '../ActionTypes';
import { apiUrl } from '../../Urls';

export const registerUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.REGISTER_USER_REQUEST });
    return await axios
      .post(apiUrl + '/api/user/register', data)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: ActionTypes.REGISTER_USER_SUCCESS,
            message: response.data?.mssg || 'User registed successfully.',
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
