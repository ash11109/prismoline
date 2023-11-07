import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaThree from "../components/CounterAreaThree";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import WorkProcessOne from "../components/WorkProcessOne";
import ServiceAreaGroup from "../components/ServiceAreaGroup";

const About = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb title={"WELCOME TO PRISMOLINE"} bgimg={"./assets/img/bg/g1.jpg"} para={"Safety is Visible"} title2={"About Us"} />
      <AboutAreaOne />
      <CounterAreaThree />
      <ServiceAreaGroup />
      <WorkProcessOne />
      <FooterFour />
    </>
  );
};

export default About;
