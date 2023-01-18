import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdsMember from '../components/seller/AdsMember';
import Member from '../components/seller/Member';
import { useMainContext } from '../contexts/MainProvider';

const Seller = () => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  const { sellerid } = useParams();

  return (
    <div className='seller my-5'>
      <div className='container-luid'>
        <div className='row'>
          <div className='col-lg-3'>
            <Member />
          </div>
          <div className='col-lg-9'>
            <AdsMember />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
