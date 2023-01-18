import React, { useEffect } from 'react';
import { BsFillFilterSquareFill } from 'react-icons/bs';
import FilterBody from '../components/filter-ads/FilterBody';
import FilterRight from '../components/filter-ads/FilterRight';
import FilterTop from '../components/filter-ads/FilterTop';
import { useMainContext } from '../contexts/MainProvider';

const FilterAds = () => {
  const { toggleFilterFunc, toggleNavbarFunc, closeSubmenu } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='filter-ads  '>
      <div className='container-fluid'>
        <div className='row'>
          {/* Desktop Devices */}
          <div className='d-none d-lg-block col-12'>
            <FilterTop />
          </div>
          <div className='d-none d-lg-block col-lg-3'>
            <FilterRight />
          </div>
          {/* Desktop Devices */}
          {/* Small Devices And Desktops */}
          <div className='d-block d-lg-none col-12'>
            <div className='py-3'>
              <button
                className='btn btn-primary  fw-bold d-flex align-items-center'
                onClick={() => toggleFilterFunc(true)}
              >
                فلاتر
                <BsFillFilterSquareFill className='mx-2' />
              </button>
            </div>
          </div>
          {/* Small Devices And Desktops */}
          <div className='col-lg-9'>
            <FilterBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterAds;
