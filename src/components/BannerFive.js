import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const BannerFive = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerFive Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 pb-0 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner-5/1.jpg")' }}
      >
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-lg-6 pb-xl-5 align-self-center'>
              <div className='banner-inner pe-xl-4 pb-5 mt-5'>
                <h2
                  className='title text-white'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >
                  Safe Roads
                </h2>
                <h2
                  className='title text-white'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >
                  Safer world
                </h2>
                <h2
                  className='content haskpara pe-xl-4'
                  data-aos='fade-right'
                  data-aos-delay='350'
                  data-aos-duration='1500'
                >
                  Mark roads with the Best Thermoplastic Paint

                </h2>
                <Link
                  className='btn btn-border-base-2'
                  data-aos='fade-right'
                  data-aos-delay='450'
                  data-aos-duration='1500'
                  to='/about'
                >
                  Discover More <FaPlus />
                </Link>
                <div
                  className='d-inline-block align-self-center '
                  data-aos='fade-right'
                  data-aos-delay='350'
                  data-aos-duration='1500'
                >
                  <div
                    className='video-play-btn-hover'
                    onClick={() => setOpen(true)}
                  >
                    <img src='assets/img/video.svg' alt='img' />
                    <h6 className='d-inline-block text-white'>how we work</h6>
                  </div>

                  <div></div>
                </div>
                <ModalVideo
                  channel='youtube'
                  autoplay
                  isOpen={isOpen}
                  videoId='8CqLtT3B6hw?si'
                  onClose={() => setOpen(false)}
                />
              </div>
            </div>
            <div className='col-lg-6 col-md-9 align-self-end'>
              <div className='banner-thumb-2 mt-4 mt-lg-0'>
                <div className='main-img-wrap'>
                  <img
                    className='banner-animate-img banner-animate-img-3 top_image_bounce'
                    src='assets/img/banner-5/7.svg'
                    alt='img'
                    loading="lazy"
                  />
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFive End ==================*/}
    </>
  );
};

export default BannerFive;
