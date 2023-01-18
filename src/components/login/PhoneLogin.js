import React from 'react';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
const PhoneLogin = () => {
  const [toggleLogin, setToggleLogin] = useState('');

  return (
    <div className='phone-login  '>
      {!toggleLogin && (
        <>
          <div className='d-flex flex-column gap-2 align-items-center'>
            <button
              className='btn btn-dark fw-bold text-white'
              onClick={() => setToggleLogin('login')}
            >
              تسجيل الدخول
            </button>
            <button
              className='btn btn-secondary fw-bold text-white'
              onClick={() => setToggleLogin('register')}
            >
              تسجيل حساب
            </button>
          </div>
        </>
      )}
      {toggleLogin && toggleLogin == 'login' && <SignIn />}
      {toggleLogin && toggleLogin == 'register' && <SignUp />}
    </div>
  );
};

export default PhoneLogin;
