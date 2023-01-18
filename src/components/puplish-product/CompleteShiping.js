import React from 'react';
import arrow from '../../assets/ICONs/pay/arrow.png';
import bee from '../../assets/ICONs/pay/bee.png';
import bee2 from '../../assets/ICONs/pay/bee2.png';
import etasalat from '../../assets/ICONs/pay/etasalat.png';
import num from '../../assets/ICONs/pay/num.png';
import opay from '../../assets/ICONs/pay/opay.png';
import orange from '../../assets/ICONs/pay/orange.png';
import vodafone from '../../assets/ICONs/pay/vodafone.png';
import wallet from '../../assets/ICONs/pay/wallet.png';
const CompleteShiping = () => {
  return (
    <div className='complete-ship bg-primary p-4 text-white m-4 rounded'>
      <div className='container-fluid'>
        <h3 className='fw-bold text-white text-center'>استكمال عملية الشحن</h3>
        <div className='boxes mt-5'>
          <div className='row g-3'>
            <div className='col-md-6'>
              <div className='box py-2 px-3 bg-white rounded pointer d-flex flex-column justify-content-between'>
                <h5 className='text-primary text-center fw-bold'>
                  اشحن بالمحفظة الإلكترونية
                </h5>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                  <img src={wallet} alt='' className='icon' />
                  <h6 className='text-danger'>(متاح الشحن داخل مصر فقط)</h6>
                  <img src={arrow} alt='' className='icon' />
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                  <img src={orange} alt='orange' />
                  <img src={vodafone} alt='vodafone' />
                  <img src={etasalat} alt='etasalat' />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='box py-2 px-3 bg-white rounded pointer d-flex flex-column justify-content-between'>
                <h5 className='text-primary text-center fw-bold'>
                  (اشحن من الكشك بإستخدام الرقم المرجعي )
                </h5>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                  <img src={num} alt='' className='icon' />
                  <h6 className='text-danger'>(متاح الشحن داخل مصر فقط)</h6>
                  <img src={arrow} alt='' className='icon' />
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                  <img src={opay} alt='orange' />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='box py-2 px-3 bg-white rounded pointer d-flex flex-column justify-content-between'>
                <h5 className='text-primary text-center fw-bold'>
                  اشحن من خلال أقرب منفذ خدمة لـ BEE
                </h5>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                  <img src={bee} alt='' className='icon' />

                  <img src={arrow} alt='' className='icon' />
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                  <img src={bee2} alt='orange' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteShiping;
