import React, { useState } from "react";
import AboutPageComponents from "../components/AboutPage";
import AboutNav from "../components/Navbar/About";
import AboutSidebar from "../components/Sidebar/About";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const AboutPage = () => {
  //Nav & Side Bar Toggle Function
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <AboutSidebar isOpen={isOpen} toggle={toggle} />
      <AboutNav toggle={toggle} />
      <AboutPageComponents />
      <Footer />
    </>
  );
};

export default AboutPage;
