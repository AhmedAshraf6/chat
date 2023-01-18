import React from 'react';
import { Link } from 'react-router-dom';
import heart2 from '../../assets/ICONs/heart2.png';
import test from '../../assets/imgs/test.png';
import person from '../../assets/imgs/person.png';
import heart from '../../assets/ICONs/heart.png';
import view from '../../assets/ICONs/view.png';
import pin from '../../assets/ICONs/pin.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useEffect } from 'react';
import { fav_ad_url } from '../../utils/constants';
import axios from 'axios';
import { useState } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import DropdownLeft from '../home/DropdownLeft';
import { image_url } from '../../utils/constants';
const FavouriteAds = () => {
  const [allAds, setAllAds] = useState([]);
  const { token, handleFavouriteAd, favAdsChange } = useUserContext();

  const fetchFavourite = async () => {
    try {
      const response = await axios(fav_ad_url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setAllAds(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFavourite();
  }, [favAdsChange]);
  // if (allAds) {
  //   console.log(allAds);
  // }
  return (
    <div className='favourites'>
      <div className='row g-1 gy-2 mx-1 mt-2'>
        {allAds && allAds.length > 0 ? (
          allAds.map((ad) => {
            const { id, Advertisement } = ad;
            const {
              title,
              price,
              User,
              created_at,
              location,
              id: ad_id,
              advertisement_attachements,
            } = Advertisement[0];
            return (
              <div className='col-lg-3 col-md-6 ' key={id}>
                <div className='card position-relative'>
                  <Link
                    className='img bg-info w-100 h-50 text-center'
                    to='/singleproduct/7'
                  >
                    <img
                      src={`${
                        advertisement_attachements &&
                        advertisement_attachements.length > 0 &&
                        image_url + advertisement_attachements[0].files
                      }`}
                      className='card-img-top image-card  '
                      alt='img1'
                    />
                  </Link>
                  {/* start card */}
                  <div className='card-body d-flex align-items-center '>
                    <div className='d-flex flex-column '>
                      <img
                        src={`${image_url}${User.image}`}
                        alt='person'
                        className='rounded-circle small-img image'
                      />
                      <span className='text-nowrap'>{User.name}</span>
                    </div>
                    <div className='w-100 me-2'>
                      <div className='d-flex justify-content-between align-items-start w-100'>
                        <h6>{title && title}</h6>
                        <h6 className='text-secondary'>{price && price}l.e</h6>
                        <DropdownLeft />
                      </div>
                      <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                        <span className='text-primary info ms-2'>
                          <img
                            src={pin}
                            alt='pination'
                            className='very-small-icon ms-1'
                          />
                          {location && location}
                        </span>
                        <span className='text-primary info'>
                          <img
                            src={view}
                            alt='view'
                            className='very-small-icon ms-1'
                          />
                          100 مشاهدة
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={heart2}
                    alt='heart'
                    className='position-absolute heart pointer'
                    onClick={() => {
                      handleFavouriteAd(ad_id);
                      fetchFavourite();
                    }}
                  />
                  <div className='text-muted text-center pb-3'>
                    {created_at}
                  </div>
                </div>

                {/* end card */}
              </div>
            );
          })
        ) : (
          <h2 className='text-center my-5 text-dark fw-bold'>
            لا يوجد اعلانات
          </h2>
        )}
      </div>
    </div>
  );
};

export default FavouriteAds;
