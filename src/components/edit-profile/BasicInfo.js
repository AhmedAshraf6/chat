import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import lamp from '../../assets/ICONs/lamp.png';
import user from '../../assets/ICONs/user.png';
import { useUserContext } from '../../contexts/UserProvider';
import { update_profile_url } from '../../utils/constants';
const BasicInfo = ({ setShowIdentity, setValues }) => {
  // All Data
  const initialValues = {
    viewerName: '',
    identityName: '',
    address: '',
    day: '',
    month: '',
    year: '',
    phoneNumber: '',
    email: '',
    image: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [displayImage, setDisplayImage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleChangeImage = (e) => {
    const { files } = e.target;
    // HandleChange In files images

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDisplayImage(reader.result);
      }
    };
    reader.readAsDataURL(files[0]);
    setFormValues({ ...formValues, image: files[0] });
  };
  const deleteSelectedImage = () => {
    setFormValues({ ...formValues, image: '' });
    setDisplayImage('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.viewerName) {
      errors.viewerNameError = 'من فضلك أدخل الأسم';
    }
    if (!values.identityName) {
      errors.identityNameError = 'من فضلك أدخل أسمك كما هو في الهوية الشخصية';
    }
    if (!values.address) {
      errors.addressError = 'من فضلك أدخل عنوانك';
    }
    if (!values.phoneNumber) {
      errors.phoneNumberError = 'من فضلك أدخل رقم هاتفك';
    }
    if (!values.image) {
      errors.imageError = 'من فضلك ارفع صورة خاصة بك ';
    }
    if (!values.email) {
      errors.emailError = 'من فضلك أدخل البريد الإلكتروني ';
    } else if (!regex.test(values.email)) {
      errors.emailNotValid = 'من فضلك أدخل عنوان بريد إلكرتوني صحيح';
    }
    return errors;
  };
  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setValues(formValues);
      setShowIdentity(true);
    }
  }, [formErrors]);

  // all days
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  // all Months
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }
  // all Years
  const years = [];
  for (let i = 1920; i <= 2023; i++) {
    years.push(i);
  }

  return (
    <form className='edit-profile' onSubmit={handleSubmit}>
      <div className='box border-bottom pb-4 mt-4'>
        <h4>معلومات أساسية</h4>
        <div className='basic row'>
          <div className='col-lg-5'>
            <div className='form'>
              <input
                className='form-control  form-control-lg mt-4'
                type='text'
                placeholder='الاسم الذي يظهر للمستخدمين'
                name='viewerName'
                value={formValues.viewerName}
                onChange={handleChange}
              />
              <p className='text-danger'>{formErrors.viewerNameError}</p>
              <input
                className='form-control form-control-lg mt-4'
                type='text'
                placeholder='ادخل اسمك كما هو في الهوية الشخصية'
                name='identityName'
                value={formValues.identityName}
                onChange={handleChange}
              />
              <p className='text-danger'>{formErrors.identityNameError}</p>

              <input
                className='form-control form-control-lg mt-4'
                type='text'
                placeholder='ادخل عنوانك بالتفصيل'
                name='address'
                value={formValues.address}
                onChange={handleChange}
              />
              <p className='text-danger'>{formErrors.addressError}</p>
            </div>
          </div>
          <div className='col-lg-5 d-flex align-self-start align-self-lg-end '>
            <div className='position-relative mx-0 mx-lg-2 mt-5 mt-lg-0 '>
              <p className='make-100 p-3 border w-50'>
                لماذا هو مهم : توثيق هويتك يفيد في الوثوق في اعلاناتك وبيع أسرع
                لمنتجاتك{' '}
              </p>
              <div className='position-absolute lamb-box'>
                <img src={lamp} alt='lamp' className='lamb-icon' />
              </div>
            </div>
          </div>
          <div className='col-lg-2'>
            {!formValues.image && (
              <div className='picture-upload bg-light rounded position-relative'>
                <input
                  type='file'
                  className='custom-picture-upload pointer w-100 h-100'
                  accept='image/*'
                  onChange={handleChangeImage}
                />
              </div>
            )}
            {formValues.image && (
              <div className='picture-upload bg-light rounded position-relative'>
                <button
                  type='button'
                  className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                  aria-label='Close'
                  onClick={deleteSelectedImage}
                ></button>
                <input
                  type='file'
                  className='img-cover pointer '
                  accept='image/*'
                  name='img2'
                  onChange={handleChangeImage}
                  style={{
                    backgroundImage: `url(${displayImage})`,
                  }}
                />
              </div>
            )}
            {formErrors.imageError && (
              <p className='text-danger'>{formErrors.imageError}</p>
            )}
          </div>
          {/* Handle Image */}
        </div>
        <div className='birth  w-75 mt-4'>
          <h4 className='pb-3'>تاريخ الميلاد</h4>
          <div className='d-flex flex-column flex-sm-row'>
            <select
              id='inputState'
              className='form-select form-select-lg  mt-2 mt-sm-0 ms-3'
              name='day'
              onChange={handleChange}
            >
              <option value='يوم'>يوم</option>
              {days.map((a, i) => {
                return (
                  <option value={a} key={i}>
                    {a}
                  </option>
                );
              })}
            </select>
            <select
              id='inputState'
              className='form-select form-select-lg mt-2 mt-sm-0 ms-3'
              name='month'
              onChange={handleChange}
            >
              <option value='شهر'>شهر</option>
              {months.map((a, i) => {
                return (
                  <option value={a} key={i}>
                    {a}
                  </option>
                );
              })}
            </select>
            <select
              id='inputState'
              className='form-select form-select-lg  mt-2 mt-sm-0 ms-3'
              name='year'
              onChange={handleChange}
            >
              <option value='سنة'>سنة</option>
              {years.map((a, i) => {
                return (
                  <option value={a} key={i}>
                    {a}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className='box border-bottom pb-4 mt-4'>
        <h4 className='pb-3'>معلومات الاتصال</h4>
        <div className='contact-info'>
          <div className='row d-flex align-items-center gy-3'>
            <div className='col-lg-3 col-md-4'>
              <div className='icon-box'>
                <input
                  className='form-control form-control-lg egypt'
                  type='text'
                  placeholder='10000000000'
                  value={formValues.phoneNumber}
                  name='phoneNumber'
                  onChange={handleChange}
                />
                <p className='text-danger'>{formErrors.phoneNumberError}</p>
              </div>
            </div>
            <div className='col-lg-9 col-md-8'>
              <span className=' mx-2'>
                هذا هو رقم جهات الاتصال، التذكيرات والإخطارات الأخرى الخاصة
                بالمشترين.
              </span>
            </div>

            <div className='col-lg-3 col-md-4'>
              <input
                className='form-control form-control-lg'
                type='text'
                placeholder='بريدك الإلكتروني'
                value={formValues.email}
                name='email'
                onChange={handleChange}
              />
              <p className='text-danger'>
                {formErrors.emailError}
                {formErrors.emailNotValid}
              </p>
            </div>
            <div className='col-lg-9 col-md-8 '>
              <span className=' mx-2'>
                لن نكشف بريدك الإلكتروني لأي شخص آخر ولن نستخدمه لإرسال رسائل
                غير مرغوب فيها إليك
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='box border-bottom pb-4 mt-4'>
        <h4 className='pb-4'>معلومات اختيارية</h4>
        <div className='row gy-3'>
          <div className='col-12'>
            <div className='row'>
              <div className='col-xl-6 col-lg-7'>
                <div>
                  <h6>فيسبوك</h6>
                  <p>سجّل الدخول باستخدام فيسبوك واكشف مصداقيتك للمشتريين</p>
                </div>
              </div>
              <div className='col-xl-4 col-md-5'>
                <button
                  className='btn btn-secondary fw-bold text-white btn-lg px-5  '
                  type='button'
                >
                  اربط
                </button>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='row'>
              <div className='col-xl-6 col-lg-7'>
                <div>
                  <h6>جوجل</h6>
                  <p>
                    قم بربط حساب أوليكس الخاص بك بحساب Google الخاص بك للتبسيط
                    والسهولة
                  </p>
                </div>
              </div>
              <div className='col-xl-4 col-md-5'>
                <button
                  className='btn btn-secondary fw-bold text-white btn-lg px-5  '
                  type='button'
                >
                  اربط
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='box d-flex flex-column flex-sm-row justify-content-between align-items-center pb-4 mt-4'>
        <h4 className='pointer text-danger'>تجاهل</h4>
        <button
          className='btn btn-secondary fw-bold text-white btn-lg mt-2 mt-sm-0'
          type='submit'
        >
          حفظ ومتابعة
        </button>
      </div>
    </form>
  );
};

export default BasicInfo;
