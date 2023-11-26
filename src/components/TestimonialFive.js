import React from "react";
import './AshCss.css';

const TestimonialFive = () => {
  return (
    <>
      {/* =================== Testimonial Five Start ===================*/}
      {/* <div
        className='testimonial-area bg-left-50 pd-top-120 pd-bottom-90'
        style={{ backgroundImage: 'url("assets/img/about/t1.jpg")' }}
      > */}
      <div className='ash-testimonial-area'>
        <div className='row'>
          <div className='col'>
            <div className='bg-white box-shadow border-radius-5 p-xl-5 p-4'>
              <div className='section-title'>
                <h6 className='sub-title-sky-blue'>TESTIMONIAL</h6>
                <h2 className='title'>
                  Revolutionizing for <br />the Future 
                </h2>
              </div>
              <ul
                className='nav testimonial-tab nav-tabs'
                id='myTab'
                role='tablist'
              >
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link'
                    id='home-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#home'
                    type='button'
                    role='tab'
                    aria-controls='home'
                    aria-selected='true'
                  >
                    <img src='assets/img/testimonial/1.png' alt='img' loading="lazy"/>
                  </button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link active'
                    id='profile-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#profile'
                    type='button'
                    role='tab'
                    aria-controls='profile'
                    aria-selected='false'
                  >
                    <img src='assets/img/testimonial/2.png' alt='img' loading="lazy"/>
                  </button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link'
                    id='contact-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#contact'
                    type='button'
                    role='tab'
                    aria-controls='contact'
                    aria-selected='false'
                  >
                    <img src='assets/img/testimonial/3.png' alt='img' loading="lazy"/>
                  </button>
                </li>
              </ul>
              <div className='tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='home'
                  role='tabpanel'
                  aria-labelledby='home-tab'
                >
                  {/* <h4 className='pt-xl-5 pt-4'>Albert Flores</h4>
                  <p>Senior Manager</p> */}
                  <p className='pb-0 border-top-1 pt-3 mt-3'>
                  We at Prismoline intend to provide our customers with superior quality road marking services 
and thermal paints that suit their requirements. We strive to provide our customers with the 
satisfaction of our services. 

                  </p>
                </div>
                <div
                  className='tab-pane fade'
                  id='profile'
                  role='tabpanel'
                  aria-labelledby='profile-tab'
                >
                  <h4 className='pt-xl-5 pt-4'>Alex Flores</h4>
                  <p>Senior Manager</p>
                  <p className='pb-0 border-top-1 pt-3 mt-3'>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div
                  className='tab-pane fade'
                  id='contact'
                  role='tabpanel'
                  aria-labelledby='contact-tab'
                >
                  <h4 className='pt-xl-5 pt-4'>Robart Downly</h4>
                  <p>Senior Designer</p>
                  <p className='pb-0 border-top-1 pt-3 mt-3'>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== Testimonial Five End ===================*/}
    </>
  );
};

export default TestimonialFive;
