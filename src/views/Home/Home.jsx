import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };
  return (
    <div className="container">
      <img
        className="bg"
        src="https://images.pexels.com/photos/273204/pexels-photo-273204.jpeg?auto=compress&cs=tinysrgb&dpr=1"
        alt=""
      />
      <div className="fg">
        <div className="title">
          <h2>Hi, my name is</h2>
          <h1>Cole Amlong</h1>
        </div>
        <section className="buttons">
          <button
            className="about-button"
            onClick={() => routeChange("/about")}
          >
            About me
          </button>
          <button
            className="projects-button"
            onClick={() => routeChange("/projects")}
          >
            Projects
          </button>
          <button
            className="skills-button"
            onClick={() => routeChange("/skills")}
          >
            Skills
          </button>
        </section>
      </div>

    </div>
  );
};

export default Home;
