import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import person from '../../../assets/imgs/person.png';
import person2 from '../../../assets/imgs/person2.png';
import add from '../../../assets/ICONs/add.png';
import bellRing from '../../../assets/ICONs/bellring.png';
import chat from '../../../assets/ICONs/chat.png';
import share from '../../../assets/ICONs/share.png';
import debitcard from '../../../assets/ICONs/debitcard.png';
import resume from '../../../assets/ICONs/resume.png';
import blogger from '../../../assets/ICONs/blogger.png';
import w from '../../../assets/ICONs/w.png';
import setting from '../../../assets/ICONs/setting.png';
import help from '../../../assets/ICONs/help.png';
import logout from '../../../assets/ICONs/logout.png';

import { useUserContext } from '../../../contexts/UserProvider';
import { image_url } from '../../../utils/constants';
const Signed = () => {
  const { handleLogout } = useUserContext();

  return (
    <div className='login d-flex align-items-center'>
      <Link to='/chat'>
        <img
          src={chat}
          alt=''
          className='me-xl-3 me-lg-2 pointer navbar-icon'
        />
      </Link>
      {/* Bellring Dropdown */}
      <div className='dropdown me-xl-3 me-lg-2 '>
        <button
          className='border-0 bg-transparent dropdown-toggle removearrow'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <img
            src={bellRing}
            alt=''
            className='fs-3 me-3 pointer navbar-icon'
          />
        </button>
        <ul className='dropdown-menu bill bg-primary text-white '>
          <li className='py-2'>
            <h5 className='text-end mx-3'>الإشعارات</h5>
          </li>

          <li className='color-in-background  my-2 borderd'>
            <a className='dropdown-item' href='#'>
              <div className='d-flex'>
                {/* <img
                  src={`${image_url}${image}`}
                  className='rounded-circle ms-2 image'
                  alt=''
                /> */}
                <div className='d-flex flex-column text-primary'>
                  <span className='text-end text-wrap fs-6 fw-bold'>
                    زياد فؤاد
                  </span>
                  <span className='fw-bold'>
                    تمت رؤية المنشور من قبل ذياد فؤاد
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li className='bg-light my-2 borderd'>
            <a className='dropdown-item' href='#'>
              <div className='d-flex'>
                <img
                  src={person}
                  className='rounded-circle ms-2 image'
                  alt=''
                />
                <div className='d-flex flex-column text-primary'>
                  <span className='text-end text-wrap fs-6 fw-bold'>
                    زياد فؤاد
                  </span>
                  <span className='fw-bold'>
                    تمت رؤية المنشور من قبل ذياد فؤاد
                  </span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <Link to='/sell'>
        <img
          src={add}
          alt='add'
          className='fs-3 me-xl-3 me-lg-2 pointer navbar-icon'
        />
      </Link>
      {/* Profile Dropdown */}
      <div className='dropdown me-xl-3 me-lg-2'>
        <button
          className='border-0 bg-transparent dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          {/* <img
            src={`${image_url}${image}`}
            alt='person'
            className=' navbar-icon rounded-circle'
            aria-expanded='false'
          /> */}
        </button>
        <ul className='dropdown-menu bg-primary text-white '>
          <li className='border-bottom pb-3 dropdown-item'>
            <div className='d-flex'>
              {/* <img
                src={`${image_url}${image}`}
                className='rounded-circle ms-2 image'
                alt='image'
              /> */}
              <div className='d-flex flex-column'>
                <span className='text-end'>أهلا</span>
              </div>
            </div>
          </li>
          {/*  text-decoration-none */}
          <li className='border-bottom pb-3'>
            <Link
              className='link d-flex align-items-center mx-3 mt-3 pointer'
              to='/profile/wallet'
            >
              <img src={debitcard} alt='debitcard' className='navbar-icon' />
              <h5 className='me-4'>محفظة أدس</h5>
            </Link>
            <Link
              className='link d-flex align-items-center mx-3 mt-3 pointer'
              to='/profile/editprofile'
            >
              <img src={resume} alt='' className='navbar-icon' />
              <h5 className='me-4'> تعديل الملف الشخصي</h5>
            </Link>
            <Link
              className='link d-flex align-items-center mx-3 mt-3 pointer'
              to='/profile/myads'
            >
              <img src={blogger} alt='' className='navbar-icon' />
              <h5 className='me-4'>إعلاناتي</h5>
            </Link>
          </li>
          <li className='border-bottom pb-3 '>
            <div className='link d-flex align-items-center mx-3 mt-3 pointer'>
              <img src={w} alt='' className='navbar-icon' />
              <h5 className='me-4'>شارك أدس واكسب فلوس</h5>
            </div>
            <Link
              className='link d-flex align-items-center mx-3 mt-3 pointer'
              to='/help'
            >
              <img src={help} alt='' className='navbar-icon' />
              <h5 className='me-4'>المساعدة</h5>
            </Link>
            <Link
              className='link d-flex align-items-center mx-3 mt-3 pointer'
              to='/profile/settings'
            >
              <img src={setting} alt='settings' className='navbar-icon' />
              <h5 className='me-4'> الإعدادات</h5>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <div className='link d-flex align-items-center mx-3 mt-3 pointer pb-3'>
              <img src={logout} alt='' className='navbar-icon' />
              <h5 className='me-4'>تسجيل الخروج</h5>
            </div>
          </li>
        </ul>
      </div>
      <img
        src={share}
        alt=''
        className='fs-3 me-xl-3 me-lg-2 pointer navbar-icon'
      />
    </div>
  );
};

export default Signed;
