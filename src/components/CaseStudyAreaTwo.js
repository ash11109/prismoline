import React from "react";
// import { Link } from "react-router-dom";

const CaseStudyAreaTwo = () => {
  return (
    <>
      {/*================== case-study area start ==================*/}
      <div className='case-study-area pd-top-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5'>
              <div className='section-title text-center'>
                <h6 className='sub-title-sky-blue'>WORK GALLERY</h6>
                {/* <h2 className='title'>Artificial Intelligence Real Results</h2> */}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-md-6'>
              <div className='single-case-study-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/service/w1.png' alt='img' loading="lazy"/>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='single-case-study-inner style-2'>
                    <div className='thumb'>
                      <img src='assets/img/service/w4.png' alt='img' loading="lazy"/>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='single-case-study-inner style-2'>
                    <div className='thumb'>
                      <img src='assets/img/service/w3.png' alt='img' loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/banner-5/1.jpg' alt='img' loading="lazy"/>
                </div>
              </div>

              <div className='single-case-study-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/service/w5.jpg' alt='img' loading="lazy"/>
                </div>
                <div className='details'>
                  
                </div>
              </div>
              <div className='single-case-study-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/service/w6.jpg' alt='img' loading="lazy"/>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* ================== case-study area end ==================*/}
    </>
  );
};

export default CaseStudyAreaTwo;
