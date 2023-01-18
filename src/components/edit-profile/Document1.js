import React, { useState } from 'react';
import document1 from '../../assets/imgs/document1.png';
import photocamera from '../../assets/ICONs/photocamera.png';
import camera from '../../assets/ICONs/camera.png';
const Document1 = ({ setPhoto, photoError }) => {
  const [documentPhoto, setDocumentPhoto] = useState(document1);
  const photoHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDocumentPhoto(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setPhoto(e.target.files[0]);
  };
  return (
    <div className='upload-document d-flex flex-column   align-items-center'>
      <img
        src={documentPhoto}
        alt='document1'
        className='rounded-circle edit-image'
      />
      <div
        className='btn-group-vertical mt-5'
        role='group'
        aria-label='Vertical button group'
      >
        <div className='my-2'>
          <label
            htmlFor='file-cam'
            className='pointer btn btn-light text-primary fw-bold d-flex align-items-center'
          >
            <img src={photocamera} alt='photocamera' className='icon mx-2' />
            انقر لأخذ صورة
          </label>
          <input id='file-cam' type='file' />
        </div>
        <div className='my-2'>
          <label
            htmlFor='file-photo'
            className='pointer btn btn-light text-primary fw-bold d-flex align-items-center'
          >
            <img src={camera} alt='camera' className='icon mx-2' />
            انقر لرفع صورة
          </label>
          <input id='file-photo' type='file' onChange={photoHandler} />
        </div>
      </div>
      <p className='text-danger mt-2 text-center fs-5 fw-bold'>{photoError}</p>
      <p className='fs-5 fw-bold mt-3'>
        قم برفع أو أخذ صورة الوجه الأمامي لوثيقة الهوية تظهر فيها جميع المعلومات
        واضحة
      </p>
    </div>
  );
};

export default Document1;
