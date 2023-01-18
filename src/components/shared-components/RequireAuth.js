import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import Navbar from './nav/Navbar';
import TopNavbar from './nav/TopNavbar';
import Submenu from './Submenu';
import { useMainContext } from '../../contexts/MainProvider';
import RespnsiveNavbar from './nav/RespnsiveNavbar';
import ResponsiveFilter from '../filter-ads/ResponsiveFilter';
import { useUserContext } from '../../contexts/UserProvider';
const RequireAuth = () => {
  const { closeSubmenu, navbarStatus, filterStatus } = useMainContext();
  const { token } = useUserContext();
  const location = useLocation();
  return (
    <>
      {token ? (
        <>
          {navbarStatus && <RespnsiveNavbar />}
          {filterStatus && <ResponsiveFilter />}
          <TopNavbar />
          <Navbar />
          <Submenu />
          <div onMouseOver={closeSubmenu}>
            <Outlet />
          </div>
        </>
      ) : (
        <Navigate to='/' state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
