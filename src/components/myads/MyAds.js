import React, { useState } from 'react';
import FavouriteAds from './FavouriteAds';
import Ad from './Ad';
import { useEffect } from 'react';
import { ads_status_url, user_ads__by_status_url } from '../../utils/constants';
import { all_user_ads } from '../../utils/constants';
import { useUserContext } from '../../contexts/UserProvider';
import axios from 'axios';
const MyAds = () => {
  const { token } = useUserContext();
  const [change, setChange] = useState(true);
  const [currentAdId, setCurrentAdId] = useState();
  const [adsStatus, setAdsStatus] = useState([]);
  // const [makeChange, setMakeChange] = useState(true);
  const [ads, setAds] = useState([]);
  // All Ads
  const fetchAllAds = async () => {
    try {
      const response = await axios(all_user_ads, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(`${response} all ads change`);
      // console.log(response.data.data);
      setAds(response.data.data);
    } catch (error) {
      console.log('error');
    }
  };

  const fetchAdsStatus = async () => {
    try {
      const response = await axios(ads_status_url);
      // console.log(`${response} all ads change`);
      setAdsStatus(response.data.data);
    } catch (error) {
      console.log('error');
    }
  };
  useEffect(() => {
    fetchAllAds();
    fetchAdsStatus();
  }, []);
  // All Ads

  // Ads By Status
  const fetchUserAdsByStatus = async () => {
    try {
      const response = await axios(`${user_ads__by_status_url}${currentAdId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(`${response}  ads by status change`);
      // console.log(response);
      setAds(response.data.data);
    } catch (error) {
      console.log('error');
    }
  };
  useEffect(() => {
    if (currentAdId) {
      fetchUserAdsByStatus();
    }
  }, [currentAdId]);
  // Ads By Status
  return (
    <div className='profile-com py-5 '>
      <div className='container-fluid '>
        <div className='btn-group mx-3' role='group' aria-label='Basic example'>
          <button
            type='button'
            className='btn btn-secondary btn-lg mx-2'
            onClick={() => setChange(true)}
          >
            الإعلانات
          </button>
          <button
            type='button'
            className='btn btn-primary btn-lg mx-2'
            onClick={() => setChange(false)}
          >
            المفضلة
          </button>
        </div>
        {/* Settings */}
        {change && (
          <div className='settings'>
            <div className='d-flex flex-column flex-md-row justify-content-between mt-4 mx-3'>
              <input
                type='text'
                className='form-control search fs-6 fw-bold mb-3 w-25'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                placeholder='البحث بعنوان'
              />
              <div className='dropdown'>
                <button
                  className='btn btn-light dropdown-toggle text-primary'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  البحث حسب الفئة
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mx-3 mt-3 d-flex flex-column flex-sm-row justify-content-center '>
              <button
                type='button'
                className='btn btn-secondary btn-lg mx-2 mt-3 mt-sm-0'
                onClick={() => {
                  setCurrentAdId(0);
                  fetchAllAds();
                }}
              >
                عرض الكل
              </button>
              {adsStatus.map((status) => {
                const { id, name_ar } = status;
                return (
                  <button
                    type='button'
                    className='btn btn-primary btn-lg mx-2 mt-3 mt-sm-0'
                    onClick={() => setCurrentAdId(id)}
                    key={id}
                  >
                    {name_ar}
                  </button>
                );
              })}
            </div>
            <div className='row g-1 gy-2 mx-1 mt-2'>
              {ads && ads.length > 0 ? (
                ads.map((ad) => {
                  return <Ad {...ad} key={ad.id} />;
                })
              ) : (
                <h2 className='text-center my-5 text-dark fw-bold'>
                  لا يوجد اعلانات
                </h2>
              )}
            </div>
          </div>
        )}
        {/* Favourites */}
        {!change && <FavouriteAds />}
      </div>
    </div>
  );
};

export default MyAds;
