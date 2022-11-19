import "./Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className="global-nav">
      <section className="nav-logo-section">
        <a className="logo nav-link" href="/">
          <span>COLE</span>
          <span>AMLONG</span>
        </a>
      </section>
      <section className="nav-pages-section">
        <a className="nav-link" href="/portfolio/about">
          ABOUT
        </a>
        <a className="nav-link" href="/portfolio/projects/">
          PROJECTS
        </a>
        <a className="nav-link" href="/portfolio/skills">
          SKILLS
        </a>
      </section>
      <section className="nav-social-section">
        <a className="nav-link" href="https://www.linkedin.com/in/coleamlong/">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a className="nav-link" href="https://github.com/coleamlong">
          <i className="fa-brands fa-github" />
        </a>
        <a className="nav-link" href="https://twitter.com/coleamlong">
          <i className="fa-brands fa-twitter" />
        </a>
      </section>
    </nav>
  );
};

export default Navbar;
