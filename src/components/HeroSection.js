import React from "react";
import videoBg from "../assets/videoBg.webm";
import "./HeroSection.css";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content ">
          <div className="display-1 hero-heading">
            <motion.div
              className="about_right"
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              HELLO WE ARE <span className="bizro fw-bold"> BIZRO</span>
            </motion.div>
          </div>
          <motion.div
            className="about_right"
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [250, 0], opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className="fs-3 py-3">WELCOME TO OUR SITE</p>
          </motion.div>
          <motion.div
            className="about_right"
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [250, 0], opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <button className="Hero-btn fs-5">See Our Projects</button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
