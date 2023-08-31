import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
// import ContactAreaOne from "../components/ContactAreaOne";
import CounterAreaThree from "../components/CounterAreaThree";
// import FaqAreaOne from "../components/FaqAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
// import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"WELCOME TO PRISMOLINE"} bgimg={"./assets/img/bg/a1.jpg"} para={"Safety is Visible"} title2={"About Us"} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* FAQ Area One */}
      {/* <FaqAreaOne /> */}

      {/* Team Area One */}
      {/* <TeamAreaOne /> */}

      {/* Counter Area One */}
      <CounterAreaThree />

      {/* Contact Area One */}
      {/* <ContactAreaOne /> */}

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default About;
