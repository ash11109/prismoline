
import React, { useState } from "react";
import { FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarFour = () => {
  const [active, setActive] = useState(false);
  // const [searchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };

  return (
    <>
      
      <div
      
        id='body-overlay'
      ></div>
      <nav className='navbar navbar-area navbar-area-3 navbar-expand-lg fixed-top'>
        <div className='container nav-container custom-container fixed-top bg-light rounded-2 hsaknavbar'>
          <div className='responsive-mobile-menu'>
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target='#itech_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo'>
            <Link to='/'>
              <img src='assets/img/logo3.png' alt='img' />
            </Link>
          </div>
          <div className='nav-right-part nav-right-part-mobile' >
           
          </div>
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id='itech_main_menu'
          >
            <ul className='navbar-nav menu-open text-lg-center ps-lg-5 navbarFive'>
              <li className='menu-item-has-children'>
              
                <Link to='/'>Home</Link>
              </li>
              
              <li className='menu-item-has-children'>
              <Link to='/service'>Products</Link>
               
              </li>

           
              <li className='menu-item-has-children'>
                {/* <a href='#'>Pages</a> */}
                <Link to='/team-details'>Certificates</Link>
               
              </li>
              <li className='menu-item-has-children'>
                {/* <a href='#'>Blog</a> */}
                <Link to='/blog'>Gallery</Link>
                
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='nav-right-part nav-right-part-desktop align-self-center'>
            <Link
              className='btn btn-base-color border-radius-5 d-flex align-items-center'
              to='/about'
            >
              Get a quote <FaArrowRight className='mt-0' />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarFour;
