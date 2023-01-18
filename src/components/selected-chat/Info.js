import React from 'react';
import person3 from '../../assets/imgs/person3.png';
import test from '../../assets/imgs/test.png';
import phone from '../../assets/ICONs/chat/phone.png';
import whatts from '../../assets/ICONs/chat/whatts.png';
import leftarrow from '../../assets/ICONs/leftarrow.png';
import { Link } from 'react-router-dom';
import { useUserCalledContext } from '../../contexts/CalledUserProvider';

const Info = () => {
  const { userCalled } = useUserCalledContext();
  // console.log(userCalled.displayName);
  return (
    <div className='info'>
      <div className='seller-info text-decoration-none bg-light rounded mx-1 text-primary d-flex justify-content-between  align-items-start align-items-sm-center flex-column flex-sm-row gap-2 py-2 mt-2'>
        <div className='d-flex align-items-center'>
          {/* <img
            src={person3}
            alt='person'
            className='seller-avatar rounded-circle mx-2'
          /> */}
          <div className='mx-3'>
            <h4>{userCalled.displayName}</h4>
            {/* <span className='fs-6'>نشظ منذ 5 دقائق</span> */}
          </div>
        </div>
        {/* <div className='d-flex'>
          <img src={phone} alt='phone' className='icon mx-2' />
          <img src={whatts} alt='whatts' className='icon mx-2' />
        </div> */}
      </div>
      {/* <div className='product-info mt-2 text-decoration-none'>
        <Link
          className='seller-info text-decoration-none bg-light rounded mx-1 text-primary d-flex justify-content-between align-items-start align-items-sm-center flex-column flex-sm-row py-2 mt-2'
          to='/singleproduct/a'
        >
          <div className='d-flex align-items-center'>
            <div className='bg-primary py-2 px-4 mx-2'>
              <img
                src={test}
                alt='test'
                className='product-avatar text-center '
              />
            </div>
            <div className='mx-3'>
              <h4 className='fw-bold'>جاكيت رجالي</h4>
              <h4 className='text-secondary fw-bold'>
                <span className='mx-1'>100</span>
                <span>L.E</span>
              </h4>
            </div>
          </div>
          <div>
            <img src={leftarrow} alt='leftarrow' className='icon mx-2' />
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Info;
