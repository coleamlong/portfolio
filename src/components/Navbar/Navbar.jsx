import "./Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className="global-nav">
      <section className="nav-logo-section">
        <a href="/">
          <i className="fa-sharp fa-solid fa-code" />
        </a>
      </section>
      <section className="nav-pages-section">
        <a href="/about">ABOUT</a>
        <a href="/projects">PROJECTS</a>
        <a href="/skills">SKILLS</a>
      </section>
      <section className="nav-social-section">
        <a href="https://www.linkedin.com/in/coleamlong/">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="https://github.com/coleamlong">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://twitter.com/coleamlong">
          <i className="fa-brands fa-twitter" />
        </a>
      </section>
      <section className="nav-contact-section">
        <a href="/contact">GET IN TOUCH</a>
      </section>
    </nav>
  );
};

export default Navbar;
