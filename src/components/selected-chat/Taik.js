import React from 'react';
import upload from '../../assets/ICONs/chat/upload.png';
import send from '../../assets/ICONs/chat/send.png';
import attach from '../../assets/ICONs/chat/attach.png';
import image from '../../assets/ICONs/chat/image.png';
import loc from '../../assets/ICONs/chat/loc.png';
import ChatSpace from './taik/ChatSpace';
import { useState } from 'react';
import { useUserCalledContext } from '../../contexts/CalledUserProvider';
import { useUserContext } from '../../contexts/UserProvider';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { v4 as uuid } from 'uuid';

const Taik = () => {
  const [text, setText] = useState('');
  const { chatId, userCalled } = useUserCalledContext();
  const { userInfo } = useUserContext();
  // console.log(img);
  const handleSubmit = async () => {
    if (text) {
      await updateDoc(doc(db, 'chats', chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: userInfo.uid,
          date: Timestamp.now(),
        }),
      });

      await updateDoc(doc(db, 'userChats', userInfo.uid), {
        [chatId + '.lastMessage']: {
          text,
        },
        [chatId + '.date']: serverTimestamp(),
      });

      await updateDoc(doc(db, 'userChats', userCalled.uid), {
        [chatId + '.lastMessage']: {
          text,
        },
        [chatId + '.date']: serverTimestamp(),
      });
      setText('');
    }
  };
  const handleChangeImage = async (img) => {
    const storageRef = ref(storage, uuid());

    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      (error) => {
        //TODO:Handle Error
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db, 'chats', chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: userInfo.uid,
              date: Timestamp.now(),
              img: downloadURL,
            }),
          });
        });
      }
    );
  };
  const handleKey = (e) => {
    e.code === 'Enter' && handleSubmit();
  };
  // console.log(userCalled);
  return (
    <div className='overflow-auto'>
      <ChatSpace />
      <div className='taik d-flex justify-content-between align-items-center bg-light rounded mx-1 text-primary py-2 px-3'>
        <div className='removed-input'>
          <label htmlFor='file-input' className='pointer'>
            <img src={upload} alt='upload' className='icon' />
          </label>
          <input
            id='file-input'
            type='file'
            onChange={(e) => handleChangeImage(e.target.files[0])}
            accept='image/*'
          />
        </div>

        <input
          type='text'
          className='message w-100 mx-2 h-100 border-0 outline-0'
          placeholder='اكتب رسالة'
          value={text}
          onKeyDown={handleKey}
          onChange={(e) => setText(e.target.value)}
        />
        <span onClick={handleSubmit}>
          <img src={send} alt='send' className='icon' />
        </span>
      </div>
    </div>
  );
};

export default Taik;
