import React, { useEffect } from 'react';
import twitter from '../../assets/ICONs/twitter.png';
import smartphone from '../../assets/ICONs/smartphone.png';
import facebook from '../../assets/ICONs/facebook.png';
import { auth, db, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useUserContext } from '../../contexts/UserProvider';

const OtherMethods = ({ setShowPhone }) => {
  const { handleTokenRequest } = useUserContext();
  const handleClick = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      //create user on firestore
      const user = await getDoc(doc(db, 'users', res.user.uid));
      if (!user.exists()) {
        await setDoc(doc(db, 'users', res.user.uid), {
          uid: res.user.uid,
          displayName: res.user.displayName,
        });

        //create empty user chats on firestore
        await setDoc(doc(db, 'userChats', res.user.uid), {});
      }
      handleTokenRequest(res.user.uid);
      localStorage.setItem('login', JSON.stringify({ token: res.user.uid }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h5 className='text-white text-center'>مرحبا بكم في أدساب</h5>

      <div className='box d-flex align-items-center justify-content-center text-primary bg-white rounded-pill mx-auto mt-3 pointer w-50 py-2'>
        <h6 onClick={handleClick}>تسجيل الحساب بواسطة جوجل</h6>
      </div>
      <div className='box d-flex align-items-center justify-content-center text-primary bg-white rounded-pill mx-auto mt-3 pointer w-50 py-2'>
        <img src={facebook} alt='facebook' className='navbar-icon ms-2 ' />
        <h6>تابع بايميل فيسبوك</h6>
      </div>
      <div className='box d-flex align-items-center justify-content-center text-primary bg-white rounded-pill mx-auto mt-3 pointer w-50 py-2'>
        <img src={twitter} alt='twitter' className='navbar-icon ms-2 ' />
        <h6>تابع بايميل تويتر</h6>
      </div>
      <div
        className='box d-flex align-items-center justify-content-center text-primary bg-white rounded-pill mx-auto mt-3 pointer w-50 py-2'
        onClick={() => setShowPhone(true)}
      >
        <img src={smartphone} alt='smartphone' className='navbar-icon ms-2 ' />
        <h6>تابع برقم التليفون</h6>
      </div>
    </>
  );
};

export default OtherMethods;
