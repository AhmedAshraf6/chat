import React from 'react';
import { NavLink } from 'react-router-dom';
// Icons
import person2 from '../../../assets/imgs/person2.png';
import add from '../../../assets/ICONs/add.png';
import bellRing from '../../../assets/ICONs/bellring.png';
import chat from '../../../assets/ICONs/chat.png';
import debitcard from '../../../assets/ICONs/debitcard.png';
import resume from '../../../assets/ICONs/resume.png';
import blogger from '../../../assets/ICONs/blogger.png';
import w from '../../../assets/ICONs/w.png';
import setting from '../../../assets/ICONs/setting.png';
import help from '../../../assets/ICONs/help.png';
import logout from '../../../assets/ICONs/logout.png';
import { useUserContext } from '../../../contexts/UserProvider';
import { image_url } from '../../../utils/constants';
const ResponNavSigned = () => {
  const {
    handleLogout,
    userInfo: { name, image },
  } = useUserContext();
  return (
    <div className='d-flex flex-column text-white'>
      <div className='profile border-bottom pb-3'>
        {/* Boxes */}
        {/* Box */}
        <div className='d-flex my-3 align-items-center border-bottom pb-3'>
          <img
            src={`${image_url}${image}`}
            className='rounded-circle ms-2 image'
            alt='image'
          />
          <div className='d-flex flex-column '>
            <span>أهلا</span>
            <span>{name}</span>
          </div>
        </div>
        {/* Box */}
        <NavLink
          className='link d-flex align-items-center mx-3 mt-3 pointer'
          to='/profile/wallet'
        >
          <img src={debitcard} alt='debitcard' className='navbar-icon' />
          <h5 className='me-2'>محفظة أدس</h5>
        </NavLink>
        {/* Box */}
        <NavLink
          className='link d-flex align-items-center mx-3 mt-3 pointer'
          to='/profile/editprofile'
        >
          <img src={resume} alt='' className='navbar-icon' />
          <h5 className='me-2'> تعديل الملف الشخصي</h5>
        </NavLink>
        {/* Box */}
        <NavLink
          className='link d-flex align-items-center mx-3 mt-3 pointer'
          to='/profile/myads'
        >
          <img src={blogger} alt='' className='navbar-icon' />
          <h5 className='me-2'>إعلاناتي</h5>
        </NavLink>
        {/* Box */}
        <div className='link d-flex align-items-center mx-3 mt-3 pointer'>
          <img src={w} alt='' className='navbar-icon' />
          <h5 className='me-2'>شارك أدس واكسب فلوس</h5>
        </div>
        {/* Box */}
        <NavLink
          className='link d-flex align-items-center mx-3 mt-3 pointer'
          to='/help'
        >
          <img src={help} alt='' className='navbar-icon' />
          <h5 className='me-2'>المساعدة</h5>
        </NavLink>
        {/* Box */}
        <NavLink
          className='link d-flex align-items-center mx-3 mt-3 pointer'
          to='/profile/settings'
        >
          <img src={setting} alt='settings' className='navbar-icon' />
          <h5 className='me-2'> الإعدادات</h5>
        </NavLink>

        {/* Boxes */}
      </div>
      {/* Add Ads And Chat */}
      <div className='add-and-chat border-bottom pb-3'>
        {/* Box */}
        <NavLink
          to='/sell'
          className='link d-flex align-items-center mx-3 mt-3 pointer'
        >
          <img src={add} alt='add' className='fs-3 pointer navbar-icon' />
          <h5 className='me-2'> إضافة إعلان</h5>
        </NavLink>
        {/* Box */}
        <NavLink
          to='/chat'
          className='link d-flex align-items-center mx-3 mt-3 pointer'
        >
          <img
            src={chat}
            alt=''
            className='me-xl-3 me-lg-2 pointer navbar-icon'
          />
          <h5 className='me-2'> المحادثات</h5>
        </NavLink>
        {/* Box */}
        <NavLink
          to='/chat'
          className='link d-flex align-items-center mx-3 mt-3 pointer'
        >
          <img src={bellRing} alt='' className='fs-3  pointer navbar-icon' />
          <h5 className='me-2'> الإشعارات</h5>
        </NavLink>
      </div>
      {/* Logout */}
      <div
        className='link d-flex align-items-center mx-3 mt-3 pointer'
        onClick={handleLogout}
      >
        <img src={logout} alt='' className='navbar-icon' />
        <h5 className='me-2'>تسجيل الخروج</h5>
      </div>
    </div>
  );
};

export default ResponNavSigned;
