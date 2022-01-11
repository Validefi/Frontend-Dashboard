import axios from 'axios';
import * as ActionTypes from '../ActionTypes';
import { apiUrl } from '../../Urls';

export const fetchGas = (isEth) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GAS_PRICE_REQUEST });
    return await axios
      .get(`https://owlracle.info/${isEth ? 'eth' : 'bsc'}/gas`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: ActionTypes.GAS_PRICE_SUCCESS,
            gasPrice: response.data.speeds[1].gasPrice,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: ActionTypes.GAS_PRICE_FAILED,
          message: 'Something went wrong. Please try again',
        });
      });
  };
};
