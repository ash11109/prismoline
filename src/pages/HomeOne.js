import React from "react";
import BannerFive from "../components/BannerFive";
// import CaseStudyAreaTwo from "../components/CaseStudyAreaTwo";
import FooterFour from "../components/FooterFour";
// import NavbarFour from "../components/NavbarFour";
import CounterAreaThree from "../components/CounterAreaThree";
import NavBar from "../components/NavBar";
import ServiceAreaFive from "../components/ServiceAreaFive";
import TestimonialFive from "../components/TestimonialFive";


const HomeFive = () => {
  return (
    <>
      <NavBar />
      <BannerFive />
      <ServiceAreaFive />
      <CounterAreaThree />
      {/* <CaseStudyAreaTwo /> */}
      <TestimonialFive />
      <FooterFour />
    </>
  );
};

export default HomeFive;
