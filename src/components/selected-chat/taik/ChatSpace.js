import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import person3 from '../../../assets/imgs/person3.png';
import { useUserCalledContext } from '../../../contexts/CalledUserProvider';
import { useUserContext } from '../../../contexts/UserProvider';
import { db } from '../../../firebase';

const ChatSpace = () => {
  const [messages, setMessages] = useState([]);
  const { chatId } = useUserCalledContext();
  const { userInfo } = useUserContext();
  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <div className='d-flex flex-column gap-2 overflow-auto py-2'>
      {messages.map((m) => {
        // console.log(m.senderId + ' ' + userInfo.uid);
        return (
          <>
            {userInfo.uid == m.senderId ? (
              <div
                className='d-flex align-items-center gap-3 justify-content-start client-chat'
                ref={ref}
              >
                {m.text && (
                  <div className='message bg-light py-3 px-2 rounded d-flex '>
                    <p className='text-primary m-0 p-0 fs-6 fw-bold px-2'>
                      {m.text}
                    </p>
                  </div>
                )}
                {m.img && (
                  <div className='message bg-light py-3 px-2 rounded d-flex '>
                    <img src={m.img} className='avatar'></img>
                  </div>
                )}
              </div>
            ) : (
              <div
                className='d-flex align-items-center gap-3 justify-content-end team-chat'
                ref={ref}
              >
                {m.text && (
                  <div className='message bg-light py-3 px-2 rounded d-flex '>
                    <p className='text-primary m-0 p-0 fs-6 fw-bold px-2'>
                      {m.text}
                    </p>
                  </div>
                )}
                {m.img && (
                  <div className='message bg-light py-3 px-2 rounded d-flex '>
                    <img src={m.img} className='avatar'></img>
                  </div>
                )}
              </div>
            )}
          </>
        );
      })}
      {/* Your Message */}
    </div>
  );
};

export default ChatSpace;
