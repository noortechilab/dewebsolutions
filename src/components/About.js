import React from "react";
import "./css/About.css";
const About = () => {
  return (
    <>
      <section id="about-us" className="about-us">
        <div className="container">
          <div className="theme-title">
            <h2 className="fw-bold fs-1">
              ABOUT OUR <span className="span-bizro"> BIZPRO </span>
            </h2>
            <div className="d-flex justify-content-center align-items-center">
              <p className="w-50 py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </p>
            </div>
          </div>

          <div className="row ">
            <div
              className="col-lg-3 col-md-3 col-sm-6"
              style={{ borderRight: "1px solid #002f63" }}
            >
              <div className="single-about-content ">
                <div className="icon round-border tran3s mb-4">
                  <i className="fa fa-line-chart" aria-hidden="true"></i>
                </div>
                <h5 classNameName="pt-4">
                  <a href="#" className="tran3s ">
                    Web Development
                  </a>
                </h5>
                <p className="para-section-about">
                  Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <a
                  href="#"
                  className="more tran3s hvr-bounce-to-right py-2 px-4"
                >
                  More Details
                </a>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-sm-6"
              style={{ borderRight: "1px solid #002f63" }}
            >
              <div className="single-about-content ">
                <div className="icon round-border tran3s mb-4">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </div>
                <h5 classNameName="pt-4">
                  <a href="#" className="tran3s">
                    PHOTOGRAPHY
                  </a>
                </h5>
                <p classNameName="para-section-about">
                  Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <a
                  href="#"
                  className="more tran3s hvr-bounce-to-right py-2 px-4"
                >
                  More Details
                </a>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-sm-6"
              style={{ borderRight: "1px solid #002f63" }}
            >
              <div className="single-about-content ">
                <div className="icon round-border tran3s mb-4">
                  <i className="fa fa-life-ring" aria-hidden="true"></i>
                </div>
                <h5 classNameName="pt-4">
                  <a href="#" className="tran3s">
                    Digital Marketing
                  </a>
                </h5>
                <p classNameName="para-section-about">
                  Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <a
                  href="#"
                  className="more tran3s hvr-bounce-to-right py-2 px-4 "
                >
                  More Details
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="single-about-content ">
                <div className="icon round-border tran3s mb-4">
                  <i className="fa fa-line-chart" aria-hidden="true"></i>
                </div>
                <h5 classNameName="pt-4">
                  <a href="#" className="tran3s">
                    SEO
                  </a>
                </h5>
                <p classNameName="para-section-about">
                  Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <a
                  href="#"
                  className="more tran3s hvr-bounce-to-right py-2 px-4"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
