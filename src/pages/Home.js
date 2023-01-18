import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import HomeAds from '../components/home/HomeAds';
import Footer from '../components/shared-components/Footer';

import { useMainContext } from '../contexts/MainProvider';
import { useUserContext } from '../contexts/UserProvider';
const Home = () => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  const { handleCountryId } = useUserContext();
  const api_endpoint = 'http://api.geonames.org/countryCodeJSON?';

  const fetchLang = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const response = await axios(
          `${api_endpoint}lat=${position.coords.latitude}&lng=${position.coords.longitude}&username=ahmedax12`
        );
        handleCountryId(response.data.countryName);
      } catch (error) {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
    fetchLang();
  }, []);
  return (
    <div className='home'>
      <HomeAds />
      <Footer />
    </div>
  );
};
export default Home;
