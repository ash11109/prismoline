import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

const Service = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb 
        title={"WELCOME TO PRISMOLINE"} 
        bgimg={"./assets/img/banner-5/1.jpg"} 
        para={"Safety is visible"} 
        title2={"Products"} />
        <ProductList />
        <ProductDetail />
      <FooterFour />
    </>
  );
};

export default Service;
