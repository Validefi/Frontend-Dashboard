import * as ActionTypes from '../ActionTypes';

const initState = {
  isAuthenticated: false,
  isLoading: false,
  errmess: null,
  wallet_address: null,
  network: {
    value: 'Ethereum Mainnet',
    label: 'Ethereum Mainnet',
  },
  chainId: null,
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

    case ActionTypes.SET_WALLET_ADDRESS:
      if (action.address) {
        return {
          ...state,
          wallet_address: action.address,
          isAuthenticated: true,
        };
      }
      return {
        ...state,
        wallet_address: action.address,
        isAuthenticated: false,
      };

    case ActionTypes.SET_NETWORK:
      if (action.network.value && action.network.label) {
        return {
          ...state,
          network: action.network,
        };
      }
      return {
        ...state,
        network: {
          value: 'Ethereum Mainnet',
          label: 'Ethereum Mainnet',
        },
      };
    case ActionTypes.SET_CHAIN_ID:
      return { ...state, chainId: action.chainId };

    default:
      return state;
  }
};

export default authReducer;
