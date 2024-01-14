import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import ClientList from "../components/ClientList";

const Ourclients = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb title={"WELCOME TO PRISMOLINE"} bgimg={"./assets/img/bg/g1.jpg"} para={"Safety is Visible"} title2={"Our Clients"}/>
      <ClientList />
      <FooterFour />
    </>
  );
};

export default Ourclients;
