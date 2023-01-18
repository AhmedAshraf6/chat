import React, { useState } from 'react';
import OtherMethods from './OtherMethods';
import PhoneLogin from './PhoneLogin';
import rightwhar from '../../assets/ICONs/rightwhar.png';
import { useMainContext } from '../../contexts/MainProvider';

const Login = () => {
  const [showPhone, setShowPhone] = useState(false);
  const { toggleNavbarFunc } = useMainContext();

  return (
    <div className='login'>
      {/* Sign In */}
      <button
        type='button'
        className='btn btn-primary text-nowrap'
        data-bs-toggle='modal'
        data-bs-target='#login'
      >
        تسجيل الدخول
      </button>
      {/* Modal */}
      <div
        className='modal fade'
        id='login'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content bg-primary text-white '>
            <div
              className={
                showPhone
                  ? 'd-flex justify-content-between align-items-center mx-2 mt-2'
                  : 'd-flex justify-content-end align-items-center mx-2 mt-2'
              }
            >
              {showPhone && (
                <img
                  src={rightwhar}
                  alt='rightwhar '
                  className='icon pointer'
                  onClick={() => setShowPhone(false)}
                />
              )}
              <button
                type='button'
                data-bs-dismiss='modal'
                className='btn-close btn-close-white '
              ></button>
            </div>
            <div className='modal-body w-100'>
              {/* Login */}
              {!showPhone && <OtherMethods setShowPhone={setShowPhone} />}
              {showPhone && <PhoneLogin />}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {/* Sign In */}
    </div>
  );
};

export default Login;
