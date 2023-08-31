import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
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
                />
                <img
                  className='animate-img-2 left_image_bounce'
                  src='assets/img/about/3.png'
                  alt='img'
                />
                <img
                  className='animate-img-3 top_image_bounce'
                  src='assets/img/banner/5.svg'
                  alt='img'
                />
                <img
                  className='main-img'
                  src='assets/img/about/r.jpg'
                  alt='img'
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
                {/* <h2 className='title'>
                  It Is A Critical Component Of <span>Modern</span> Businesses
                </h2> */}
                <p className='content mb-4 mb-xl-5'>
                We usually do not notice the science behind creating a certain type of infrastructure.
Whether it is the roads, airports, schools, offices, and even the places where we stay. What
is needed is the best quality tools and materials at the disposal of the country, government,
contractor, architect and engineer so that the quality of these infrastructure is maintained
and it serves the purpose for which it has been built
<span className="mt-2">Prismoline offers a range of products that are helpful in transforming roads by marking them.
Our thermoplastic paint is effective for marking roads and our services extend beyond just
marking roads, to practically creating a safe road network for people across the world. </span>

<span className="mt-2">We work quickly and efficiently, ensuring minimal disruption to traffic. Our services are
backed by an impressive range of machinery which includes line marking machines and
accessories suitable for big & small projects. These machines are serviced regularly and
kept in excellent working order. Alongside this, we use the most advanced techniques and
technologies that are at par with the world standards</span>

                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <img className="m-auto" src='assets/img/icon/2.png' alt='img' />
                      </div>
                      <div className='details text-center'>
                        <h5>Mission</h5>
                        <p>
                        “We intend to reduce road fatalities by 50% by 2050, in accordance with the nation's goal.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <img src='assets/img/icon/3.png' alt='img' />
                      </div>
                      <div className='details text-center haskdetails'>
                        <h5>Vision</h5>
                        <p>
                        “We believe in the very essence of Make In India and intend to make roads safer in India. We
aspire to be global leaders in our line of work by providing quality services and products.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
