import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar className="nav-bg sticky-top shadow" expand="lg">
        <Container>
          <Link to="/" className="fs-1 text-white fw-bold text-decoration-none">
            BIZRO
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto gap-4 py-3  text-uppercase"
              style={{ fontSize: "17px" }}
            >
              <Link
                to="/"
                className="text-white navLink text-decoration-none pt-2"
              >
                Home
              </Link>
              <Link
                to="/home"
                className="text-white navLink text-decoration-none pt-2"
              >
                about
              </Link>
              <Link
                to="/services"
                className="text-white navLink text-decoration-none pt-2"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-white navLink text-decoration-none pt-2"
              >
                portfolio
              </Link>
              <Link
                to="/blog"
                className="text-white navLink text-decoration-none pt-2"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-white navLink text-decoration-none pt-2"
              >
                Contact us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
