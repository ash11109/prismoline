import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import TeamDetailsGroup from "../components/TeamDetailsGroup";

const TeamDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={"WELCOME TO PRISMOLINE"} bgimg={"./assets/img/bg/cr1.jpg"} para={"Safety is Visible"} title2={"Certificates"}
/>

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default TeamDetails;
