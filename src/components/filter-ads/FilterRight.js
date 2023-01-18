import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMainContext } from '../../contexts/MainProvider';

const FilterRight = () => {
  const { cat, subcat } = useParams();
  const { sublinks } = useMainContext();
  const [selectedSubCat, setSelectedSubCat] = useState(subcat);
  const subcategories = sublinks.find((l) => l.page == cat);
  const handleChange = () => {};
  return (
    <div className='filter-right mt-3 '>
      <div className='box border-bottom border-2'>
        <h4 className='text-primary'>الفئات</h4>
        <h4 className='text-muted'>جميع الفئات</h4>
        <div className='me-3'>
          <h4 className='text-primary'>{cat}</h4>
          <select
            className='form-select me-2 overflow-hidden text-primary bg-transparent border-0 box'
            multiple
            onChange={handleChange}
            value={[`${selectedSubCat}`]}
            // defaultValue={subcat}
          >
            {subcategories &&
              subcategories.links.map((l, index) => {
                return (
                  <option
                    value={l.label}
                    className='me-3 text-primary'
                    // selected={l.label == subcat}
                    onChange={(e) => setSelectedSubCat(e.target.value)}
                    key={index}
                  >
                    {l.label}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <div className='box mt-3 '>
        <h4 className='text-primary my-3 me-2'>الموقع</h4>
        {/* <select className='form-select ' aria-label='Default select example'>
          <option value='1'>مصر</option>
          <option value='2'>الاسكندرية</option>
          <option value='3'>السويس</option>
          <option value='4'>فلسطين</option>
        </select> */}
      </div>

      <div className='box mt-3  '>
        <h4 className='text-primary my-3 me-2'>السعر</h4>
        <div className='d-flex'>
          <input
            className='form-control bg-primary text-white'
            type='number'
            value='0'
          />
          <input
            className='form-control bg-primary text-white'
            type='number'
            value='2000'
          />
        </div>
      </div>
      <div className='box mt-3  '>
        <h4 className='text-primary my-3 me-2'>الحالة</h4>
        <div className='form-check d-flex justify-content-start align-items-center text-primary fs-5'>
          <input
            className='form-check-input mx-2'
            type='checkbox'
            value='new'
            id='defaultCheck1'
          />
          <label
            className='form-check-label text-primary fw-bold'
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
            className='form-check-label text-primary fw-bold'
            htmlFor='defaultCheck2'
          >
            مستعمل
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterRight;
