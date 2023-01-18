import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import heart from '../../assets/ICONs/heart.png';
import flag from '../../assets/ICONs/flag.png';
import share from '../../assets/ICONs/share.png';
const DropdownLeft = () => {
  const handleChange = (e) => {
    const f = e.target.value;
    console.log(f);
  };
  return (
    <div className='dropstart '>
      <BsThreeDotsVertical
        className='pointer dropdown-toggle removearrow '
        data-bs-toggle='dropdown'
      />
      <div
        className='dropdown-menu border-secondary mx-3'
        style={{ width: '300px' }}
      >
        <div className='py-1 w-100'>
          <div>
            <label
              htmlFor='fav'
              className='form-label d-flex justify-content-between pointer border-bottom border-secondary pb-2 w-100 align-items-center px-2'
            >
              <span className='text-end fw-bold fs-6'>
                اضف الاعلان الي المفضلة
              </span>
              <img src={heart} alt='heart' className='heart' />
            </label>
            <input
              type='email'
              className='form-control'
              id='fav'
              style={{ display: 'none' }}
              defaultValue='fav'
              onClick={handleChange}
              name='fav'
            />
            <label
              htmlFor='share'
              className='form-label d-flex justify-content-between pointer border-bottom border-secondary pb-2 w-100 align-items-center px-2'
            >
              <span className='text-end fw-bold fs-6'>مشاركة</span>
              <img src={share} alt='share' className='heart' />
            </label>
            <input
              type='email'
              className='form-control'
              id='share'
              style={{ display: 'none' }}
              defaultValue='share'
              onClick={handleChange}
              name='share'
            />
            <label
              htmlFor='inform'
              className='form-label d-flex justify-content-between pointer  w-100 align-items-center px-2'
            >
              <span className='text-end fw-bold fs-6'>
                الإبلاغ عن هذا الإعلان
              </span>
              <img src={flag} alt='flag' className='heart' />
            </label>
            <input
              type='email'
              className='form-control'
              id='inform'
              style={{ display: 'none' }}
              defaultValue='inform'
              onClick={handleChange}
              name='inform'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownLeft;
