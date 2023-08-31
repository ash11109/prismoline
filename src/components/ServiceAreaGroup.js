import React from "react";
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
            <iframe className="haskvideo" src="https://www.youtube.com/embed/8CqLtT3B6hw" title="youtube video" allowFullScreen />

            {/* <iframe srcSet="https://www.youtube.com/watch?v=8CqLtT3B6hw" title="youtube video" allowFullScreen></iframe> */}
          </div>

          <div className="col-md ">
        <h4 className="hasktxtclr">Key features of thermoplastic materials: </h4>
        <ul>
          <li>Immediate drying allow immediate opening of the road to traffic</li>
          <li>Very long durability, as the are applied as thick layers (usually 1.5 to 3mm)</li>
          <li>Good quality vs. price ratio (very low priceof the materials)</li>
          <li>High night visibility until teh end of its use life, as they incorporate glass  beads into its composition</li>
        </ul>
        <div className="haskimg2">f
          <img srcSet="./assets/img/blog/3.png" alt="img"  />
        </div>
          </div>
        </div>
      </div>


<hr className="haskbgclr" />
      <div className=" p-5 haskbgclr">
        <h2 className="text-center mb-5">Equipments</h2>
        <div className="row">

          <div className="col-md">
            <h4 className="hasktxtclr text-center">Reflectometer</h4>
          <ul>
          <li>MX-7S is an optical measuring instrument devised for measuring the nighttime visibility of pavement markings.</li>
          <li>Portable type instrument which can measure the retroreflectivity by setting it directly on the pavement markings during day and night</li>
          <li>Its memory can record and store the real-time data.</li>
          <li>Capable of continuous measurement for 8 hours using large-capacity battery.</li>
        </ul>
        
         <div className="row divimg">
          <div className="col-sm">
            <img srcSet="./assets/img/service/e1.jpeg" alt="img"/>
           </div>
          <div className="col-sm">
            <img srcSet="./assets/img/service/e3.png" alt="img"  />
          </div>
        </div> 

         <div className="row divimg">
          <div className="col-sm">
            <img srcSet="./assets/img/service/e2.png" alt="img"/>
           </div>
          <div className="col-sm">
            <img srcSet="./assets/img/service/e4.png" alt="img"  />
          </div>
        </div> 

        </div> 

          <div className="col-md ">
        <h4 className="hasktxtclr mb-3 text-center">Fully Automatic Road</h4>
        <h5 className="text-center">Marking Machine</h5>
          <div className="row divimg p-3 mb-3">
            <img srcSet="./assets/img/service/w3.png" alt="" />
          </div>
          <div className="row divimg p-3">
            <img srcSet="./assets/img/service/w4.png" alt=""  />
          </div>
          </div>

        </div>

      </div>
      
      <hr className="haskbgclr" />
      <div className=" p-5 haskbgclr">
       
        <div className="row">

          <div className="col-md">
            <h6 className="mb-3">Scope of Use:</h6>
          <ul>
          <li>Asphalt and bitumen pavements</li>
          <li>Relining over hot thermoplastics, worn out alkyd and acrylic paints.</li>
        
        </ul>
        
            <h6 className="mb-3">Limitations:</h6>
          <ul>
          <li>Not suitable for applications over concrete pavements. use primer if needed.</li>
          <li>After opening to traffic, soiling of road markings may occure depending on the road,traffic and  weather, due to its roughness.</li>
        
        </ul>

            <h6 className="mb-3">Application method:</h6>
          <ul>
          <li>Hot applications after melting the material at indicated temperature. Lower temperature may cause low adherence pf materials.</li>
          <li>Road marking machine must be capable of automatically apply and control dosage and homogeneity</li>
        
        </ul>

            <h6 className=" mb-3">Storage:</h6>
          <ul>
          <li>Protect from open storage and extreme temperature changes</li>
          <li>Use paint within one year from fabrication date</li>
        
        </ul>

            <h6 className=" mb-3">Cautions:</h6>
          <ul>
          <li>Do not overheat materials above its safety temperature keep the heated material constantly stirred, and use within six hours</li>
          <li>Do not subject the materials to more than four cycles of heating and cooling</li>
        </ul>
        <h6 className=" mb-3">Thermoplastics are commonly used for:</h6>
          <ul>
          <li>Heavy traffic urban roads and highways</li>
          <li>Edge profiled lines</li>
          <li>Linear rumble strips</li>
          <li>Heavy traffic urban streets: Lane lines, central edge lines, symbols (arrows, numbers, letters),pedestrian crossing</li>
        </ul>
      
        </div> 

          <div className="col-md ">
       
          <div className="row divimg p-3 mb-3">
            <img srcSet="./assets/img/service/p1.jpeg" alt="img" />
          </div>
          <div className="row">
          <div className="row divimg">
  
  <img className="m-auto" srcSet="./assets/img/service/g1.gif" alt="img"/>
 

</div> 
          </div>
          </div>

        </div>

      </div>

      <hr className="haskbgclr" />
      <div className="haskbgclr p-5">
     <h3 className="my-5 text-center">Prismoline Recommends for Best Results</h3>
        <div className="row">
          <div className="col-md-4">
            <h5>Potters Glass Beads</h5>
            <p className="my-3 hasktxtclr">Potters are a step superior glass beads that are very tuf and are specially coated for high reflection and which are highly water and dust resistant.</p>
            <p  className="my-3 hasktxtclr">POTTERS GLASS BEADS COMES WITH MAXIMUM ROUNDNESS IN THEM THUS MAKING THE GLASS BEADS APPROPRIATE FOR BEST REFLECTION</p>
            <img className="clrimg" srcSet="./assets/img/service/ps2.png" alt="img" />

          </div>
          <div className="col-md-8">
          <div className="row mt-2">
            <img srcSet="./assets/img/service/ps1.jpg" alt="img" />
          </div>
          <div className="row mt-5">
            <h5>
Sovitech Glass Beads</h5>
          <p className="hasktxtclr mt-2">High performance road marking micro glass beads,for application by sprinkling . These are treated with special surface as to increase the performance of road marking beads. These in return gives a good reflective at day and night and also delivering anti skid restive properties </p>
          </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaGroup;
