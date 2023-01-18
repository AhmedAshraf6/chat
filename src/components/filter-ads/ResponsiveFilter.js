import React from 'react';
import rightwhar from '../../assets/ICONs/rightwhar.png';
import { useMainContext } from '../../contexts/MainProvider';
const ResponsiveFilter = () => {
  const { toggleFilterFunc } = useMainContext();
  return (
    <div className='responsive-filter text-white'>
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex align-items-center border-bottom py-4'>
            <img
              src={rightwhar}
              alt='rightwhar'
              className='icon'
              onClick={() => toggleFilterFunc(false)}
            />
            <h5 className='text-white pointer'>فلاتر</h5>
          </div>
        </div>
        <div className='col-12  border-bottom py-4'>
          <div className='btn-group-vertical ' role='group'>
            <button type='button' className='btn btn-secondary text-white '>
              الاعلانات المرفقة بفديوهات
            </button>
            <button type='button' className='btn btn-light mt-2 '>
              الاعلانات المرفقة بصور
            </button>
          </div>
        </div>
        <div className='col-12  border-bottom py-4'>
          <h5>صنف حسب:</h5>
          <select className='form-select '>
            <option value='1'>المدرجة حديثا</option>
            <option value='2'>الأكثر صلة</option>
            <option value='3'>الأعلي سعرا</option>
            <option value='4'>الأقل سعرا</option>
          </select>
        </div>
        <div className='col-12  border-bottom py-4'>
          <h5>الفئات</h5>
          <select className='form-select'>
            <option value='1' className=' text-primary'>
              One
            </option>
            <option value='2' className=' text-primary'>
              Two
            </option>
            <option value='3' className=' text-primary'>
              Three
            </option>
          </select>
        </div>
        <div className='col-12  border-bottom py-4'>
          <h5>الموقع</h5>
          <select className='form-select '>
            <option value='1'>مصر</option>
            <option value='2'>الاسكندرية</option>
            <option value='3'>السويس</option>
            <option value='4'>فلسطين</option>
          </select>
        </div>
        <div className='col-12  border-bottom py-4'>
          <h5>السعر</h5>
          <div>
            <input
              className='form-control bg-light text-primary'
              type='number'
              value='0'
            />
            <input
              className='form-control bg-light text-primary mt-2'
              type='number'
              value='2000'
            />
          </div>
        </div>
        <div className='col-12  border-bottom py-4'>
          <h5>الحالة</h5>
          <div className='form-check d-flex justify-content-start align-items-center text-primary fs-5'>
            <input
              className='form-check-input mx-2'
              type='checkbox'
              value='new'
              id='defaultCheck1'
            />
            <label
              className='form-check-label text-white fw-bold'
              htmlFor='defaultCheck1'
            >
              جديد
            </label>
          </div>
          <div className='form-check d-flex justify-content-start align-items-center text-primary fs-5'>
            <input
              className='form-check-input mx-2'
              type='checkbox'
              value='used'
              id='defaultCheck2'
            />
            <label
              className='form-check-label text-white fw-bold'
              htmlFor='defaultCheck2'
            >
              مستعمل
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveFilter;
