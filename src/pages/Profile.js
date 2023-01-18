import React, { useEffect } from 'react';
import MyAds from '../components/myads/MyAds';

import { useMainContext } from '../contexts/MainProvider';
const Profile = () => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='profile'>
      <MyAds />
    </div>
  );
};

export default Profile;
