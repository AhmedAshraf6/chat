import React, { useEffect } from 'react';
import AllChats from '../components/chat/AllChats';
import chat from '../assets/ICONs/chat/chat.png';
import { useMainContext } from '../contexts/MainProvider';
import { useUserContext } from '../contexts/UserProvider';
const Chat = () => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  const { token } = useUserContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {token && (
        <div className='chat mt-3 mx-3  '>
          <div className='row gy-2'>
            <div className='col-lg-5'>
              <AllChats />
            </div>
            <div className='col-lg-7 '>
              <div className=' bg-primary rounded choose-chat d-flex justify-content-center align-items-center'>
                <div>
                  <img src={chat} alt='chat' className='chat-image ' />
                  <h5 className='text-center text-white fw-bold mt-3'>
                    اختر محادثة لعرضها
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
