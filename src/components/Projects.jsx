import React from "react";

import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import ProjectInfo from "../static/ProjectInfo";

const Projects = () => {
    return (
        <Container>
            <h1 className="py-5">Projects</h1>

            <Row>
                {ProjectInfo.map((project) => {
                    return (
                        <Col sm={6}>
                            <ProjectCard key={project.id} project={project} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Projects;
