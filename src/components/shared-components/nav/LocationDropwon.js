import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import loupe from '../../../assets/ICONs/loupe.png';

const LocationDropwon = () => {
  const [currentLoc, setCurrentLoc] = useState('minya');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const optionData = [
    {
      name: 'استخدم الموقع الحالي',
      value: 'current_loc',
    },
  ];
  const handleChange = (e) => {
    if (e.target.value == 'current_loc') {
      fetchLang();
      setCurrentLoc(e.target.value);
    } else {
      setCurrentLoc(e.target.value);
    }
  };
  // console.log(location);
  const fetchLang = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };

  return (
    <div className='location position-relative'>
      <select
        className='form-select search text-primary fw-bold fs-6 pointer'
        onChange={handleChange}
        value={currentLoc}
      >
        {optionData.map((opt, index) => {
          return (
            <option value={opt.value} key={index}>
              {opt.name}
              {currentLoc == opt.value && currentLoc == 'current_loc'}
            </option>
          );
        })}
      </select>
      <img
        src={loupe}
        alt='loupe'
        className='icon position-absolute custom-icon '
      />
    </div>
  );
};

export default LocationDropwon;
