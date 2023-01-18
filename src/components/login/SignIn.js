import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import { login_url } from '../../utils/constants';
const SignIn = () => {
  const { handleTokenRequest } = useUserContext();
  // Handel Api
  const makeRequest = async (url) => {
    try {
      const response = await axios.post(
        url,
        JSON.stringify({
          email: formValues.phone,
          password: formValues.password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      handleTokenRequest(response.data.token);
      localStorage.setItem(
        'login',
        JSON.stringify({ token: response.data.token })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    phone: '',
    password: '',
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
    if (!values.phone) {
      errors.phoneError = 'من فضلك أدخل رقم الهاتف';
    }
    if (!values.password) {
      errors.passwordError = 'من فضلك أدخل الرقم السري';
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      makeRequest(login_url);
    }
  }, [formErrors]);
  // start handle Form
  return (
    <div>
      <h5 className='text-white text-center'>أدخل رقم الهاتف</h5>
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
      <div className='box w-100 text-center mt-3'>
        <button
          className='btn btn-light text-primary w-50 fs-6 fw-bold'
          onClick={handleSubmit}
        >
          تسجيل الدخول
        </button>
      </div>
      <h6 className='forget-pass text-center mt-3 pointer text-decoration-underline'>
        هل نسيت كلمة السر؟
      </h6>
    </div>
  );
};

export default SignIn;
