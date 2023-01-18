import React from 'react';
import { useAdsContext } from '../../contexts/AdsProvider';
import { useUserContext } from '../../contexts/UserProvider';
import Ad from './Ad';

const HomeNotSigned = () => {
  const { allAds } = useAdsContext();
  const { token } = useUserContext();

  return (
    <section className='home-not-signed color-in-background py-3'>
      <div className='container-fluid'>
        <h3 className='py-4 ps-2 text-primary'>اعلانات جديدة</h3>
        <div className='row g-1 gy-2 mx-1'>
          {allAds.map((ad) => {
            // console.log(ad);
            return <Ad {...ad} key={ad.id} />;
          })}
        </div>
        <div className='text-center mt-3'>
          <button className='btn btn-light text-secondary fs-5 fw-bold px-4'>
            المزيد
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeNotSigned;
