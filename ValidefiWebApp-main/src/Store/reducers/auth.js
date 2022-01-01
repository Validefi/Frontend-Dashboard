import * as ActionTypes from '../ActionTypes';

const initState = {
  isLoading: false,
  isEthereum: true,
  message: null,
  isRegistered: false,
  isAuthenticated: false,
  nonce: null,
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
        isRegistered: false,
        nonce: null,
      };

    case ActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRegistered: false,
        nonce: action.nonce,
      };

    case ActionTypes.REGISTER_USER_FAILED:
      return {
        ...state,
        message: action.message,
        isLoading: false,
        isRegistered: false,
      };

    case ActionTypes.AUTHENTICATE_USER_REQUEST:
      return {
        ...state,
        message: null,
        isLoading: true,
        isAuthenticated: false,
      };

    case ActionTypes.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };

    case ActionTypes.AUTHENTICATE_USER_FAILED:
      return {
        ...state,
        message: action.message,
        isLoading: false,
        isAuthenticated: false,
      };

    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        isRegistered: false,
        isAuthenticated: false,
        nonce: null,
      };

    default:
      return state;
  }
};

export default authReducer;
