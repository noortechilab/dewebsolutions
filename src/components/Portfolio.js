import React from "react";
import "./css/Portfolio.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <>
      <Container>
        <div className="portfolio-sec pt-5">
          <h1 className="fw-bold">
            OUR AWESOME <span style={{ color: "#002f63" }}> PROJECTS</span>
          </h1>
          <div className="d-flex justify-content-center pt-4">
            <p style={{ width: "42rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
          </div>
        </div>

        <div className="-fx-image-gal mt-5">
          <div className="-fx-gal-item">
            <div className="-fx-gal-image-thumb" tabindex="1">
              <a href="https://codepen.io/aledebarba" target="_blank">
                <img src="https://assets.materialup.com/uploads/e077a5c8-94a7-4be3-998c-086f35b52f54/preview.jpg" />
              </a>
            </div>
          </div>

          <div className="-fx-gal-item">
            <div className="-fx-gal-image-thumb" tabindex="1">
              <a href="https://codepen.io/aledebarba" target="_blank">
                <img src="https://uploads-ssl.webflow.com/5e3de80322b300854230f11f/5ed1998ba6615833ffba7e9c_hero-5.jpg" />
              </a>
            </div>
          </div>

          <div className="-fx-gal-item">
            <div className="-fx-gal-image-thumb" tabindex="1">
              <a href="https://codepen.io/aledebarba" target="_blank">
                <img src="https://uploads-ssl.webflow.com/5e3de80322b300854230f11f/5f51738653a52ba31b5b01e0_hero-thumb.jpg" />
              </a>
            </div>
          </div>

          <div className="-fx-gal-item">
            <div className="-fx-gal-image-thumb" tabindex="1">
              <a href="https://codepen.io/aledebarba" target="_blank">
                <img src="https://uploads-ssl.webflow.com/5e3de80322b300854230f11f/5ec5d98c034337700a0cee54_hero-3-thumb.jpg" />
              </a>
            </div>
          </div>

          <div className="-fx-gal-item">
            <div className="-fx-gal-image-thumb" tabindex="1">
              <a href="https://codepen.io/aledebarba" target="_blank">
                <img src="https://cdn.dribbble.com/users/5922214/screenshots/17432232/media/a34f7c89468e2d981f75d4d65ded1672.png?compress=1&resize=400x300" />
              </a>
            </div>
          </div>

          <div className="-fx-gal-item">
            <div className="-fx-gal-image-thumb" tabindex="1">
              <a href="https://codepen.io/aledebarba" target="_blank">
                <img src="https://i.pinimg.com/originals/47/af/9f/47af9f213d7b28827810bb0e91b53cf6.png" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
