import React from "react";
import { Link } from "react-router-dom";
import './ash.css';

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className='service-area bg-gray bg-relative pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='section-title '>
                <h2 className='sub-title-sky-blue text-center'>Our Vision</h2>
                <p >
                  We are the country's leading manufacturer and exporter of thermoplastic materials.
                  Prismoline is skilled in advanced thermoplastic formulation and is supported by the rich
                  experience of our team. Our expertise and latest techniques help make roads safer for
                  people around the world. We intend to provide quality and safety on the road and work
                  tirelessly to safeguard the interests of our customers as well as the environment.
                </p>
              </div>
            </div>
          </div>
          <div className='row custom-no-gutter'>
            <div className='col-lg-4 col-md-6'>
              <h4>What do we do?</h4>
              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/7.svg' alt='img' loading="lazy" />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    Our specialties
                  </h5>
                  <p className='mb-0'>
                    Prismoline is a top company in the country that specialises in marking roads
                    and highways. We specialise in hot thermoplastic machine marking, hand marking, road
                    marking for airports, parking lots as well as excel in fixing road studs as well. We provide
                    quality services that are at par with the quality standards globally
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/8.svg' alt='img' loading="lazy" />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    Our Techniques
                  </h5>
                  <p className='mb-0'>
                    We use advanced and innovative techniques to mark roads around the
                    world. We work round the clock and ensure that our work is completed in record time so that
                    your work is not disrupted. We tailor our work as per requirements
                  </p>
                </div>
              </div>

              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/8.svg' alt='img' loading="lazy" />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    Our priorities
                  </h5>
                  <p className='mb-0'>
                    Prismoline keeps road safety on top and we believe in making roads safe for
                    the people across the world. We intend on working with like minded people who want to
                    create a network that emphasises Road Safety.

                  </p>
                </div>
              </div>



              {/* <div className='single-service-inner-3 single-service-inner-3-left mb-0'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/9.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details'>Safety is our priority!</Link>
                  </h5>
                  <p className='mb-0'>
                  Our first and foremost goal is to practice road safety throughout our country. We have been developing a network whose first emphasis is on Road Safety and have built a huge database for the same, to get to work with like minded people
                  </p>
                </div>
              </div> */}

            </div>
            <div className='col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none'>
              <div className='service-thumb service-middle-section align-self-end ash-center-img'>
                <img src='assets/img/service-icon/as1.png' alt='img' loading="lazy" />
                <img src='assets/img/service-icon/as2.png' alt='img' loading="lazy" />
                <img src='assets/img/service-icon/as3.png' alt='img' loading="lazy" />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <h4>Why work with us?</h4>
              <div className='single-service-inner-3 single-service-inner-3-right'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/10.svg' alt='img' loading="lazy" />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    Advanced Quality Management

                  </h5>
                  <p className='mb-0'>

                    Our quality management system is advanced and made
                    using world class technology. Quality assurance starts as early as the incoming of raw
                    materials, takes care of the entire manufacturing as well as the finished product. We also
                    have a computerised batch control manufacturing facility that also helps in delivering a high
                    quality result in the end.
                  </p>
                </div>
              </div>

              <div className='single-service-inner-3 single-service-inner-3-right'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/11.svg' alt='img' loading="lazy" />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details'>Maximum Customer Satisfaction</Link>
                  </h5>
                  <p className='mb-0'>
                    We customise our services and working techniques in a
                    way that provides utmost satisfaction to the customers. We believe in working in a way that
                    prioritises the needs of the customers and provides them with an excellent result.
                  </p>
                </div>
              </div>

              <div className='single-service-inner-3 single-service-inner-3-right mb-0'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/12.svg' alt='img' loading="lazy" />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details'>We Care</Link>
                  </h5>
                  <p className='mb-0'>
                    : Prismoline ensures to make safe roads that ensures the safety of everyone and
                    we strive to work hard for safe traffic across the world through our services and networks
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;
