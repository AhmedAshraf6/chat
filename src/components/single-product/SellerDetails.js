import React, { useRef } from 'react';
import w from '../../assets/ICONs/w.png';
import whitearrowleft from '../../assets/ICONs/whitearrowleft.png';
import phone from '../../assets/ICONs/phone.png';
import personimg from '../../assets/imgs/person.png';
import { Link } from 'react-router-dom';
import { image_url } from '../../utils/constants';
import { useState } from 'react';
import SellerDetails2 from './SellerDetails2';

const SellerDetails = ({ title, price, location, created_at }) => {
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
  return (
    <div className='seller-details'>
      <div className='box bg-primary py-4 px-3 text-white rounded'>
        <div className='d-flex flex-column flex-sm-row justify-content-between'>
          <h4 className='fw-bold'>{title && title}</h4>
          <h4 className='text-secondary'>
            <span>{price && price}</span>
            <span className='mx-2'>L.E</span>
          </h4>
          <img src={w} alt='w' className='icon' />
        </div>
        <div className='d-flex flex-column flex-sm-row justify-content-between mt-3 mt-sm-5'>
          <h6 className='fw-light'>{location && location}</h6>
          <h6 className='fw-light'>100 مشاهدة</h6>
          <h6 className='fw-light'>منذ {created_at && created_at}</h6>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
