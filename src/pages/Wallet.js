import React, { useEffect } from 'react';

import WalletCom from '../components/wallet/WalletCom';
import { useMainContext } from '../contexts/MainProvider';
const Wallet = () => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='wallet'>
      <WalletCom />
    </div>
  );
};

export default Wallet;
