import React, { createContext, useContext, useReducer } from 'react';
import { MainReducer } from '../reducers/MainReducer';
import { category_url } from '../utils/constants';
import {
  OPEN_SUBMENU,
  CLOSE_SUBMENU,
  DETECT_NAVBAR,
  DETECT_FILTER,
  GET_CATEGORIES,
} from '../actions';
import { useEffect } from 'react';
import axios from 'axios';
const MainContext = createContext();

const initallState = {
  navbarStatus: false,
  filterStatus: false,
  sublinks: [],
  allCats: [],
  isSubmenuOpen: false,
  page: { page: '', links: [] },
  location: [],
};

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initallState);

  const openSubmenu = (text, coordinates) => {
    dispatch({
      type: OPEN_SUBMENU,
      payload1: text,
      payload2: coordinates,
      payload3: state.sublinks,
    });
  };
  const closeSubmenu = () => {
    dispatch({
      type: CLOSE_SUBMENU,
    });
  };

  // Navbar
  const toggleNavbarFunc = (val) => {
    dispatch({ type: DETECT_NAVBAR, payload: val });
  };

  // Filters
  const toggleFilterFunc = (val) => {
    dispatch({ type: DETECT_FILTER, payload: val });
  };
  // fetch navbar data and submenu
  const fetchNavbar = async (url) => {
    try {
      const response = await axios(url);
      const categories = response.data.data;
      dispatch({ type: GET_CATEGORIES, payload: categories });
    } catch (error) {
      console.log(error);
    }
  };
  // useeffect
  useEffect(() => {
    fetchNavbar(category_url);
  }, []);
  return (
    <MainContext.Provider
      value={{
        ...state,
        openSubmenu,
        closeSubmenu,
        toggleNavbarFunc,
        toggleFilterFunc,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export const useMainContext = () => {
  return useContext(MainContext);
};

export default MainProvider;
