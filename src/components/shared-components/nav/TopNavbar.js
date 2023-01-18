import React from 'react';
import { useMainContext } from '../../../contexts/MainProvider';
import LocationDropwon from './LocationDropwon';
import SearchInput from './SearchInput';
import { FaBars } from 'react-icons/fa';
import Signed from './Signed';
import NotSigned from './NotSigned';
import { useUserContext } from '../../../contexts/UserProvider';
import ads from '../../../assets/ICONs/ads.png';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  const { closeSubmenu, toggleNavbarFunc } = useMainContext();
  const { token } = useUserContext();
  return (
    <section
      className='top-navbar py-3 bg-white fixed'
      onMouseOver={closeSubmenu}
    >
      {/* Start Destop */}
      <div className='d-none d-lg-block'>
        <div className='row '>
          <div className='col-lg-2'>
            <Link to='/' className='pointer '>
              <img src={ads} alt='logo' className=' w-100 logo' />
            </Link>
          </div>
          {/* Location DropDown */}
          <div className=' col-lg-3'>
            <LocationDropwon />
          </div>
          {/* Search */}
          <div className=' col-lg-4'>
            <SearchInput />
          </div>
          <div className=' col-lg-3'>
            {token && <Signed />}
            {!token && <NotSigned />}
          </div>
        </div>
      </div>
      {/* End Destop */}

      {/* Start Tablet And Phones */}
      <div className='d-block d-lg-none'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='logo w-25'>
            <Link to='/' className='pointer '>
              <img src={ads} alt='logo' className=' w-100 logo' />
            </Link>
          </div>
          <div className='bar mx-3 pointer text-primary'>
            <FaBars onClick={() => toggleNavbarFunc(true)} />
          </div>
        </div>
        <div className='mt-3 mx-3'>
          <SearchInput />
        </div>
      </div>
      {/* Start Tablet And Phones */}
    </section>
  );
};

export default TopNavbar;
