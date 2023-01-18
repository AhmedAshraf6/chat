import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import { register_url } from '../../utils/constants';
const SignUp = () => {
  const { handleTokenRequest } = useUserContext();
  // Handel Api
  const makeRequest = async (url) => {
    try {
      const response = await axios.post(
        url,
        JSON.stringify({
          email: 'ahmedashrafxd76@gmail.com',
          password: formValues.password,
          phone: '',
          name: formValues.name,
          c_password: formValues.conPassword,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      // handleTokenRequest(response.data.token);
      // localStorage.setItem(
      //   'login',
      //   JSON.stringify({ token: response.data.token })
      // );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    name: '',
    phone: '',
    password: '',
    conPassword: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // phone
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  };
  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.nameError = 'من فضلك أدخل اسمك';
    }
    if (!values.phone) {
      errors.phoneError = 'من فضلك أدخل رقم الهاتف';
    }
    if (!values.password) {
      errors.passwordError = 'من فضلك أدخل الرقم السري';
    }
    if (!values.conPassword) {
      errors.conPasswordError = 'من فضلك أعد كتابة الرقم السري';
    }
    if (values.password !== values.conPassword) {
      errors.identicalError = 'كلمة السر يجب أن تكون متطابقتتين';
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      makeRequest(register_url);
    }
  }, [formErrors]);
  // start handle Form
  return (
    <div>
      {/* <h5 className='text-white text-center'>أدخل رقم الهاتف أو الميل</h5> */}
      <div className='box icon-box w-50 position-relative mx-auto mt-4'>
        <input
          className='form-control form-control-lg '
          type='text'
          name='name'
          value={formValues.name}
          placeholder='أدخل اسمك'
          onChange={handleChange}
        />
        {formErrors.nameError && (
          <p className='text-danger mt-2'>{formErrors.phoneError}</p>
        )}
      </div>
      <div className='box icon-box w-50 position-relative mx-auto mt-4'>
        <input
          className='form-control form-control-lg egypt'
          type='text'
          name='phone'
          value={formValues.phone}
          placeholder='10000000000'
          onChange={handleChange}
        />
        {formErrors.phoneError && (
          <p className='text-danger mt-2'>{formErrors.phoneError}</p>
        )}
      </div>
      <div className='box icon-box w-50 position-relative mx-auto mt-4'>
        <input
          className='form-control form-control-lg mt-4 '
          type='password'
          name='password'
          value={formValues.password}
          placeholder='كلمة السر'
          onChange={handleChange}
        />
        {formErrors.passwordError && (
          <p className='text-danger mt-2'>{formErrors.passwordError}</p>
        )}
      </div>
      <div className='box icon-box w-50 position-relative mx-auto mt-4'>
        <input
          className='form-control form-control-lg mt-4 '
          type='password'
          name='conPassword'
          value={formValues.conPassword}
          placeholder='تأكيد كلمة السر'
          onChange={handleChange}
        />
        {formErrors.conPasswordError && (
          <p className='text-danger mt-2'>{formErrors.conPasswordError}</p>
        )}
        {formErrors.identicalError && (
          <p className='text-danger mt-2'>{formErrors.identicalError}</p>
        )}
      </div>
      <div className='box w-100 text-center mt-3'>
        <button
          className='btn btn-light text-primary w-50 fs-6 fw-bold'
          onClick={handleSubmit}
        >
          تسجيل حساب
        </button>
      </div>
    </div>
  );
};

export default SignUp;
