import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ads_type_url } from '../../utils/constants';
const VerifyedDetails = ({ handleChange, formValues, formErrors }) => {
  const { nameselect } = useParams();
  const [adsType, setAdsType] = useState([]);
  // console.log(nameselect);

  const fetchAdsType = async () => {
    const res = await axios(ads_type_url);
    setAdsType(res.data.data);
  };
  useEffect(() => {
    fetchAdsType();
  }, []);
  return (
    <>
      <div className='d-flex my-3'>
        <h5>سيارات</h5>
        <h5>تغيير</h5>
      </div>
      <div className='row gx-5 gy-3'>
        <h4>تأكيد بعض التفاصيل</h4>
        <div className='col-md-6'>
          <h6>اسم الإعلان</h6>
          <input
            className='form-control form-control-lg  '
            type='text'
            placeholder='اذكر أهم مميزات منتجك (مثل العلامة التجارية، الطراز، العمر والنوع)'
            name='adsName'
            value={formValues.adsName}
            onChange={handleChange}
          />
          <span className='d-flex justify-content-end'>0/70</span>
          {formErrors.adsNameError && (
            <p className='text-danger'>{formErrors.adsNameError}</p>
          )}
        </div>

        <div className='col-md-6'>
          <h6>العنوان</h6>
          <input
            className='form-control form-control-lg  '
            type='text'
            placeholder='العنوان التفصيلي'
            value={formValues.address}
            name='address'
            onChange={handleChange}
          />
          <span className='d-flex justify-content-end'>0/70</span>
          {formErrors.addressError && (
            <p className='text-danger'>{formErrors.addressError}</p>
          )}
        </div>
      </div>

      {/* نوع الاعلان */}
      <div className='my-3'>
        <h4>نوع اعلانك</h4>
        <div className='d-flex justify-content-start my-4'>
          {/* Checkbox */}
          <div className='radio-group'>
            {adsType &&
              adsType.length > 0 &&
              adsType.map((ad) => {
                return (
                  <label className='radio ms-5' key={ad.id}>
                    <input
                      type='radio'
                      name='adType'
                      value={ad.name_ar}
                      onChange={handleChange}
                    />
                    {ad.name_ar}
                    <span></span>
                  </label>
                );
              })}
          </div>
        </div>
        {formErrors.adTypeError && (
          <p className='text-danger'>{formErrors.adTypeError}</p>
        )}
      </div>
      {/* طريقة الدفع */}
      <div className='my-3'>
        <h4>طريقة الدفع</h4>
        <div className='d-flex justify-content-start my-4'>
          {/* Checkbox */}
          <div className='radio-group'>
            <label className='radio ms-5'>
              <input
                type='radio'
                name='payment_option'
                value='cash'
                onChange={handleChange}
              />
              كاش
              <span></span>
            </label>
            <label className='radio ms-5'>
              <input
                type='radio'
                name='payment_option'
                value='exchange'
                onChange={handleChange}
              />
              تبادل
              <span></span>
            </label>
            <label className='radio ms-5'>
              <input
                type='radio'
                name='payment_option'
                value='installments'
                onChange={handleChange}
              />
              أقساط
              <span></span>
            </label>
          </div>
        </div>
        {formErrors.paymentOptionError && (
          <p className='text-danger'>{formErrors.paymentOptionError}</p>
        )}
      </div>
      <div className='explain mt-5'>
        <div className='form-floating custom-textarea'>
          <textarea
            className='form-control h-100 '
            placeholder='اشرح حالة المنتج ، ومميزاته وسبب البيع'
            id='floatingTextarea2'
            value={formValues.explainAds}
            name='explainAds'
            onChange={handleChange}
          ></textarea>
          <label className='text-primary fs-5 fw-bold'>
            اشرح حالة المنتج ، ومميزاته وسبب البيع
          </label>
        </div>
        <span className='d-flex justify-content-end'>0/4067</span>
        {formErrors.explainAdsError && (
          <p className='text-danger'>{formErrors.explainAdsError}</p>
        )}
      </div>
    </>
  );
};

export default VerifyedDetails;
