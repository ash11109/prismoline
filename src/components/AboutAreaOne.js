import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      <div className='about-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='about-thumb-inner pe-xl-5 me-xl-5 '
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img
                  className='animate-img-1 top_image_bounce'
                  src='assets/img/about/2.png'
                  alt='img'
                  loading="lazy"
                />
                <img
                  className='animate-img-2 left_image_bounce'
                  src='assets/img/about/3.png'
                  alt='img'
                  loading="lazy"
                />
                <img
                  className='animate-img-3 top_image_bounce'
                  src='assets/img/banner/5.svg'
                  alt='img'
                  loading="lazy"
                />
                <img
                  className='main-img'
                  src='assets/img/bg/c1.jpg'
                  alt='img'
                  loading="lazy"
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='50'
              data-aos-duration='150'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  <span> PRISMOLINE </span> 
                </h2>
                <p className='content mb-4 mb-xl-5'>
                  was established to make road safer. We are leading manufacturer & exporter of thermoplastic materials. Our rich experience & expertise in thermoplastic, along with advanced thermoplastic formulation, are leading the way to safer traffic on road for world’s population. We are committed to quality, Safety, Environment & Customers. Our Quality management system starts with quality assurance testing on all incoming raw materials, entire manufacturing process, and finished product. Our quality control system & computerized batch control manufacturing facility delivers excellent product every time. PRISMOLINE is passionate towards maintaining quality from raw material to application on road by providing expert technical field support. At PRISMOLINE our goal is 100% customer satisfaction. We believe that our success depends only on success of our valued customers. We believe in producing environment friendly marking and BS materials. At the same time all making match or exceed standards like the MORTH 803.4 and BS 36262.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAreaOne;
