import { COUNTRY_CODE, FAV_ADS_CHANGE, SET_TOKEN, USER_INFO } from '../actions';
import { USER_LOGOUT } from '../actions';
import { USER_WALLET } from '../actions';
const userReducer = (state, action) => {
  if (action.type === SET_TOKEN) {
    return { ...state, token: action.payload };
  }
  if (action.type === USER_LOGOUT) {
    localStorage.removeItem('login');
    return { ...state, token: '' };
  }
  if (action.type === USER_WALLET) {
    return { ...state, wallet: action.payload };
  }
  if (action.type === USER_INFO) {
    return { ...state, userInfo: action.payload };
  }
  if (action.type === FAV_ADS_CHANGE) {
    return { ...state, favAdsChange: !state.favAdsChange };
  }
  if (action.type === COUNTRY_CODE) {
    return {
      ...state,
      countryId: action.payload,
      countryName: action.payload2,
    };
  }
  return state;
};
export default userReducer;
