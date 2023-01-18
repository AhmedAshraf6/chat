import {
  OPEN_SUBMENU,
  CLOSE_SUBMENU,
  DETECT_NAVBAR,
  DETECT_FILTER,
  GET_CATEGORIES,
} from '../actions';

export const MainReducer = (state, action) => {
  if (action.type === DETECT_NAVBAR) {
    return { ...state, navbarStatus: action.payload };
  }
  if (action.type === DETECT_FILTER) {
    return { ...state, filterStatus: action.payload };
  }
  if (action.type === GET_CATEGORIES) {
    const sublinks = action.payload.map((a) => {
      const links = a.rel.map((x) => {
        return { label: x.name_ar };
      });
      return { page: a.name_ar, links };
    });
    return { ...state, sublinks, allCats: action.payload };
  }
  if (action.type === OPEN_SUBMENU) {
    const page = action.payload3.find((link) => link.page === action.payload1);
    return { ...state, page, location: action.payload2, isSubmenuOpen: true };
  }
  if (action.type === CLOSE_SUBMENU) {
    return {
      ...state,
      isSubmenuOpen: false,
    };
  }
  return state;
};
