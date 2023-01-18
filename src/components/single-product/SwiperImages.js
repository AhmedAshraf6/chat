import React from 'react';
import test from '../../assets/imgs/test.png';
import test2 from '../../assets/imgs/test2.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { image_url } from '../../utils/constants';
// Import Swiper styles
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';
import { useState } from 'react';

const SwiperImages = ({ advertisement_attachements }) => {
  return (
    <Swiper navigation modules={[Navigation]} className='my-swiper-images '>
      {advertisement_attachements &&
        advertisement_attachements.length > 0 &&
        advertisement_attachements.map((img) => {
          return (
            <SwiperSlide className='bg-info' key={img.id}>
              <div className='card  border-0 bg-transparent'>
                <div className='img text-center'>
                  <img
                    src={`${image_url}${img.files}`}
                    className='card-img-top mx-auto mx-sm-0'
                    alt='test'
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default SwiperImages;
