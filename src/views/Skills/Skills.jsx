import "./Skills.css";
import React from "react";

import CSharpIcon from "../../assests/csharp-icon.svg";
import CPPIcon from "../../assests/cpp-icon.svg";
import ExcelIcon from "../../assests/microsoft-excel-icon.svg";
import SeleniumIcon from "../../assests/selenium-icon.svg";

const Skills = () => {
  return (
    <div className="card-container">
      <section className="languages">
        <div className="skill-item" style={{ width: "90%", opacity: "90%" }}>
          <i className="icon fa-brands fa-python" />
        </div>
        <div className="skill-item" style={{ width: "80%", opacity: "80%" }}>
          <img className="icon" src={CSharpIcon} alt="Csharpicon" />
        </div>
        <div className="skill-item" style={{ width: "80%", opacity: "80%" }}>
          <i className="icon fa-brands fa-java" />
        </div>
        <div className="skill-item" style={{ width: "70%", opacity: "70%" }}>
          <i className="icon fa-brands fa-js" />
        </div>
        <div className="skill-item" style={{ width: "60%", opacity: "60%" }}>
          <img className="icon" src={CPPIcon} alt="Csharpicon" />
        </div>
      </section>
      <section className="technologies">
        <div className="skill-item" style={{ width: "90%", opacity: "90%" }}>
          <i className="icon fa-brands fa-react" />
        </div>
        <div className="skill-item" style={{ width: "90%", opacity: "90%" }}>
          <i className="icon fa-brands fa-git" />
        </div>
        <div className="skill-item" style={{ width: "70%", opacity: "70%" }}>
          <i className="icon fa-brands fa-unity" />
        </div>
        <div className="skill-item" style={{ width: "70%", opacity: "70%" }}>
          <img className="icon" src={ExcelIcon} alt="Csharpicon" />
        </div>
        <div className="skill-item" style={{ width: "60%", opacity: "60%" }}>
          <img className="icon" src={SeleniumIcon} alt="Csharpicon" />
        </div>
        <div className="skill-item" style={{ width: "60%", opacity: "60%" }}>
          <i className="icon fa-brands fa-docker" />
        </div>
      </section>
      <section className="concepts">
        <div className="skill-item" style={{ width: "95%", opacity: "95%" }}>
          <i className="icon">OOP</i>
        </div>
        <div className="skill-item" style={{ width: "75%", opacity: "75%" }}>
          <i className="icon">Agile</i>
        </div>
        <div className="skill-item" style={{ width: "70%", opacity: "70%" }}>
          <i className="icon">Restful APIs</i>
        </div>
      </section>
    </div>
  );
};

export default Skills;
