import React, { useEffect } from 'react';
import MySettings from '../components/settings/MySettings';
import { useMainContext } from '../contexts/MainProvider';
const Settings = () => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='settings'>
      <MySettings />
    </div>
  );
};

export default Settings;
