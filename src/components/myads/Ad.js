import React from 'react';
import { Link } from 'react-router-dom';
import heart2 from '../../assets/ICONs/heart2.png';
import test from '../../assets/imgs/test.png';
import person from '../../assets/imgs/person.png';
import heart from '../../assets/ICONs/heart.png';
import view from '../../assets/ICONs/view.png';
import pin from '../../assets/ICONs/pin.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { image_url } from '../../utils/constants';
import DropdownLeft from '../home/DropdownLeft';
import { useUserContext } from '../../contexts/UserProvider';
const Ad = ({
  id,
  advertisement_attachements,
  User,
  title,
  price,
  location,
  created_at,
}) => {
  const { handleFavouriteAd } = useUserContext();
  const first_image = advertisement_attachements.find((a) => a.files);

  return (
    <div className='col-lg-3 col-md-6 '>
      <div className='card position-relative'>
        <Link
          className='img bg-info w-100 h-50 text-center'
          to={`/singleproduct/${id}`}
        >
          <img
            src={`${
              first_image && first_image.files && image_url + first_image.files
            }`}
            className='card-img-top image-card py-2'
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
              <h6 className='text-secondary'>{price && price}</h6>
              {/* <BsThreeDotsVertical className='pointer' /> */}
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
                <img src={view} alt='view' className='very-small-icon ms-1' />
                100 مشاهدة
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
        <div className='text-muted text-center pb-3'>{created_at}</div>
      </div>

      {/* end card */}
    </div>
  );
};

export default Ad;
