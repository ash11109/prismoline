import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactMain from "../components/ContactMain";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb title={"Contact"} bgimg={"./assets/img/bg/c1.jpg"} para={"NEED AN EXPERT FOR ASSISTANCE.LEAVE YOUR CONTACT INFO AND OUR TEAM WILL BE IN TOUCH SHORTLY"} title2={"contact"} />
      <ContactMain />
      <FooterFour />
    </>
  );
};

export default Contact;
