import * as ActionTypes from '../ActionTypes';

const initState = {
  isAuthenticated: false,
  isLoading: false,
  errmess: null,
  wallet_address: null,
  isEthereum: true,
  chainId: null,
  networkId: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
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

    case ActionTypes.SET_CHAIN_ID:
      return {
        ...state,
        chainId: action.chainId,
        isEthereum: action.chainId === '0x1' || action.chainId === 1,
      };

    case ActionTypes.SET_NETWORK_ID:
      return {
        ...state,
        networkId: action.networkId,
        isEthereum: action.networkId === 1,
      };

    default:
      return state;
  }
};

export default authReducer;
