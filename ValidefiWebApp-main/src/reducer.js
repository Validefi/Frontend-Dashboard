export const initialState = {
  walletDetails: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_WALLET_DETAILS":
      return {
        ...state,
        walletDetails: [action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
