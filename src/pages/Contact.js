import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactMain from "../components/ContactMain";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb title={"Contact"} bgimg={"./assets/img/bg/c1.jpg"} para={"Need an expert? you are more than welcomed to leave your contact info and we will be in touch shortly"} title2={"contact"} />
      <ContactMain />
      <FooterFour />
    </>
  );
};

export default Contact;
