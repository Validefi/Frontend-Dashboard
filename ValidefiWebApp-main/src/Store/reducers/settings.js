import * as ActionTypes from '../ActionTypes';

const initState = {
  isSidebarVisible: true,
  mode: 'light',
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarVisible: action.isSidebarVisible,
      };

    case ActionTypes.TOGGLE_THEME_MODE:
      return {
        ...state,
        mode: action.mode,
      };

    default:
      return state;
  }
};

export default settingsReducer;
