import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCalendarAlt,
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
                  <a
                    className='btn w-100 btn-black sky border-radius-0'
                    href='#'
                  >
                    Submit now
                  </a>
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
                  <ul className='details text-white'>
                    <li>
                      <FaMapMarkerAlt className='sky' />
                      Hill view lane, Ratu Road Ranchi-834001 Jharkhand,India
                    </li>
                    <li className='mt-3'>
                      <FaPhoneAlt className='sky' /> +91-9199960666
                    </li>
                    <li className='mt-2'>
                      <FaEnvelope className='sky' /> info@prismoline.com
                    </li>
                  </ul>
                  <ul className='social-media mt-4'>
                    <li>
                      <a href='https://www.facebook.com/prismoline/' className='sky'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='sky'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='' className='sky'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.youtube.com/channel/UC8TOqw9f2oQvgwsvS4bfBig/featured' className='sky'>
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Corporate Office –</h4>
                <p>195/B Mandeliya Nagar</p>
                <p>Bariatu </p>
                <p>Ranchi -834009</p>
                <p>Jharkhand, INDIA</p>
                {/* <ul>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Ui Design
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Web design
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Digital marketing{" "}
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Video Editing
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Pc Repairs
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Web Development
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Manufacturing Unit –</h4>
                <p>36 (P), Phase II,</p>
                <p>Industrial Area,</p>
                <p>Tatisilwai,</p>
                <p>Ranchi,835103</p>
                <p>Jharkhand, INDIA</p>
{/* 
                <ul>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Credit industrys
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Reasearch sector
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Finance Sector{" "}
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Credit industrys
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Reasearch sector
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight /> Finance Sector
                    </Link>
                  </li>
                </ul>
                 */}
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Prismoline is also at –</h4>

                 <p>Patna, Bihar Anansol, </p>
                 <p>WB Siliguri, WB Guwahati, </p>
                 <p>Assam Bhubaneshwar, </p>
                 <p>Odisha Raipur, </p>
                 <p>Chattisgarh Jabalpur,MP</p>

                {/* <ul>
                  <li className='sky'>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-info  mb-2'>
                          <FaRegCalendarAlt className='sky' />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className='title sky mb-0'>
                          <Link to='/blog-details'>
                            Social Media For Promote Business.
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className='sky'>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <FaRegCalendarAlt className='sky' />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className='title sky mb-0'>
                          <Link to='/blog-details'>
                            Marketing For Base marketing watch
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul> */}

              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>© Yoursitename 2023 | All Rights Reserved</p>
              </div>
              <div className='col-md-6 text-lg-end'>
                <a href='#'>Trams &amp; Condition</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Contact Us</a>
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
