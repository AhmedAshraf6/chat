import React, { useEffect } from 'react';
import SelectProduct from '../components/sell/SelectProduct';

import { useMainContext } from '../contexts/MainProvider';
const Sell = () => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='sell'>
      <SelectProduct />
      {/* <PuplishProduct /> */}
    </div>
  );
};

export default Sell;
