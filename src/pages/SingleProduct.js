import React, { useEffect } from 'react';
import ProductDetails from '../components/single-product/ProductDetails';
import SellerDetails from '../components/single-product/SellerDetails';
import SwiperColors from '../components/single-product/SwiperColors';
import SwiperImages from '../components/single-product/SwiperImages';
import { single_product_url } from '../utils/constants';
import { useMainContext } from '../contexts/MainProvider';
import { useAdsContext } from '../contexts/AdsProvider';
import { useParams } from 'react-router-dom';
import SellerDetails2 from '../components/single-product/SellerDetails2';
const SingleProduct = () => {
  const { adid } = useParams();
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  const { singleAderror, singleAd, fetchSingleAd } = useAdsContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetchSingleAd(`${single_product_url}${adid}`);
  }, [adid]);
  if (singleAderror) {
    return <h3>Error Happened</h3>;
  }
  console.log(singleAd);
  return (
    <div className='single-product my-5 mx-4'>
      <div className='container-fluid'>
        <div className='row gy-3 '>
          <div className='col-lg-6'>
            <SwiperImages {...singleAd} />
            <SwiperColors {...singleAd} />
          </div>
          <div className='col-lg-6'>
            <SellerDetails {...singleAd} />
            <SellerDetails2 {...singleAd.User} />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-7'>
            <ProductDetails {...singleAd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
