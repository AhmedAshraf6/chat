import axios from 'axios';
import React, { useContext, useEffect, useReducer, createContext } from 'react';
import AdsReducer from '../reducers/AdsReducer';
import { allAdsUrl } from '../utils/constants';
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const initialState = {
  allAdsError: false,
  allAds: [],
  singleAderror: false,
  singleAd: {},
};

const AdsContext = createContext();

export const AdsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdsReducer, initialState);

  const fetchAllAds = async (allAdsUrl) => {
    try {
      const response = await axios.get(allAdsUrl);
      const allads = response.data.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: allads });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleAd = async (url) => {
    try {
      const response = await axios(url);
      const singleProduct = response.data.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchAllAds(allAdsUrl);
  }, []);

  return (
    <AdsContext.Provider value={{ ...state, fetchSingleAd }}>
      {children}
    </AdsContext.Provider>
  );
};
// make sure use
export const useAdsContext = () => {
  return useContext(AdsContext);
};
