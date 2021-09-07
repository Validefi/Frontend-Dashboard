import * as ActionTypes from '../ActionTypes';

const initState = {
  isLoading: false,
  isEthereum: true,
  message: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_NETWORK:
      return {
        ...state,
        isEthereum: action.isEthereum,
        isLoading: true,
      };

    case ActionTypes.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case ActionTypes.REGISTER_USER_REQUEST:
      return {
        ...state,
        message: null,
        isLoading: true,
      };

    case ActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        message: action.message,
        isLoading: false,
      };

    case ActionTypes.REGISTER_USER_FAILED:
      return {
        ...state,
        message: action.message,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
