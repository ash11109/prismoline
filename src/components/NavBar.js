// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [active, setActive] = useState(false);
//   const [searchShow, setSearchShow] = useState(false);
//   const menuActive = () => {
//     setActive(!active);
//   };
//   const searchActive = () => {
//     setSearchShow(!searchShow);
//     console.log("hell");
//   };

//   // Control sidebar navigation
//   let items = document.querySelectorAll(".menu-item-has-children > a");
//   for (let i in items) {
//     if (items.hasOwnProperty(i)) {
//       items[i].onclick = function () {
//         this.parentElement
//           .querySelector(".sub-menu")
//           .classList.toggle("active");
//         this.classList.toggle("open");
//       };
//     }
//   }

//   return (
//     <>
//       {/* search popup start*/}
//       {/* <div
//         className={searchShow ? "td-search-popup active" : "td-search-popup "}
//         id='td-search-popup'
//       >
//         <form action='/' className='search-form'>
//           <div className='form-group'>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='Search.....'
//             />
//           </div>
//           <button type='submit' className='submit-btn'>
//             <FaSearch />
//           </button>
//         </form>
//       </div> */}
//       {/* search popup end*/}
//       {/* <div
//         onClick={searchActive}
//         className={searchShow ? "body-overlay active" : "body-overlay"}
//         id='body-overlay'
//       ></div> */}
//       {/* navbar start */}
//       <nav className='navbar navbar-area navbar-expand-lg'>
//         <div className='container nav-container bg-light rounded-2 hsaknavbar'>
//           <div className='responsive-mobile-menu'>
//             <button
//               onClick={menuActive}
//               className={
//                 active
//                   ? "menu toggle-btn d-block d-lg-none open"
//                   : "menu toggle-btn d-block d-lg-none"
//               }
//               data-target='#itech_main_menu'
//               aria-expanded='false'
//               aria-label='Toggle navigation'
//             >
//               <span className='icon-left' />
//               <span className='icon-right' />
//             </button>
//           </div>
//           <div className='logo'>
//             <Link to='/'>
//               <img src='assets/img/logo.png' alt='img' />
//             </Link>
//           </div>
// {/* 
//           <div className='nav-right-part nav-right-part-mobile'>
//             <span className='search-bar-btn' onClick={searchActive}>
//               <FaSearch />
//             </span>
//           </div> */}

//           <div
//             className={
//               active
//                 ? "collapse navbar-collapse sopen"
//                 : "collapse navbar-collapse"
//             }
//             id='itech_main_menu'
//           >
//             <ul className='navbar-nav menu-open text-lg-end'>
//               <li className='menu-item-has-children'>
//                 {/* <a href='#'>Home</a> */}
              
//                <Link to='/'>Home</Link>
               
//                 {/* <ul className='sub-menu'>
//                   <li>
//                     <Link to='/'>Home 01</Link>
//                   </li>
//                   <li>
//                     <Link to='/index-2'>Home 02</Link>
//                   </li>
//                   <li>
//                     <Link to='/index-3'>Home 03</Link>
//                   </li>
//                   <li>
//                     <Link to='/index-4'>Home 04</Link>
//                   </li>
//                   <li>
//                     <Link to='/index-5'>Home 05</Link>
//                   </li>
//                 </ul> */}
//               </li>
//               <li className='menu-item-has-children'>
//                 {/* <a href='#'>Service</a> */}
//                 <Link to='/service'>Products</Link>
//                 {/* <ul className='sub-menu'>
//                   <li>
//                     <Link to='/service'>Service</Link>
//                   </li>
//                   <li>
//                     <Link to='/service-details'>Service Single</Link>
//                   </li>
//                 </ul> */}
//               </li>
//               <li className='menu-item-has-children'>
//                 {/* <a href='#'>Pages</a> */}
//                 <Link to='/team-details'>Certificates</Link>

//                 {/* <ul className='sub-menu'>
//                   <li>
//                     <Link to='/about'>About Us</Link>
//                   </li>
//                   <li>
//                     <Link to='/team'>Team</Link>
//                   </li>
//                   <li>
//                     <Link to='/team-details'>Team Details</Link>
//                   </li>
//                   <li>
//                     <Link to='/case-study-details'>Case Study Details</Link>
//                   </li>
//                 </ul> */}

//               </li>
//               <li className='menu-item-has-children'>
//               <Link to='/blog'>Gallery</Link>
//                 {/* <ul className='sub-menu'>
//                   <li>
//                     <Link to='/blog'>Blog</Link>
//                   </li>
//                   <li>
//                     <Link to='/blog-details'>Blog Details</Link>
//                   </li>
//                 </ul> */}
//               </li>
//               <li>
//                 <Link to='/contact'>Contact Us</Link>
//               </li>
//             </ul>
//           </div>
//           <div className='nav-right-part nav-right-part-desktop align-self-center'>
//             <a className='navbar-phone' href='tel:+9199960666'>
//               <span className='icon'>
//                 <img src='assets/img/icon/1.png' alt='img' />
//               </span>
//               <span>Need help?</span>
//               <h5>9199960666</h5>
//             </a>
//           </div>
//         </div>
//       </nav>
//       {/* navbar end */}
//     </>
//   );
// };

// export default NavBar;


import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

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
      {/* search popup start*/}
      {/* <div
        className={searchShow ? "td-search-popup active" : "td-search-popup "}
        id='td-search-popup'
      >
        <form action='/' className='search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search.....'
            />
          </div>
          <button type='submit' className='submit-btn'>
            <FaSearch />
          </button>
        </form>
      </div> */}
      {/* search popup end*/}
      {/* <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id='body-overlay'
      ></div> */}
      {/* navbar start */}
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
{/* 
          <div className='nav-right-part nav-right-part-mobile'>
            <span className='search-bar-btn' onClick={searchActive}>
              <FaSearch />
            </span>
          </div> */}

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
                {/* <a href='#'>Home</a> */}
              
               <Link to='/'>Home</Link>
               
                {/* <ul className='sub-menu'>
                  <li>
                    <Link to='/'>Home 01</Link>
                  </li>
                  <li>
                    <Link to='/index-2'>Home 02</Link>
                  </li>
                  <li>
                    <Link to='/index-3'>Home 03</Link>
                  </li>
                  <li>
                    <Link to='/index-4'>Home 04</Link>
                  </li>
                  <li>
                    <Link to='/index-5'>Home 05</Link>
                  </li>
                </ul> */}
              </li>
              <li className='menu-item-has-children'>
                {/* <a href='#'>Service</a> */}
                <Link to='/service'>Products</Link>
                {/* <ul className='sub-menu'>
                  <li>
                    <Link to='/service'>Service</Link>
                  </li>
                  <li>
                    <Link to='/service-details'>Service Single</Link>
                  </li>
                </ul> */}
              </li>
              <li className='menu-item-has-children'>
                {/* <a href='#'>Pages</a> */}
                <Link to='/team-details'>Certificates</Link>

                {/* <ul className='sub-menu'>
                  <li>
                    <Link to='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/team'>Team</Link>
                  </li>
                  <li>
                    <Link to='/team-details'>Team Details</Link>
                  </li>
                  <li>
                    <Link to='/case-study-details'>Case Study Details</Link>
                  </li>
                </ul> */}

              </li>
              <li className='menu-item-has-children'>
              <Link to='/blog'>Gallery</Link>
                {/* <ul className='sub-menu'>
                  <li>
                    <Link to='/blog'>Blog</Link>
                  </li>
                  <li>
                    <Link to='/blog-details'>Blog Details</Link>
                  </li>
                </ul> */}
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
              <h5>9199960666</h5>
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
