import React from 'react';
import { useState } from 'react';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const fetchValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      type='text'
      className='form-control search fs-6 fw-bold'
      aria-label='Sizing example input'
      aria-describedby='inputGroup-sizing-default'
      placeholder='ابحث عما تريد'
      onKeyUp={fetchValue}
    />
  );
};

export default SearchInput;
