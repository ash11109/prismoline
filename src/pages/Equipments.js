import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import EquipmentsDetails from "../components/EquipmentsDetails";

const Equipments = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb 
        title={"WELCOME TO PRISMOLINE"} 
        bgimg={"./assets/img/banner-5/1.jpg"} 
        para={"Safety is visible"} 
        title2={"Equipments"} />
        <EquipmentsDetails />
      <FooterFour />
    </>
  );
};

export default Equipments;