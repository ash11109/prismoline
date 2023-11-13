

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);


  useEffect(() => {
    // Use the useEffect hook to attach the click handlers when the DOM is ready
    let items = document.querySelectorAll(".menu-item-has-children > a");
    for (let i in items) {
      if (items.hasOwnProperty(i)) {
        items[i].onclick = function () {
          const subMenu = this.parentElement.querySelector(".sub-menu");
          if (subMenu) {
            subMenu.classList.toggle("active");
            this.classList.toggle("open");
          }
        };
      }
    }
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const menuActive = () => {
    setActive(!active);
  };

  return (
    <>

      <nav className='navbar navbar-area navbar-expand-lg'>
        <div className='container nav-container bg-light rounded-2 hsaknavbar'>
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
              <img src='assets/img/logo.png' alt='img' />
            </Link>
          </div>
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id='itech_main_menu'
          >
            <ul className='navbar-nav menu-open text-lg-end'>
              <li className='menu-item-has-children'>
                <Link to='/'>Home</Link>
              </li>
              <li className='menu-item-has-children'>
                <Link to='/about'>About Us</Link>
              </li>
              <li className='menu-item-has-children'>
                <Link to='/product'>Products</Link>
              </li>
              <li className='menu-item-has-children'>
                <Link to='/certificates'>Certificates</Link>
              </li>
              <li className='menu-item-has-children'>
                <Link to='/gallery'>Gallery</Link>
              </li>
              
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='nav-right-part nav-right-part-desktop align-self-center'>
            <a className='navbar-phone' href='tel:+9199960666'>
              <span className='icon'>
                <img src='assets/img/icon/1.png' alt='img' />
              </span>
              <span>Need help?</span>
              <h5>7033275747</h5>
            </a>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
  // Rest of your component code...
};

export default NavBar;
