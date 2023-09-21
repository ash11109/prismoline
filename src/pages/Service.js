import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import ServiceAreaGroup from "../components/ServiceAreaGroup";

const Service = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb 
        title={"WELCOME TO PRISMOLINE"} 
        bgimg={"./assets/img/banner-5/1.jpg"} 
        para={"Safety is visible"} 
        title2={"Products"} />
      <ServiceAreaGroup />
      <FooterFour />
    </>
  );
};

export default Service;
