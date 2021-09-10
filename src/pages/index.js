import React, { useState, useEffect } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Pricing from "../components/PricingTable";
import Sidebar from "../components/Sidebar";

//import Popup from Popup.js
import Popup from "../components/Popup";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Popup function
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1200);
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Features />
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Footer />

      {/* Popup */}
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>Site still under construction.</h3>
        <p>Will be ready by the end of this month!</p>
      </Popup>
    </>
  );
};

export default Home;
