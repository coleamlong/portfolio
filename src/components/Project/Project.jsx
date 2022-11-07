import React from "react";
import "./Project.css";

const Project = (props) => {
  const { title, github, gitlab, website, image, description } = props.project;
  return (
    <div className="card">
      <img className="bg-image" src={image} />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="link-container">
        {github && (
          <a href={github}>
            <i className="fa-brands fa-github" />
          </a>
        )}
        {gitlab && (
          <a href={gitlab}>
            <i className="fa-brands fa-gitlab" />
          </a>
        )}
        {website && (
          <a href={website}>
            <i className="fa-solid fa-pager" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
