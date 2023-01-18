import React from 'react';
import { Link } from 'react-router-dom';
import test from '../../assets/imgs/test.png';
import person from '../../assets/imgs/person.png';
import heart from '../../assets/ICONs/heart.png';
import view from '../../assets/ICONs/view.png';
import pin from '../../assets/ICONs/pin.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
const Ad = () => {
  return (
    <div className='col-xl-4 col-sm-6'>
      <div className='card position-relative'>
        <Link
          className='img bg-secondary w-100 h-50 text-center'
          to='/singleproduct/7'
        >
          <img src={test} className='card-img-top w-50 h-50 ' alt='img1' />
        </Link>
        {/* start card */}
        <div className='card-body d-flex align-items-center '>
          <div className='d-flex flex-column '>
            <img
              src={person}
              alt='person'
              className='rounded-circle small-img'
            />
            <span>زياد فؤاد</span>
          </div>
          <div className='w-100 me-2'>
            <div className='d-flex justify-content-between align-items-start w-100'>
              <h6>جاكيت رجالي</h6>
              <h6 className='text-secondary'>1000le</h6>
              <BsThreeDotsVertical className='pointer' />
            </div>
            <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
              <span className='text-primary info ms-2'>
                <img
                  src={pin}
                  alt='pination'
                  className='very-small-icon ms-1'
                />
                اسكندرية ،مصر
              </span>
              <span className='text-primary info'>
                <img src={view} alt='view' className='very-small-icon ms-1' />
                100 مشاهدة
              </span>
            </div>
          </div>
        </div>
        <img
          src={heart}
          alt='heart'
          className='position-absolute heart pointer'
        />
        <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
      </div>

      {/* end card */}
    </div>
  );
};

export default Ad;
