import React from "react";

import Project from "../../components/Project/Project";
import ProjectInfo from "../../static/ProjectInfo";

const Projects = () => {
  return (
    <div className="card-container">
      {ProjectInfo.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
};

export default Projects;
