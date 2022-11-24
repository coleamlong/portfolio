import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const GlobalNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: "white" }} sticky="top" expand="lg">
      <Container>
        <Link
          style={{ cursor: "pointer" }}
          className="text-decoration-none"
          activeClass="active"
          smooth
          spy
          to="home"
          duration={100}
          offset={-75}
        >
          <Navbar.Brand>Cole Amlong</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-4">
            <Link
              style={{ cursor: "pointer" }}
              className="text-decoration-none text-dark"
              activeClass="active"
              smooth
              spy
              to="about"
              duration={100}
              offset={-75}
            >
              About
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              className="text-decoration-none text-dark"
              activeClass="active"
              smooth
              spy
              to="projects"
              duration={100}
              offset={-50}
            >
              Projects
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              className="text-decoration-none text-dark"
              activeClass="active"
              smooth
              spy
              to="skills"
              duration={100}
              offset={-50}
            >
              Skills
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              className="text-decoration-none text-dark"
              activeClass="active"
              smooth
              spy
              to="contact"
              duration={100}
              offset={-50}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlobalNavbar;
