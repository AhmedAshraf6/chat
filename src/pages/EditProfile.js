import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BasicInfo from '../components/edit-profile/BasicInfo';
import IdentityDocumented from '../components/edit-profile/IdentityDocumented';

import { useMainContext } from '../contexts/MainProvider';
import { useUserContext } from '../contexts/UserProvider';
import { update_profile_url } from '../utils/constants';
const EditProfile = () => {
  const { token } = useUserContext();
  const [values, setValues] = useState({});
  const {
    viewerName,
    identityName,
    address,
    phoneNumber,
    email,
    image,
    photo,
    photoIdentity,
  } = values;
  const handleUpdateProfile = async () => {
    const {
      viewerName,
      identityName,
      address,
      phoneNumber,
      email,
      image,
      photo,
      photoIdentity,
    } = values;
    try {
      const response = await axios.post(
        update_profile_url,
        JSON.stringify({
          name: viewerName,
          email: email,
          sur_name: identityName,
          phone: phoneNumber,
          adress: address,
          image: image,
          id_image: photo,
          id_user_image: photoIdentity,
        }),
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      // console.log(values);
    } catch (error) {
      console.log(error);
      // console.log(values);
    }
  };
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();

  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  const [showIdentity, setShowIdentity] = useState(false);

  useEffect(() => {
    if (
      viewerName &&
      identityName &&
      address &&
      phoneNumber &&
      email &&
      image &&
      photo &&
      photoIdentity
    ) {
      handleUpdateProfile();
      console.log('done');
    } else {
      console.log('fail');
    }
  }, [values]);

  return (
    <section className='edit-profile bg-primary p-4 text-white my-4 mx-1 mx-sm-4  rounded'>
      <div className='container-fluid'>
        <div className='box border-bottom pb-4'>
          <h4>تعديل الملف الشخصي</h4>
        </div>
        {!showIdentity && (
          <BasicInfo setShowIdentity={setShowIdentity} setValues={setValues} />
        )}
        {showIdentity && (
          <IdentityDocumented setValues={setValues} values={values} />
        )}
      </div>
    </section>
  );
};

export default EditProfile;
