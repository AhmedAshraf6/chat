import React from 'react';

const ProductDetails = ({
  brand,
  model,
  price,
  payment_option,
  title,
  disription,
  type,
  status,
}) => {
  return (
    <div className='products-details mt-5'>
      <div className='box bg-primary py-4 px-3 text-white rounded'>
        <h4 className='fw-bold'>{title}</h4>
        <div className='row  gy-3 '>
          <div className='col-sm-6 '>
            <div className='d-flex justify-content-between my-3'>
              <h5 className='text-white  '>النوع</h5>
              <h5 className='text-secondary  '>{type}</h5>
            </div>
            <div className='d-flex justify-content-between my-3  '>
              <h5 className='text-white '>الماركة</h5>
              <h5 className='text-secondary '>{brand}</h5>
            </div>
            <div className='d-flex justify-content-between my-3  '>
              <h5 className='text-white '>الحالة</h5>
              <h5 className='text-secondary '>{status}</h5>
            </div>
            <div className='d-flex justify-content-between my-3'>
              <h5 className='text-white '>اللون</h5>
              <h5 className='text-secondary '>جديد</h5>
            </div>
          </div>
          <div className='col-sm-6 '>
            <div className='d-flex justify-content-between my-3'>
              <h5 className='text-white  '>السعر</h5>
              <h5 className='text-secondary  '>{price}</h5>
            </div>
            <div className='d-flex justify-content-between my-3  '>
              <h5 className='text-white '>طريقة الدفع</h5>
              <h5 className='text-secondary '>{payment_option}</h5>
            </div>
            <div className='d-flex justify-content-between my-3  '>
              <h5 className='text-white '>موضة</h5>
              <h5 className='text-secondary '>{model}</h5>
            </div>
            <div className='d-flex justify-content-between my-3'>
              <h5 className='text-white '>نوع الاعلان</h5>
              <h5 className='text-secondary '>{type}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='box bg-primary py-4 px-3 text-white rounded mt-4'>
        <h4 className='fw-bold'>الوصف</h4>
        <p>{disription} </p>
      </div>
    </div>
  );
};

export default ProductDetails;
