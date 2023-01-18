import React, { useEffect, useState } from 'react';
import { useMainContext } from '../../contexts/MainProvider';
import Document1 from './Document1';
import Document2 from './Document2';

const IdentityDocumented = ({ values, setValues }) => {
  // document 1
  const [photo, setPhoto] = useState();
  // document 2
  const [photoIdentity, setPhotoIdentity] = useState();
  // errors
  const [photoError, setPhotoError] = useState();
  const [photoIdentityError, setPhotoIdentityError] = useState();
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  // const errors = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setPhotoError('');
    setPhotoIdentityError('');
    if (!photo) {
      setPhotoError('من فضلك ارفع صورة');
    }
    if (!photoIdentity) {
      setPhotoIdentityError('من فضلك ارفع صورة الهوية الشخصية');
    }
    if (photo && photoIdentity) {
      setValues({ ...values, photo, photoIdentity });
    }
  };
  return (
    <div className='identity-documented mx-2'>
      <form className='box  pb-4 mt-4 ' onSubmit={handleSubmit}>
        <h5 className='mb-4'>توثيق الهوية الشخصية</h5>
        <div className='row '>
          <div className='col-12 border-bottom'>
            <Document1 setPhoto={setPhoto} photoError={photoError} />
          </div>
          <div className='col-12  mt-5'>
            <Document2
              setPhotoIdentity={setPhotoIdentity}
              photoIdentityError={photoIdentityError}
            />
          </div>
        </div>
        <div className='text-center'>
          <button className='btn btn-secondary text-white fw-bold fs-5 px-5 mt-5  '>
            حفظ
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdentityDocumented;
