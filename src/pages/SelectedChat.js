import React, { useEffect } from 'react';
import AllChats from '../components/chat/AllChats';
import UserChat from '../components/selected-chat/UserChat';

import { useMainContext } from '../contexts/MainProvider';
const SelectedChat = () => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='selected-chat mt-3 mx-3  '>
      <div className='row gy-2 d-flex flex-column-reverse flex-lg-row'>
        <div className='col-lg-5'>
          <AllChats />
        </div>
        <div className='col-lg-7'>
          <UserChat />
        </div>
      </div>
    </div>
  );
};

export default SelectedChat;
