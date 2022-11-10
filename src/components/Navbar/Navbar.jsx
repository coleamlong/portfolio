import "./Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className="global-nav">
      <section className="nav-logo-section">
        <a href="/portfolio/">
          <i className="fa-sharp fa-solid fa-code" />
        </a>
      </section>
      <section className="nav-pages-section">
        <a href="/portfolio/about">ABOUT</a>
        <a href="/portfolio/projects/">PROJECTS</a>
        <a href="/portfolio/skills">SKILLS</a>
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
        <a href="/portfolio/contact">GET IN TOUCH</a>
      </section>
    </nav>
  );
};

export default Navbar;
