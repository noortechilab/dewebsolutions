import React from "react";

import HeroSection from "./HeroSection";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import BlogSection from "./BlogSection";
import Contact from "./Contact";
import Pricing from "./Pricing";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Banner />
      <Testimonial />
      <BlogSection />
      <Contact />
    </>
  );
};

export default HomePage;
