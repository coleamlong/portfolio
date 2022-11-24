import React from "react";
import { Container, Image } from "react-bootstrap";
import IconLink from "./IconLink";

const Project = (props) => {
  const { title, github, gitlab, website, image, description } = props.project;
  const { flipped } = props;
  return flipped ? (
    <Container className="project-container d-flex">
      <Container className="d-flex flex-column m-auto">
        <Container className="project-text-container">
          <h2 className="text-primary">{title}</h2>
          <p>{description}</p>
        </Container>
        <Container className="project-link-container d-flex gap-4">
          {gitlab && (
            <IconLink icon="fa-brands fa-square-gitlab" link={gitlab} />
          )}
          {github && (
            <IconLink icon="fa-brands fa-square-github" link={github} />
          )}
          {website && (
            <IconLink icon="fa-solid fa-share-from-square" link={website} />
          )}
        </Container>
      </Container>
      <Container>
        <Image rounded fluid src={image} />
      </Container>
    </Container>
  ) : (
    <Container className="project-container d-flex">
      <Container>
        <Image rounded fluid src={image} />
      </Container>
      <Container className="d-flex flex-column m-auto">
        <Container className="project-text-container">
          <h2 className="text-primary">{title}</h2>
          <p>{description}</p>
        </Container>
        <Container className="project-link-container d-flex gap-4">
          {gitlab && (
            <IconLink icon="fa-brands fa-square-gitlab" link={gitlab} />
          )}
          {github && (
            <IconLink icon="fa-brands fa-square-github" link={github} />
          )}
          {website && (
            <IconLink icon="fa-solid fa-share-from-square" link={website} />
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default Project;
