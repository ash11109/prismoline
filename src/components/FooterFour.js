import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterFour = () => {
  return (
    <>
      {/* ================== Footer Four Start ==================*/}
      <footer
        className='footer-area bg-cover mt-0 pd-top-120'
        style={{ backgroundImage: 'url("assets/img/bg/14.png")' }}
      >
        <div className='footer-subscribe rounded-2'>
          <div className='container rounded-2'>
            <div className='footer-subscribe-inner rounded-2 box-shadow style-2 bg-white p-0 bg-cover'>
              <div className='media bg-base-2 rounded-2'>
                <div className='media-left me-3 align-self-xl-center'>
                  <img src='assets/img/icon/40.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h6 className='text-white'>+91-9199960666</h6>
                  <p className='mb-0 text-white'>Call 24HR / 7Days</p>
                </div>
              </div>
              <div className='row align-self-center rounded-2'>
                <div className='col-lg-4'>
                  <div className='border-1'>
                    <input type='text' placeholder='Your Name' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='border-1'>
                    <input type='text' placeholder='Your Email' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <Link
                    className='btn w-100 btn-black sky border-radius-0'
                    to='/'
                  >
                    Submit now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Contact us</h4>
                <div className='widget widget_contact'>
                  <ul className='social-media mt-4'>
                    <li>
                      <Link to='https://www.facebook.com/prismoline/' className='sky'>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to='#' className='sky'>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to='' className='sky'>
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to='https://www.youtube.com/channel/UC8TOqw9f2oQvgwsvS4bfBig/featured' className='sky'>
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Corporate Office –</h4>               
                <div className='widget widget_contact'>
                  <ul className='details text-white'>
                    <li>
                      <FaMapMarkerAlt className='sky' />
                      195/B Mandeliya Nagar , Bariatu , Ranchi -834009 ,  Jharkhand, INDIA
                    </li>
                    <li className='mt-3'>
                      <FaPhoneAlt className='sky' /> +91-9199960666
                    </li>
                    <li className='mt-2'>
                      <FaEnvelope className='sky' /> inf@prismoline.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Manufacturing Unit –</h4>
                <div className='widget widget_contact'>
                  <ul className='details text-white'>
                    <li>
                      <FaMapMarkerAlt className='sky' />
                      36 (P), Phase II , Industrial Area , Tatisilwai , Ranchi, 835103 ,Jharkhand, INDIA
                    </li>
                    <li className='mt-3'>
                      <FaPhoneAlt className='sky' /> +91-9199960666
                    </li>
                    <li className='mt-2'>
                      <FaEnvelope className='sky' /> inf@prismoline.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Prismoline is also at –</h4>

                 <p> Patna, Sasaram ( Bihar ) </p>
                 <p> Asansol , Siliguri ( WB ) </p>
                 <p> Guwahati ( Assam ) </p>
                 <p> Bhubaneshwar ( Odisha ) </p>
                 <p> Raipur ( Chattisgarh ) </p>
                 <p> Jabalpur ( MP ) </p>

              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p> © Prismoline 2023 | All Rights Reserved | Design by sysroot solution </p>
              </div>
              <div className='col-md-6 text-lg-end'>
                <Link to='/'>Trams &amp; Condition</Link>
                <Link to='/'>Privacy Policy</Link>
                <Link to='/'>Contact Us </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterFour;
