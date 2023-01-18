import React from 'react';
import { Link } from 'react-router-dom';
import test from '../../assets/imgs/test.png';
import person from '../../assets/imgs/person.png';
import heart from '../../assets/ICONs/heart.png';
import view from '../../assets/ICONs/view.png';
import pin from '../../assets/ICONs/pin.png';
import { BsThreeDotsVertical } from 'react-icons/bs';

const FilterBody = () => {
  return (
    <div className='filter-body mt-3'>
      <div className='row g-1 gy-2 '>
        <div className='col-lg-4 col-md-6 '>
          <div className='card position-relative'>
            <Link
              className='img bg-secondary w-100 h-50 text-center'
              to='/singleproduct/7'
            >
              <img src={test} className='card-img-top w-50 h-50 ' alt='img1' />
            </Link>
            {/* start card */}
            <div className='card-body d-flex align-items-center '>
              <Link
                className='d-flex flex-column text-decoration-none'
                to='/seller/7'
              >
                <img
                  src={person}
                  alt='person'
                  className='rounded-circle small-img'
                />
                <span className='text-nowrap'>زياد فؤاد</span>
              </Link>
              <div className='w-100 me-2'>
                <div className='d-flex justify-content-between align-items-start w-100'>
                  <h6>جاكيت رجالي</h6>
                  <h6 className='text-secondary'>1000le</h6>
                  <BsThreeDotsVertical className='pointer' />
                </div>
                <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                  <span className='text-primary info ms-2'>
                    <img
                      src={pin}
                      alt='pination'
                      className='very-small-icon ms-1'
                    />
                    اسكندرية ،مصر
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
              src={heart}
              alt='heart'
              className='position-absolute heart pointer'
            />
            <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
          </div>

          {/* end card */}
        </div>
        <div className='col-lg-4 col-md-6 '>
          <div className='card position-relative'>
            <Link
              className='img bg-secondary w-100 h-50 text-center'
              to='/singleproduct/7'
            >
              <img src={test} className='card-img-top w-50 h-50 ' alt='img1' />
            </Link>
            {/* start card */}
            <div className='card-body d-flex align-items-center '>
              <Link
                className='d-flex flex-column text-decoration-none'
                to='/seller/7'
              >
                <img
                  src={person}
                  alt='person'
                  className='rounded-circle small-img'
                />
                <span className='text-nowrap'>زياد فؤاد</span>
              </Link>
              <div className='w-100 me-2'>
                <div className='d-flex justify-content-between align-items-start w-100'>
                  <h6>جاكيت رجالي</h6>
                  <h6 className='text-secondary'>1000le</h6>
                  <BsThreeDotsVertical className='pointer' />
                </div>
                <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                  <span className='text-primary info ms-2'>
                    <img
                      src={pin}
                      alt='pination'
                      className='very-small-icon ms-1'
                    />
                    اسكندرية ،مصر
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
              src={heart}
              alt='heart'
              className='position-absolute heart pointer'
            />
            <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
          </div>

          {/* end card */}
        </div>
        <div className='col-lg-4 col-md-6 '>
          <div className='card position-relative'>
            <Link
              className='img bg-secondary w-100 h-50 text-center'
              to='/singleproduct/7'
            >
              <img src={test} className='card-img-top w-50 h-50 ' alt='img1' />
            </Link>
            {/* start card */}
            <div className='card-body d-flex align-items-center '>
              <Link
                className='d-flex flex-column text-decoration-none'
                to='/seller/7'
              >
                <img
                  src={person}
                  alt='person'
                  className='rounded-circle small-img'
                />
                <span className='text-nowrap'>زياد فؤاد</span>
              </Link>
              <div className='w-100 me-2'>
                <div className='d-flex justify-content-between align-items-start w-100'>
                  <h6>جاكيت رجالي</h6>
                  <h6 className='text-secondary'>1000le</h6>
                  <BsThreeDotsVertical className='pointer' />
                </div>
                <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                  <span className='text-primary info ms-2'>
                    <img
                      src={pin}
                      alt='pination'
                      className='very-small-icon ms-1'
                    />
                    اسكندرية ،مصر
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
              src={heart}
              alt='heart'
              className='position-absolute heart pointer'
            />
            <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
          </div>

          {/* end card */}
        </div>
        <div className='col-lg-4 col-md-6 '>
          <div className='card position-relative'>
            <Link
              className='img bg-secondary w-100 h-50 text-center'
              to='/singleproduct/7'
            >
              <img src={test} className='card-img-top w-50 h-50 ' alt='img1' />
            </Link>
            {/* start card */}
            <div className='card-body d-flex align-items-center '>
              <Link
                className='d-flex flex-column text-decoration-none'
                to='/seller/7'
              >
                <img
                  src={person}
                  alt='person'
                  className='rounded-circle small-img'
                />
                <span className='text-nowrap'>زياد فؤاد</span>
              </Link>
              <div className='w-100 me-2'>
                <div className='d-flex justify-content-between align-items-start w-100'>
                  <h6>جاكيت رجالي</h6>
                  <h6 className='text-secondary'>1000le</h6>
                  <BsThreeDotsVertical className='pointer' />
                </div>
                <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                  <span className='text-primary info ms-2'>
                    <img
                      src={pin}
                      alt='pination'
                      className='very-small-icon ms-1'
                    />
                    اسكندرية ،مصر
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
              src={heart}
              alt='heart'
              className='position-absolute heart pointer'
            />
            <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
          </div>

          {/* end card */}
        </div>
        <div className='col-lg-4 col-md-6 '>
          <div className='card position-relative'>
            <Link
              className='img bg-secondary w-100 h-50 text-center'
              to='/singleproduct/7'
            >
              <img src={test} className='card-img-top w-50 h-50 ' alt='img1' />
            </Link>
            {/* start card */}
            <div className='card-body d-flex align-items-center '>
              <Link
                className='d-flex flex-column text-decoration-none'
                to='/seller/7'
              >
                <img
                  src={person}
                  alt='person'
                  className='rounded-circle small-img'
                />
                <span className='text-nowrap'>زياد فؤاد</span>
              </Link>
              <div className='w-100 me-2'>
                <div className='d-flex justify-content-between align-items-start w-100'>
                  <h6>جاكيت رجالي</h6>
                  <h6 className='text-secondary'>1000le</h6>
                  <BsThreeDotsVertical className='pointer' />
                </div>
                <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                  <span className='text-primary info ms-2'>
                    <img
                      src={pin}
                      alt='pination'
                      className='very-small-icon ms-1'
                    />
                    اسكندرية ،مصر
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
              src={heart}
              alt='heart'
              className='position-absolute heart pointer'
            />
            <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
          </div>

          {/* end card */}
        </div>
        <div className='col-lg-4 col-md-6 '>
          <div className='card position-relative'>
            <Link
              className='img bg-secondary w-100 h-50 text-center'
              to='/singleproduct/7'
            >
              <img src={test} className='card-img-top w-50 h-50 ' alt='img1' />
            </Link>
            {/* start card */}
            <div className='card-body d-flex align-items-center '>
              <Link
                className='d-flex flex-column text-decoration-none'
                to='/seller/7'
              >
                <img
                  src={person}
                  alt='person'
                  className='rounded-circle small-img'
                />
                <span className='text-nowrap'>زياد فؤاد</span>
              </Link>
              <div className='w-100 me-2'>
                <div className='d-flex justify-content-between align-items-start w-100'>
                  <h6>جاكيت رجالي</h6>
                  <h6 className='text-secondary'>1000le</h6>
                  <BsThreeDotsVertical className='pointer' />
                </div>
                <div className='d-flex justify-content-start align-items-start w-100 mt-2'>
                  <span className='text-primary info ms-2'>
                    <img
                      src={pin}
                      alt='pination'
                      className='very-small-icon ms-1'
                    />
                    اسكندرية ،مصر
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
              src={heart}
              alt='heart'
              className='position-absolute heart pointer'
            />
            <div className='text-muted text-center pb-3'>منذ خمس ساعات</div>
          </div>

          {/* end card */}
        </div>
      </div>
    </div>
  );
};

export default FilterBody;
