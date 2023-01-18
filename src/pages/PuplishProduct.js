import React, { useEffect } from 'react';
import Puplish from '../components/puplish-product/Puplish';

import { useMainContext } from '../contexts/MainProvider';
const PuplishProduct = () => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='puplish-product'>
      <Puplish />
    </div>
  );
};

export default PuplishProduct;
