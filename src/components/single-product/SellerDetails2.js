import React from 'react';
import w from '../../assets/ICONs/w.png';
import whitearrowleft from '../../assets/ICONs/whitearrowleft.png';
import phone from '../../assets/ICONs/phone.png';
import personimg from '../../assets/imgs/person.png';
import { Link } from 'react-router-dom';
import { image_url } from '../../utils/constants';
import { useState, useRef } from 'react';
const SellerDetails2 = ({ name, image, created_at, phone: phone_num }) => {
  const [showNum, setShowNum] = useState(false);
  const hiddenNum = useRef(null);
  const handleShowNumber = (s) => {
    if (s == true) {
      setShowNum(true);
      hiddenNum.current.type = 'text';
    } else {
      setShowNum(false);
      hiddenNum.current.type = 'password';
    }
  };
  console.log(name, image);
  return (
    <div className='box bg-primary py-4 px-3 text-white mt-3 rounded'>
      <div className='d-flex justify-content-start'>
        <h4 className='fw-bold'>وصف البائع</h4>
      </div>

      <div className='d-flex  justify-content-between mt-4 '>
        <div className='d-flex flex-column flex-sm-row justify-content-start'>
          <img
            src={`${image_url}${image}`}
            alt='icon'
            className='avatar rounded-circle'
          />
          <div className='mx-0 mt-2 mt-sm-0 mx-sm-3'>
            <h5 className='fw-bold'>{name}</h5>
            <h6>
              <span> عضو منذ </span>
              <span className='fw-lighter'>{created_at}</span>
            </h6>
            <div className='d-flex flex-column flex-sm-row align-items-center mt-3'>
              <img src={phone} alt='phone' className='icon' />
              {/* <span className='fs-3 fw-bold me-0 me-sm-3'>.. .... ....</span> */}
              <input
                type='password'
                className='hidden-num fs-5 w-50 border-0 bg-transparent shadow-none mx-2'
                value={phone_num}
                ref={hiddenNum}
              />
              {!showNum && (
                <h4
                  className='show-num text-decoration-underline pointer'
                  onClick={() => handleShowNumber(true)}
                >
                  اظهار الرقم
                </h4>
              )}
              {showNum && (
                <h4
                  className='show-num text-decoration-underline pointer'
                  onClick={() => handleShowNumber(false)}
                >
                  اخفاء الرقم
                </h4>
              )}
            </div>
          </div>
        </div>
        <Link className='text-decoration-none ' to='/seller/21'>
          <img
            src={whitearrowleft}
            alt='whitearrowleft '
            className='align-self-center'
          />
        </Link>
      </div>

      <div className='d-flex justify-content-center mt-3 '>
        <Link
          className='btn btn-secondary text-white fs-5 text-decoration-none'
          to='/chat/user/a'
        >
          تواصل مع البائع
        </Link>
      </div>
    </div>
  );
};

export default SellerDetails2;
