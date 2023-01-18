import React, { useState, useEffect } from 'react';
import VerifyedDetails from './VerifyedDetails';
import SelectSalary from './SelectSalary';
import ReviewDetails from './ReviewDetails';
import axios from 'axios';
import { puplish_ad_url } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import CompleteShiping from './CompleteShiping';
import { useUserContext } from '../../contexts/UserProvider';

const Puplish = () => {
  const { subid } = useParams();
  const { countryId, token } = useUserContext();
  const initialValues = {
    address: '',
    salary: '',
    adType: '',
    payment_option: '',
    adsName: '',
    explainAds: '',
    category_id: subid,
    isNegotiatable: '',
    contact: '',
    country_id: countryId,
    city_id: '2',
    images: {
      img1: {
        img1: '',
        imgServer: '',
      },
      img2: {
        img2: '',
        imgServer: '',
      },
      img3: {
        img3: '',
        imgServer: '',
      },
    },
    country_code: 'EG',
    package_id: '',
    upload: 'picture',
    videoUploaded: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({ maxVideoUpload: '' });
  const [isSubmit, setIsSubmit] = useState(false);
  const [payCom, setPayCom] = useState(false);

  // handle Request
  const handleRequest = async () => {
    try {
      const response = await axios.post(
        puplish_ad_url,
        JSON.stringify({
          location: formValues.address,
          price: formValues.salary,
          ad_type: formValues.adType,
          payment_option: formValues.payment_option,
          title: formValues.adsName,
          disription: formValues.explainAds,
          category_id: formValues.category_id,
          isNegotiatable: formValues.isNegotiatable,
          contact_methodes: formValues.contact,
          country_id: formValues.country_id,
          city_id: formValues.city_id,
          file: formValues.images.img1.imgServer,
          country_code: formValues.country_code,
          package_id: formValues.package_id,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // HandleChange In Value inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // HandleChange In files images
  const handleChangeImages = (e) => {
    const { name, files } = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        return setFormValues({
          ...formValues,
          images: {
            ...formValues.images,
            [name]: {
              ...formValues.images.name,
              [name]: reader.result,
              imgServer: files[0],
            },
          },
          videoUploaded: '',
        });
      }
    };
    reader.readAsDataURL(files[0]);
  };
  // Handle Delete Image
  const deleteSignleImage = (img) => {
    return setFormValues({
      ...formValues,
      images: { ...formValues.images, [img]: '' },
    });
  };
  // HandleChange In files videos
  const handleChangeVideo = (e) => {
    if (e.target.files[0].size > 8 * 1048576) {
      setFormErrors({
        ...formErrors,
        maxVideoUpload: 'يجب أن يكون حجم الملف أقل من 8 ميجابايت',
      });
    } else {
      setFormValues({
        ...formValues,
        videoUploaded: e.target.files[0],
        images: { ...formValues.images, img1: {}, img2: {}, img3: {} },
      });
    }
  };
  // Handle Ads View
  const handlePackageAd = (packageid, price) => {
    setFormValues({ ...formValues, package_id: packageid });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  //  Handle Errors
  const validate = (values) => {
    const errors = {};
    if (!values.address) {
      errors.addressError = 'من فضلك أدخل العنوان';
    }
    if (!values.salary) {
      errors.salaryError = 'من فضلك أدخل سعر المنتج';
    }
    if (!values.adType) {
      errors.adTypeError = 'من فضلك اختار نوع إعلانك';
    }
    if (!values.payment_option) {
      errors.paymentOptionError = 'من فضلك اختار طريقة الدفع ';
    }
    if (!values.adsName) {
      errors.adsNameError = 'من فضلك أدخل اسم الإعلان';
    }
    if (!values.explainAds) {
      errors.explainAdsError = 'من فضلك اشرح حالة المنتج';
    }
    if (!values.isNegotiatable) {
      errors.isNegotiatableError =
        'من فضلك ادخل ما ان كان هذا المنتج قابل للتفاوض';
    }
    if (!values.contact) {
      errors.contactMethodError = 'من فضلك أدخل وسيلة التواصل';
    }

    if (!values.package_id) {
      errors.packageIdError = 'من فضلك أختر نوع الباقة';
    }
    if (
      values.upload === 'picture' &&
      !values.images.img1.img1 &&
      !values.images.img2.img2 &&
      !values.images.img3.img3
    ) {
      errors.imagesError = 'من فضلك ارفع صورة وأكثر للمنتج';
    }
    if (values.upload === 'video' && !values.videoUploaded) {
      errors.videoErrors = 'من فضلك ارفع فيديو للمنتج';
    }

    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleRequest();
    }
  }, [formErrors]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [payCom]);
  return (
    <>
      {!payCom ? (
        <form
          className='Puplish-product bg-primary p-4 text-white m-4 rounded'
          onSubmit={handleSubmit}
        >
          <div className='container-fluid'>
            <div className='box border-bottom pb-4'>
              <h3>الفئة المختارة</h3>
            </div>
            {/* Details */}
            <div className='verify-details'>
              <VerifyedDetails
                handleChange={handleChange}
                formValues={formValues}
                formErrors={formErrors}
              />
            </div>
            {/* Details 2 */}
            <div className='details2 mt-3 border-top pt-3'>
              <SelectSalary
                handleChange={handleChange}
                handleChangeImages={handleChangeImages}
                handleChangeVideo={handleChangeVideo}
                formValues={formValues}
                formErrors={formErrors}
                setFormValues={setFormValues}
                deleteSignleImage={deleteSignleImage}
              />
            </div>
            {/* Details 2 */}
            {/* Details 3 */}
            <div className='details2 mt-3 border-top pt-3'>
              <ReviewDetails
                handlePackageAd={handlePackageAd}
                formValues={formValues}
                handleChange={handleChange}
                formErrors={formErrors}
              />
            </div>
            {/* Details 3 */}
          </div>
          <div className='text-center'>
            <button
              className='btn btn-secondary btn-lg px-5 mt-4 text-white'
              type='submit'
            >
              انشر الان
            </button>
          </div>
        </form>
      ) : (
        <CompleteShiping />
      )}
    </>
  );
};

export default Puplish;
