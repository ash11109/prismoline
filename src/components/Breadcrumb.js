import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, bgimg ,para ,title2}) => { // Fix the destructuring of props here
  return (
    <>
      {/* ================ Breadcrumb Start ================*/}
      <div
        className='breadcrumb-area bg-cover'
        style={{ backgroundImage: `url(${bgimg})` }} // Fix the style object syntax here
      >
        <div className='container'>
          <div className='breadcrumb-inner'>
            <div className='row justify-content-center'>
              <div className='col-lg-6'>
                <h2 className='page-title'>{title}</h2>
                <p className="page-para">{para}</p>
              </div>
              <div className='col-lg-6 text-lg-end'>
                <ul className='page-list'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  {"  "}/ <li>{title2}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ Breadcrumb End ================*/}
    </>
  );
};

export default Breadcrumb;
