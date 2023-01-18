import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const AdsReducer = (state, action) => {
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      allAds: action.payload,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, allAdsError: true };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      singleAd: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      singleAdError: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default AdsReducer;
