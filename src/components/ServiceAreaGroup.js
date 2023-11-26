import React from "react";
import './AshCss.css';
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import serviceList from "../scripts/serviceList";

const ServiceAreaGroup = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      {/* <div className='service-area bg-relative pd-top-100'>
        <img
          className='position-bottom-left top_image_bounce'
          srcSet='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>CREATIVE SERVICES</h6>
            <h2 className='title'>
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className='row'>
            {serviceList.map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img srcSet={data.img} alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to='/service-details'>{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link className='btn btn-border-base' to='/service-details'>
                      Touch More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className=" p-5 haskbgclr">
        <div className="row">
          <div className="col-md">
            <h4 className="hasktxtclr">Thermoplastic Road Markings</h4>
            <p className="hasktxtclr py-5">Hot Melt Thermoplastics are solid road marking materials at ambient temperature, which melt to liquid when heated at high temperature (between 180 and 220°C).</p>


            {/* <iframe srcSet="https://www.youtube.com/watch?v=8CqLtT3B6hw" title="youtube video" allowFullScreen></iframe> */}
          </div>

          <div className="col-md ">
            <h4 className="hasktxtclr">Key Features of Thermoplastic Materials : </h4>
            <ul>
              <li>Immediate drying allow immediate opening of the road to traffic</li>
              <li>Very long durability, as the are applied as thick layers (usually 1.5 to 3mm)</li>
              <li>Good quality vs. price ratio (very low priceof the materials)</li>
              <li>High night visibility until teh end of its use life, as they incorporate glass  beads into its composition</li>
            </ul>
            {/* <div className="haskimg2">
          <img srcSet="./assets/img/blog/3.png" alt="img" loading="lazy"/>
        </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col ash-yt">
            <iframe className="haskvideo ash-yt" src="https://www.youtube.com/embed/8CqLtT3B6hw" loading="lazy" title="youtube video" allowFullScreen />
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaGroup;
