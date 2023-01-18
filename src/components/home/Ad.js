import React from 'react';
import test from '../../assets/imgs/test.png';
import person from '../../assets/imgs/person.png';
import view from '../../assets/ICONs/view.png';
import pin from '../../assets/ICONs/pin.png';
import heart from '../../assets/ICONs/heart.png';
import { Link } from 'react-router-dom';
import { image_url } from '../../utils/constants';
import DropdownLeft from './DropdownLeft';
import { useUserContext } from '../../contexts/UserProvider';
const Ad = ({
  id,
  title,
  price,
  location,
  created_at,
  User,
  AdWatch,
  advertisement_attachements,
}) => {
  const { handleFavouriteAd } = useUserContext();
  return (
    <div className='col-lg-3 col-md-6 '>
      <div className='card position-relative'>
        <Link
          className='img bg-info w-100 h-50 text-center'
          to={`/singleproduct/${id}`}
        >
          <img
            src={`
              ${
                advertisement_attachements &&
                advertisement_attachements.length > 0 &&
                image_url + advertisement_attachements[0].files
              }        
            `}
            className='card-img-top image-card '
            alt='img1'
          />
        </Link>
        {/* start card */}
        <div className='card-body d-flex align-items-center '>
          <Link
            className='d-flex flex-column text-decoration-none'
            to={`/seller/${User.id}`}
          >
            <img
              src={User.image ? User.image : person}
              alt='person'
              className='rounded-circle small-img'
            />
            <span className='text-nowrap'>{User.name}</span>
          </Link>
          <div className='w-100 me-2'>
            <div className='d-flex justify-content-between align-items-start w-100'>
              <h6>{title}</h6>
              <h6 className='text-secondary'>{price}</h6>
              {/* Dropdown menu left */}
              <DropdownLeft />
            </div>
            <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
              <span className='text-primary info ms-2'>
                <img
                  src={pin}
                  alt='pination'
                  className='very-small-icon ms-1'
                />
                {location}
              </span>
              <span className='text-primary info'>
                <img src={view} alt='view' className='very-small-icon ms-1' />
                {AdWatch && AdWatch.length} مشاهدة
              </span>
            </div>
          </div>
        </div>
        <img
          src={heart}
          alt='heart'
          className='position-absolute heart pointer'
          onClick={() => handleFavouriteAd(id)}
        />
        <div className='text-muted text-center pb-3'>منذ {created_at}</div>
      </div>

      {/* end card */}
    </div>
  );
};

export default Ad;
