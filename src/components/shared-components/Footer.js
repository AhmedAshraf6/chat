import React from 'react';
import apple from '../../assets/imgs/footer/apple.png';
import googleplay from '../../assets/imgs/footer/googleplay.png';
import huawei from '../../assets/imgs/footer/huawei.png';
import mas from '../../assets/imgs/footer/mas.png';
import meza from '../../assets/imgs/footer/meza.png';
import visa from '../../assets/imgs/footer/visa.png';
import pay from '../../assets/imgs/footer/pay.png';
import bee from '../../assets/imgs/footer/bee.jpg';

const Footer = () => {
  return (
    <section className='footer py-3'>
      <div className='row'>
        <div className='col-lg-5 '>
          <h4 className='text-primary text-center mb-3'>وسائل الدفع</h4>
          <div className='d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-center'>
            <img src={visa} className=' icon' alt='visa' />
            <img src={mas} className=' icon' alt='mas' />
            <img src={pay} className=' icon' alt='pay' />
            <img src={meza} className=' icon' alt='meza' />
            <img src={bee} className=' icon' alt='bee' />
          </div>
        </div>
        <div className='col-lg-7 mt-3 mt-lg-0'>
          <h4 className='text-primary text-center mb-3'>حمل التطبيق دلوقتي</h4>
          <div
            className='btn-group d-flex flex-column flex-sm-row justify-content-start justify-content-lg-center'
            role='group'
          >
            <button className='btn btn-dark justify-content-center text-white d-flex mx-2 my-2 my-sm-0 align-items-center'>
              Download The App Store
              <img src={apple} alt='apple' />
            </button>
            <button className='btn btn-dark justify-content-center text-white d-flex mx-2 my-2 my-sm-0 align-items-center'>
              Download The App Store
              <img src={googleplay} alt='googleplay' />
            </button>
            <button className='btn btn-dark justify-content-center text-white d-flex mx-2 my-2 my-sm-0 align-items-center'>
              Download The App Store
              <img src={huawei} alt='huawei' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
