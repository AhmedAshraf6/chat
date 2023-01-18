import axios from 'axios';
import React, { useContext, createContext, useReducer } from 'react';
import { country_id_url, fav_ad_url } from '../utils/constants';
import { COUNTRY_CODE, FAV_ADS_CHANGE, SET_TOKEN } from '../actions';
import { USER_LOGOUT } from '../actions';
import { USER_WALLET } from '../actions';
import { USER_INFO } from '../actions';
import { logout_url } from '../utils/constants';
import { wallet_url } from '../utils/constants';
import { user_info_url } from '../utils/constants';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import reducer from '../reducers/userReducer';
import { useEffect } from 'react';
const initialState = {
  token: '',
  wallet: {},
  userInfo: {},
  favAdsChange: false,
  countryId: '',
  countryName: '',
};
const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleTokenRequest = (token) => {
    dispatch({ type: SET_TOKEN, payload: token });
  };
  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem('login'));
    if (localToken) {
      handleTokenRequest(localToken.token);
    }
  }, []);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: USER_INFO, payload: user });

      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);
  // Handle Favourite Ad
  const handleFavouriteAd = async (ad_id) => {
    try {
      const response = await axios.post(
        fav_ad_url,
        JSON.stringify({ ad_id: ad_id }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      dispatch({ type: FAV_ADS_CHANGE });
    } catch (error) {
      console.log(error);
    }
  };
  // HandleLogout
  const handleLogout = async () => {
    signOut(auth);
    dispatch({ type: USER_LOGOUT });
    // try {
    //   const response = await axios(logout_url, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${state.token}`,
    //     },
    //   });
    //   dispatch({ type: USER_LOGOUT, payload: response.data.success });
    // } catch (error) {
    //   console.log('error');
    // }
  };

  // HandleWallet
  const handleWallet = async () => {
    try {
      const response = await axios(wallet_url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({ type: USER_WALLET, payload: response.data.data });
    } catch (error) {
      console.log('error');
    }
  };

  // Handle User Info
  const HandleUserInfo = async () => {
    try {
      const response = await axios(user_info_url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({ type: USER_INFO, payload: response.data });
    } catch (error) {
      console.log('error');
    }
  };

  // Handle country Id Of User
  const handleCountryId = async (cn) => {
    try {
      const response = await axios(`${country_id_url}${cn}`);
      dispatch({
        type: COUNTRY_CODE,
        payload: response.data.data.id,
        payload2: cn,
      });
      // console.log();
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    if (state.token) {
      HandleUserInfo();
    }
  }, [state.token]);
  return (
    <userContext.Provider
      value={{
        ...state,
        handleTokenRequest,
        handleFavouriteAd,
        handleLogout,
        handleWallet,
        HandleUserInfo,
        handleCountryId,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(userContext);
};
