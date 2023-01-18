import React, { useState, useEffect } from 'react';
import ChatUs from '../components/help/ChatUs';
import CommonQuestions from '../components/help/CommonQuestions';

import { useMainContext } from '../contexts/MainProvider';
const Help = () => {
  const { toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);
  const [toggleClick, setToggleClick] = useState(true);

  return (
    <div className='help my-5'>
      <div className='container-fluid'>
        <div className='row gy-3'>
          <div className='col-md-2 text-center'>
            <h3 className='text-primary'>المساعدة</h3>
            <div
              class='btn-group-vertical'
              role='group'
              aria-label='Vertical button group'
            >
              <button
                type='button'
                class='btn btn-secondary text-white btn-lg'
                onClick={() => setToggleClick(true)}
              >
                تحدث معنا
              </button>
              <button
                type='button'
                class='btn btn-primary text-white btn-lg mt-2'
                onClick={() => setToggleClick(false)}
              >
                الاسئلة الشائعة
              </button>
            </div>
          </div>
          <div className='col-md-10'>
            {toggleClick && <ChatUs />}
            {!toggleClick && <CommonQuestions />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
