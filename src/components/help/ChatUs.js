import React from 'react';
import person3 from '../../assets/imgs/person3.png';
import upload from '../../assets/ICONs/chat/upload.png';
import send from '../../assets/ICONs/chat/send.png';
import attach from '../../assets/ICONs/chat/attach.png';
import image from '../../assets/ICONs/chat/image.png';
import loc from '../../assets/ICONs/chat/loc.png';
const ChatUs = () => {
  return (
    //  h-50 overflow-auto
    <div className='chat-us bg-primary rounded d-flex flex-column justify-content-between'>
      <div className=' py-4'>
        <h3 className='text-center border-bottom border-secondary pb-5 text-white mx-4 '>
          تحدث مع الدعم الفني
        </h3>
        {/* Chat Space */}
        <div className='chat-space my-5 mx-1 mx-sm-5 '>
          {/* Client Chat */}
          <div className='client-chat d-flex align-items-center justify-content-start gap-3'>
            <div className='d-flex flex-column align-items-center'>
              <img
                src={person3}
                alt='person2'
                className='rounded-circle avatar'
              />
              <h6 className='text-white mt-2'>ذياد فؤاد</h6>
            </div>
            <div className='message bg-light py-3 px-2 rounded d-flex '>
              <p className='text-primary m-0 p-0 fs-6 fw-bold px-2'>
                لدي مشكلة ف نشر الاعلانات
              </p>
              <span className='text-muted  px-2'>10:10 AM</span>
            </div>
          </div>
          {/* Team Chat */}
          <div className='team-chat d-flex align-items-center justify-content-end gap-3'>
            <div className='message bg-light py-3 px-2 rounded d-flex '>
              <span className='text-muted  px-2'>10:10 AM</span>
              <p className='text-primary m-0 p-0 fs-6 fw-bold px-2'>
                لدي مشكلة ف نشر الاعلانات
              </p>
            </div>
            <div className='d-flex flex-column align-items-center'>
              <img
                src={person3}
                alt='person2'
                className='rounded-circle avatar'
              />
              <h6 className='text-white mt-2'>ذياد فؤاد</h6>
            </div>
          </div>
        </div>
        {/* Chat Space */}
      </div>
      <div className='taik bg-info d-flex justify-content-between align-items-center rounded mx-1 text-primary py-3 px-3'>
        <span
          className='pointer'
          data-bs-toggle='modal'
          data-bs-target='#upload'
        >
          <img src={upload} alt='upload' className='icon' />
        </span>
        {/* Modal */}
        <div
          className='modal fade '
          id='upload'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content bg-primary text-white'>
              <div className='modal-header border-0 me-auto'>
                <button
                  type='button'
                  className='btn-close btn-close-white'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body d-flex justify-content-around'>
                <div className='text-center'>
                  <label htmlFor='file-input' className='pointer'>
                    <img src={attach} alt='attach' className='icon' />
                  </label>
                  <input id='file-input' type='file' />
                  <h5 className='mt-3'>المرفقات</h5>
                </div>
                <div className='text-center'>
                  <label htmlFor='file-input' className='pointer'>
                    <img src={image} alt='attach' className='icon' />
                  </label>
                  <input id='file-input' type='file' />
                  <h5 className='mt-3'>المعرض</h5>
                </div>
                <div className='text-center'>
                  <label htmlFor='file-input' className='pointer'>
                    <img src={loc} alt='attach' className='icon' />
                  </label>
                  <input id='file-input' type='file' />
                  <h5 className='mt-3'>الموقع</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <input
          type='text'
          className='message w-100 mx-2 h-100 border-0 outline-0 bg-info'
          placeholder='اكتب رسالة'
        />
        <span>
          <img src={send} alt='send' className='icon' />
        </span>
      </div>
    </div>
  );
};

export default ChatUs;
