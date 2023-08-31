import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
// import PricingAreaOne from "../components/PricingAreaOne";
import ServiceAreaGroup from "../components/ServiceAreaGroup";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"WELCOME TO PRISMOLINE"} bgimg={"./assets/img/bg/p1.jpg"} para={"Safety is visible"} title2={"Products"}/>

      {/* Service Area One */}
      <ServiceAreaGroup / >

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default Service;
