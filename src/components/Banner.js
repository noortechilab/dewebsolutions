import React from "react";
import "./css/Banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner-bg ">
        <h1 className="portfolio-heading ">
          WE CREATE CREATIVE <span style={{ color: "#002f63" }}> & </span>BEST
          UNIQUE DESIGN
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-portfolio py-2 px-5 fs-5 fw-bold mb-5">
            LET'S WORK
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
