import React from "react";
import "./css/Services.scss";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
const Services = () => {
  return (
    <div className="content-103">
      <div className="container">
        <div className="row">
          <h2 className="sercies-title">Our Awesome Services</h2>
          <div className="col-md-4 col-sm-4 ">
            <div className="service-post rounded shadow">
              <div className="service-content">
                <div className="service-icon">
                  <i className="fa fa-share-alt"></i>
                </div>
                {/* <!-- service-icon --> */}
                <h3 className="service-title">Web Development</h3>
                <p className="service-description">
                  Seitan brunch meh, food truck Wes Anderson quinoa XOXO
                  readymade gastropub gluten-free heirloom wolf skateboard.
                </p>
              </div>
              {/* <!-- service-content --> */}
              <div className="service-hover"></div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="service-post">
              <div className="service-content">
                <div className="service-icon">
                  <i className="fa fa-pencil"></i>
                </div>
                {/* <!-- .s-icon --> */}
                <h3 className="service-title">App Development</h3>
                <p className="service-description">
                  Seitan brunch meh, food truck Wes Anderson quinoa XOXO
                  readymade gastropub gluten-free heirloom wolf skateboard.
                </p>
              </div>
              {/* <!-- service-content --> */}
              <div className="service-hover"></div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="service-post">
              <div className="service-content">
                <div className="service-icon">
                  <i className="fa fa-lightbulb-o"></i>
                </div>
                {/* <!-- .s-icon --> */}
                <h3 className="service-title">SEO</h3>
                <p className="service-description">
                  Seitan brunch meh, food truck Wes Anderson quinoa XOXO
                  readymade gastropub gluten-free heirloom wolf skateboard.
                </p>
              </div>
              {/* <!-- service-content --> */}
              <div className="service-hover"></div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="service-post">
              <div className="service-content">
                <div className="service-icon">
                  <i className="fa fa-lightbulb-o"></i>
                </div>
                {/* <!-- .s-icon --> */}
                <h3 className="service-title">Digital Marketing</h3>
                <p className="service-description">
                  Seitan brunch meh, food truck Wes Anderson quinoa XOXO
                  readymade gastropub gluten-free heirloom wolf skateboard.
                </p>
              </div>
              {/* <!-- service-content --> */}
              <div className="service-hover"></div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="service-post">
              <div className="service-content">
                <div className="service-icon">
                  <i className="fa fa-lightbulb-o"></i>
                </div>
                {/* <!-- .s-icon --> */}
                <h3 className="service-title">UI/UX designs</h3>
                <p className="service-description">
                  Seitan brunch meh, food truck Wes Anderson quinoa XOXO
                  readymade gastropub gluten-free heirloom wolf skateboard.
                </p>
              </div>
              {/* <!-- service-content --> */}
              <div className="service-hover"></div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="service-post">
              <div className="service-content">
                <div className="service-icon">
                  <i className="fa fa-lightbulb-o"></i>
                </div>
                {/* <!-- .s-icon --> */}
                <h3 className="service-title">Webflow</h3>
                <p className="service-description">
                  Seitan brunch meh, food truck Wes Anderson quinoa XOXO
                  readymade gastropub gluten-free heirloom wolf skateboard.
                </p>
              </div>
              {/* <!-- service-content --> */}
              <div className="service-hover"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
