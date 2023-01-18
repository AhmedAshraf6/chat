import React from 'react';

const FilterTop = () => {
  return (
    <div className='  border-bottom border-secondary py-3'>
      <div className='row'>
        <div className='col-lg-3'>
          <h4 className='text-primary border-start border-2 border-primary '>
            الفلاتر
          </h4>
        </div>
        <div className='col-lg-5 '>
          <div
            className='btn-group w-100'
            role='group'
            aria-label='Basic example'
          >
            <button type='button' className='btn btn-secondary text-white  '>
              الاعلانات المرفقة بفديوهات
            </button>
            <button type='button' className='btn btn-primary mx-2 '>
              الاعلانات المرفقة بصور
            </button>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='d-flex align-items-center'>
            <h5 className='text-primary text-nowrap mx-2'>صنف حسب:</h5>
            {/* <select
              className='form-select w-100  '
              aria-label='Default select example'
            >
              <option value='1'>المدرجة حديثا</option>
              <option value='2'>الأكثر صلة</option>
              <option value='3'>الأعلي سعرا</option>
              <option value='4'>الأقل سعرا</option>
            </select> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTop;
