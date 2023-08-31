import React from "react";
import BlogGroup from "../components/BlogGroup";
import Breadcrumb from "../components/Breadcrumb";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";

const Blog = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"WELCOME TO PRISMOLINE"} bgimg={"./assets/img/bg/g1.jpg"} para={"Safety is Visible"} title2={"Gallery"}
/>

      {/* Blog Group */}
      <BlogGroup />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default Blog;
