import React, { useState } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FeaturesNav from "../components/Navbar/Features";
import Pricing from "../components/PricingTable";
import FeaturesSidebar from "../components/Sidebar/Features";
import FeaturesPageComponents from "../components/FeaturesPage/index";
import ScrollToTop from "../components/ScrollToTop";

const FeaturesPage = () => {
  //Nav & Side Bar Toggle Function
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <FeaturesSidebar isOpen={isOpen} toggle={toggle} />
      <FeaturesNav toggle={toggle} />
      <FeaturesPageComponents />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
};

export default FeaturesPage;
