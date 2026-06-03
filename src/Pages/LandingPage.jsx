import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Series from "../Components/Series";
import Pricing from "../Components/Pricing";
import Portofolio from "../Components/Portofolio";
import PerfectFor from "../Components/PerfectFor";
import Inhouse from "../Components/Inhouse";
import BookingRules from "../Components/ImportantRules";
import Appliances from "../Components/FreeApplication";
import About from "../Components/About";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Series />
      <PerfectFor />
      <Pricing />
      <Portofolio />
      <Inhouse />
      <BookingRules />
      <Appliances />
      <Footer/>
    </>
  );
};

export default LandingPage;
