import React, { useState } from 'react';
import person2 from '../../assets/imgs/person2.png';
import free from '../../assets/ICONs/free.png';
import bestseller from '../../assets/ICONs/bestseller.png';
import success from '../../assets/ICONs/success.png';
import { package_url } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserProvider';
import axios from 'axios';
import { useEffect } from 'react';
const ReviewDetails = ({
  handlePackageAd,
  formValues,
  handleChange,
  formErrors,
}) => {
  const { mainid } = useParams();
  const { countryName, countryId } = useUserContext();
  const [allPackages, setAllPackages] = useState([]);
  const fetchPackages = async () => {
    const response = await axios(`${package_url}${countryName}`);
    const p = response.data.data.filter((res) => res.category_id == mainid);
    setAllPackages(p);
  };
  useEffect(() => {
    fetchPackages();
  }, []);
  return (
    <>
      <h4>راجع التفاصيل الخاصة بك</h4>
      {/* <div className='d-flex align-items-center my-3'>
        <img src={person2} alt='person2' className='rounded-circle ' />
        <div className='me-4'>
          <h5>الأسم</h5>
          <input
            className='form-control form-control-lg text-muted '
            type='text'
            name='yourName'
            value={formValues.yourName}
            onChange={handleChange}
          />
          {formErrors.yourNameError && (
            <p className='text-danger'>{formErrors.yourNameError}</p>
          )}
        </div>
      </div>
      <div>
        <h5>رقم الهاتف</h5>
        <div className='icon-box w-25 '>
          <input
            className='form-control form-control-lg egypt'
            type='text'
            placeholder='10000000000'
            name='yourPhone'
            value={formValues.yourPhone}
            onChange={handleChange}
          />
          {formErrors.yourPhoneError && (
            <p className='text-danger'>{formErrors.yourPhoneError}</p>
          )}
        </div>
      </div> */}
      <div className='method-contact mt-3'>
        <h5>طريقة التواصل</h5>
        <div className='d-flex  justify-content-start my-4'>
          {/* Checkbox */}
          <div className='radio-group d-flex flex-column flex-md-row'>
            <div className='bg-light  rounded radio-contact mt-3 mt-md-0 py-3 px-2 ms-3'>
              <label className='radio text-dark '>
                <input
                  type='radio'
                  value='phoneNumber'
                  name='contact'
                  onChange={handleChange}
                  checked={formValues.contact === 'phoneNumber'}
                />
                رقم الموبايل
                <span></span>
              </label>
            </div>
            <div className='bg-light  rounded radio-contact mt-3 mt-md-0 py-3 px-2 ms-3'>
              <label className='radio text-dark '>
                <input
                  type='radio'
                  value='adsChat'
                  name='contact'
                  onChange={handleChange}
                  checked={formValues.contact === 'adsChat'}
                />
                أدس شات
                <span></span>
              </label>
            </div>
            <div className='bg-light  rounded radio-contact mt-3 mt-md-0 py-3 px-2 ms-3'>
              <label className='radio text-dark '>
                <input
                  type='radio'
                  value='whatsApp'
                  name='contact'
                  onChange={handleChange}
                  checked={formValues.contact === 'whatsApp'}
                />
                واتساب
                <span></span>
              </label>
            </div>
            <div className='bg-light radio-contact mt-3 mt-md-0 py-3 px-2 rounded '>
              <label className='radio text-dark '>
                <input
                  type='radio'
                  value='three'
                  name='contact'
                  onChange={handleChange}
                  checked={formValues.contact === 'three'}
                />
                الثلاثة
                <span></span>
              </label>
            </div>
          </div>
        </div>
        {formErrors.contactMethodError && (
          <p className='text-danger'>{formErrors.contactMethodError}</p>
        )}
        {/* Ads */}
        <div className='ads'>
          <div className='row gy-4 '>
            {allPackages &&
              allPackages.length > 0 &&
              allPackages.map((pack) => {
                const { name, decription, price, id: package_id } = pack;
                return (
                  <div className='col-12' key={package_id}>
                    <div className='row'>
                      <div className='col-xl-6 col-lg-9 col-12'>
                        <div
                          className={
                            formValues.package_id === package_id
                              ? 'box  bg-secondary text-primary p-3 rounded pointer'
                              : 'box color-in-background text-primary p-3 rounded pointer'
                          }
                          onClick={() => handlePackageAd(package_id, price)}
                        >
                          <div className='d-flex'>
                            <h4 className='ms-5  fw-bold'>{name}</h4>
                            <img src={free} alt='free' className='icon' />
                          </div>
                          <div className='d-flex mt-3 justify-content-between'>
                            <h3 className='ms-5  fw-bold'>{decription}</h3>
                            <h4>{price}L.E</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            {formErrors.packageIdError && (
              <p className='text-danger'>{formErrors.packageIdError}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewDetails;
