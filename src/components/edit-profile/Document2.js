import React, { useState } from 'react';
import photocamera from '../../assets/ICONs/photocamera.png';
import camera from '../../assets/ICONs/camera.png';
import document2 from '../../assets/imgs/document2.png';

const Document2 = ({ setPhotoIdentity, photoIdentityError }) => {
  const [documentPhotoIdentuty, setDocumentPhotoIdentity] = useState(document2);
  const photoHandlerIdentity = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDocumentPhotoIdentity(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setPhotoIdentity(e.target.files[0]);
  };
  return (
    <div className='upload-document d-flex flex-column align-items-center'>
      <div className='custom-upload position-relative me-5'>
        <div className='first-circle bg-light rounded-circle'></div>
        <div className='custom-image position-absolute'>
          <img
            src={documentPhotoIdentuty}
            alt='document2'
            className=' img w-75 h-75 '
          />
        </div>

        <div className='second-circle bg-light rounded-circle position-absolute '></div>
      </div>
      <div
        className='btn-group-vertical mt-5'
        role='group'
        aria-label='Vertical button group'
      >
        <div className='my-2'>
          <label
            htmlFor='file-cam-identity'
            className='pointer btn btn-light text-primary fw-bold d-flex align-items-center'
          >
            <img src={photocamera} alt='photocamera' className='icon mx-2' />
            انقر لأخذ صورة
          </label>
          <input id='file-cam-identity' type='file' />
        </div>
        <div className='my-2'>
          <label
            htmlFor='file-identity'
            className='pointer btn btn-light text-primary fw-bold d-flex align-items-center'
          >
            <img src={camera} alt='camera' className='icon mx-2' />
            انقر لرفع صورة
          </label>
          <input
            id='file-identity'
            type='file'
            onChange={photoHandlerIdentity}
          />
        </div>
      </div>
      <p className='text-danger mt-2 text-center fs-5 fw-bold'>
        {photoIdentityError}
      </p>
      <p className='fs-5 fw-bold mt-3'>
        قم برفع أوأخذ سيلفي لك مع وثيقة الهوية حيث تظهر ملامح وجهك بوضوح وكذلك
        معالم الوثيقة
      </p>
    </div>
  );
};

export default Document2;
