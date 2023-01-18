import React from 'react';
import { Link, useParams } from 'react-router-dom';
import test from '../../assets/imgs/test.png';
import person from '../../assets/imgs/person.png';
import heart from '../../assets/ICONs/heart.png';
import view from '../../assets/ICONs/view.png';
import pin from '../../assets/ICONs/pin.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useEffect } from 'react';
import { seller_id } from '../../utils/constants';
import axios from 'axios';
import { useState } from 'react';
import Ad from './Ad';
const AdsMember = () => {
  const { sellerid } = useParams();
  const [allAds, setAllAds] = useState([]);
  // const fetchSellerAds = async () => {
  //   try {
  //     const response = await axios(seller_id,{

  //     });
  //     // setAllAds(response.data.data);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchSellerAds();
  // }, []);
  return (
    <div className='w-100 '>
      <h4 className='border-bottom border-2 border-dark text-dark pb-5 ms-3 fw-bold'>
        زياد فؤاد
      </h4>
      {/* All Ads */}
      <div className='ads mt-3 ms-3'>
        <h4 className='text-dark  fw-bold'>الاعلانات المنشورة[5]</h4>
        <div className='row mt-4 gy-3'>
          {allAds.map((ad) => {
            const { id } = ad;
            return <Ad key={id} />;
          })}
        </div>
      </div>
      {/* All Ads */}
    </div>
  );
};

export default AdsMember;
