import * as ActionTypes from '../ActionTypes';

const initState = {
  isAuthenticated: true,
  isLoading: false,
  user_id: null,
  errmess: null,
  accessToken: null,
  refreshToken: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        errmess: null,
        isLoading: true,
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        errmess: null,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        user_id: action.data.user_id,
        isLoading: false,
      };

    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        errmess: action.errmess,
        access: null,
        refreshToken: null,
        isLoading: false,
      };

    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        errmess: null,
        accessToken: null,
        refreshToken: null,
        isLoading: true,
      };

    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        errmess: null,
        accessToken: null,
        refreshToken: null,
        isLoading: false,
      };

    case ActionTypes.LOGOUT_FAILED:
      return {
        ...state,
        errmess: action.errmess,
        accessToken: null,
        refreshToken: null,
        isLoading: false,
      };

    case ActionTypes.REGISTER_REQUEST:
      return { ...state, errmess: null, isLoading: true };

    case ActionTypes.REGISTER_SUCCESS:
      return { ...state, errmess: null, isLoading: false };

    case ActionTypes.REGISTER_FAILED:
      return { ...state, errmess: action.errmess, isLoading: false };

    default:
      return state;
  }
};

export default authReducer;
