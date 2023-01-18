import React, { useState } from 'react';
const SelectSalary = ({
  handleChangeImages,
  handleChange,
  formValues,
  setFormValues,
  formErrors,
  handleChangeVideo,
  deleteSignleImage,
}) => {
  const [currentVideo, setCurrentVideo] = useState();

  // video
  if (formValues.videoUploaded) {
    const readerv = new FileReader();
    readerv.onload = () => {
      if (readerv.readyState === 2) {
        setCurrentVideo(readerv.result);
      }
    };
    readerv.readAsDataURL(formValues.videoUploaded);
  }
  return (
    <>
      <h4>حدد السعر</h4>
      <div className='price my-3'>
        <h5>السعر</h5>
        <input
          className='form-control form-control-lg text-muted w-25'
          type='text'
          placeholder='ج.م'
          name='salary'
          onChange={handleChange}
        />
      </div>

      {formErrors.salaryError && (
        <p className='text-danger'>{formErrors.salaryError}</p>
      )}
      {/* isNegotitable */}
      <div className='my-3'>
        <h4>قابل للتفاوض ؟</h4>
        <div className='d-flex justify-content-start my-4'>
          {/* Checkbox */}
          <div className='radio-group'>
            <label className='radio ms-5'>
              <input
                type='radio'
                name='isNegotiatable'
                value='1'
                onChange={handleChange}
              />
              نعم
              <span></span>
            </label>
            <label className='radio '>
              <input
                type='radio'
                name='isNegotiatable'
                value='0'
                onChange={handleChange}
              />
              لا
              <span></span>
            </label>
          </div>
        </div>
        {formErrors.isNegotiatableError && (
          <p className='text-danger'>{formErrors.isNegotiatableError}</p>
        )}
      </div>
      <div className='my-3'>
        <h4>تحميل صورة أو فيديو</h4>
        <div className='d-flex justify-content-start my-4'>
          {/* Checkbox */}
          <div className='radio-group'>
            <label className='radio ms-5'>
              <input
                type='radio'
                value='video'
                name='upload'
                checked={formValues.upload === 'video'}
                onChange={handleChange}
              />
              فيديو
              <span></span>
            </label>
            <label className='radio '>
              <input
                type='radio'
                value='picture'
                name='upload'
                checked={formValues.upload === 'picture'}
                onChange={handleChange}
              />
              صورة
              <span></span>
            </label>
          </div>
        </div>
        {/* video */}
        {formValues.upload === 'video' && !formValues.videoUploaded && (
          <div>
            <div className='video-upload bg-light w-50 bg-light rounded'>
              <input
                type='file'
                accept='video/*'
                className='custom-video-upload pointer w-100 h-100'
                onChange={handleChangeVideo}
              />
            </div>
            {formErrors.videoErrors && (
              <p className='text-danger'>{formErrors.videoErrors}</p>
            )}
            {formErrors.maxVideoUpload && (
              <p className='text-danger'>{formErrors.maxVideoUpload}</p>
            )}
          </div>
        )}
        {formValues.upload === 'video' && formValues.videoUploaded && (
          <div className='video-container position-relative'>
            <div className='video-upload w-50'>
              <video
                controls='controls'
                src={currentVideo}
                type='video/mp4'
                className='w-100 h-100'
              ></video>
            </div>

            <div className='text-center btn-cancel w-50 mt-2'>
              <button
                className='btn btn-light'
                onClick={() =>
                  setFormValues({ ...formValues, videoUploaded: '' })
                }
              >
                الغاء
              </button>
            </div>
          </div>
        )}

        {/* Picture */}
        {formValues.upload === 'picture' && (
          <div className='row mt-4 gy-3'>
            <div className='col-lg-2 col-sm-3 '>
              <div className='picture-upload bg-light  rounded position-relative'>
                {!formValues.images.img1.img1 && (
                  <input
                    type='file'
                    className='custom-picture-upload pointer w-100 h-100'
                    accept='image/*'
                    name='img1'
                    onChange={handleChangeImages}
                  />
                )}
                {formValues.images.img1.img1 && (
                  <>
                    <input
                      type='file'
                      className='img-cover pointer '
                      accept='image/*'
                      name='img1'
                      onChange={handleChangeImages}
                      style={{
                        backgroundImage: `url(${formValues.images.img1.img1})`,
                      }}
                    />

                    <button
                      type='button'
                      className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                      aria-label='Close'
                      onClick={() => deleteSignleImage('img1')}
                    ></button>
                  </>
                )}
              </div>
            </div>

            <div className='col-lg-2 col-sm-3 '>
              <div className='picture-upload bg-light  rounded position-relative'>
                {!formValues.images.img2.img2 && (
                  <input
                    type='file'
                    className='custom-picture-upload pointer w-100 h-100'
                    accept='image/*'
                    name='img2'
                    onChange={handleChangeImages}
                  />
                )}
                {formValues.images.img2.img2 && (
                  <>
                    <button
                      type='button'
                      className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                      aria-label='Close'
                      onClick={() => deleteSignleImage('img2')}
                    ></button>
                    <input
                      type='file'
                      className='img-cover pointer '
                      accept='image/*'
                      name='img2'
                      onChange={handleChangeImages}
                      style={{
                        backgroundImage: `url(${formValues.images.img2.img2})`,
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className='col-lg-2 col-sm-3 '>
              <div className='picture-upload bg-light  rounded position-relative'>
                {!formValues.images.img3.img3 && (
                  <input
                    type='file'
                    className='custom-picture-upload pointer w-100 h-100'
                    accept='image/*'
                    name='img3'
                    onChange={handleChangeImages}
                  />
                )}
                {formValues.images.img3.img3 && (
                  <>
                    <button
                      type='button'
                      className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                      aria-label='Close'
                      onClick={() => deleteSignleImage('img3')}
                    ></button>
                    <input
                      type='file'
                      className='img-cover pointer '
                      accept='image/*'
                      name='img3'
                      onChange={handleChangeImages}
                      style={{
                        backgroundImage: `url(${formValues.images.img3.img3})`,
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <h6>استخدم الوضع الأفقي في الكاميرا للحصول على صور غلاف أفضل</h6>
            {formErrors.imagesError && (
              <p className='text-danger'>{formErrors.imagesError}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectSalary;
