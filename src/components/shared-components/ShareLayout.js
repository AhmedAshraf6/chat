import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './nav/Navbar';
import TopNavbar from './nav/TopNavbar';
import Submenu from './Submenu';
import { useMainContext } from '../../contexts/MainProvider';
import RespnsiveNavbar from './nav/RespnsiveNavbar';
import ResponsiveFilter from '../filter-ads/ResponsiveFilter';
const ShareLayout = () => {
  const { closeSubmenu, navbarStatus, filterStatus } = useMainContext();
  return (
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
  );
};

export default ShareLayout;
