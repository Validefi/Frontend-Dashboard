import axios from '../axios';
import * as ActionTypes from '../ActionTypes';
import { url } from '../urls';

export const toggleSidebar = (isSidebarVisible) => {
  return {
    type: ActionTypes.TOGGLE_SIDEBAR,
    isSidebarVisible: isSidebarVisible,
  };
};
