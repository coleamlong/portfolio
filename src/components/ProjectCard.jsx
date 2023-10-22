import React from "react";

import { Container, Card, Image } from "react-bootstrap";
import IconLink from "./IconLink";

const ProjectCard = (props) => {
    const { title, github, gitlab, website, image, description } =
        props.project;
    return (
        <Container className="text-start pb-5">
            <Card.Body>
                <Image className="border border-5" fluid rounded src={image} />
                <Card.Title className="py-3">{title}</Card.Title>

                <Card.Text>{description}</Card.Text>
                <Container className="d-flex gap-4">
                    {gitlab && (
                        <IconLink
                            icon="fa-brands fa-square-gitlab"
                            link={gitlab}
                        />
                    )}
                    {github && (
                        <IconLink
                            icon="fa-brands fa-square-github"
                            link={github}
                        />
                    )}
                    {website && (
                        <IconLink
                            icon="fa-solid fa-share-from-square"
                            link={website}
                        />
                    )}
                </Container>
            </Card.Body>
        </Container>
    );
};

export default ProjectCard;
