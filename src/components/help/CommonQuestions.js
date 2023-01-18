import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { faq_url } from '../../utils/constants';
const CommonQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const fetchFaq = async () => {
    const response = await axios(faq_url);
    setQuestions(response.data.data);
  };
  useEffect(() => {
    fetchFaq();
  }, []);
  return (
    <div className='common-questions row bg-primary rounded h-100 py-5 mx-2 gy-3 '>
      {questions.map((quest) => {
        const { id, name, faq_answer } = quest;
        return (
          <div className='col-md-6'>
            <div
              className='accordion accordion-flush'
              id='accordionFlushExample'
            >
              <div className='accordion-item'>
                <h2 className='accordion-header' id={`flush-heading${id}`}>
                  <button
                    className='accordion-button collapsed d-flex align-items-center fs-3 fw-bold custom-icon'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#flush-collapse${id}`}
                    aria-controls={`flush-collapse${id}`}
                    aria-expanded='false'
                  >
                    <span className='text-end'> {name}</span>
                  </button>
                </h2>
                <div
                  id={`flush-collapse${id}`}
                  className='accordion-collapse collapse lh-base fs-5'
                  aria-labelledby={`flush-heading${id}`}
                  data-bs-parent='#accordionFlushExample'
                >
                  <div className='accordion-body text-primary text-center'>
                    {/* <h4 className=''>{name}</h4> */}
                    <p className='lh-base'>{faq_answer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className='col-md-6'>
        <div className='accordion accordion-flush' id='accordionFlushExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id={`flush-heading${1}`}>
              <button
                className='accordion-button collapsed d-flex align-items-center fs-3 fw-bold custom-icon'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#flush-collapse${1}`}
                aria-controls={`flush-collapse${1}`}
                aria-expanded='false'
              >
                <span> نبذة عن أدساب</span>
              </button>
            </h2>
            <div
              id={`flush-collapse${1}`}
              className='accordion-collapse collapse lh-base fs-5'
              aria-labelledby={`flush-heading${1}`}
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body text-primary text-center'>
                <h4 className=''>نبذة عن أدساب</h4>
                <p className='lh-base'>
                  أدساب هو عبارة عن موقع وأبلكيشن للمستخدمين للبيع والشراء عبر
                  الأنترنت من خلال طرق أمنة علي المستخدمين سواء بياعين او مشترين
                  في أدساب
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CommonQuestions;
