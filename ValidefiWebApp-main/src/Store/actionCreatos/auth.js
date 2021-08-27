import axios from 'axios';
import * as ActionTypes from '../ActionTypes';
import { apiUrl } from '../../Urls';

export const registerUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.REGISTER_USER_REQUEST });
    return await axios
      .post(apiUrl + '/api/user/register', data)
      .then((response) => {
        dispatch({
          type: ActionTypes.REGISTER_USER_SUCCESS,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.REGISTER_USER_FAILED,
          errmess: 'Something went wrong. Please try again',
        });
      });
  };
};
