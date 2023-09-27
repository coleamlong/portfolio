import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import AboutPhoto from "../assests/AboutPhoto.jpg";

const About = () => {
    return (
        <Container className="text-start">
            <Row>
                <Col sm={12} md={6}>
                    <Image
                        className="center-block"
                        fluid
                        rounded
                        src={AboutPhoto}
                    />
                </Col>
                <Col sm={12} md={6}>
                    <h1 className="py-3">About Me</h1>
                    <p>
                        My early childhood nickname was "Button Boy".
                        <br />
                        <br />
                        Before I could walk on two feet or speak in complete
                        sentences, my daily activities included pressing every
                        button within my reach. My parents could set me in front
                        of a disconnected VCR and I would be entertained for
                        hours imagining what each button did.
                        <br />
                        <br />
                        Studying computer science at the University of Texas at
                        Austin, my curiosity persists. In courses, I love
                        collaborating with equally eager students to solve
                        puzzles with code. Recreationally, I trace the bleeding
                        edge of technology. Artificial Intelligence and Machine
                        Learning have recently captivated my attention and I
                        look forward to gaining formal experience with Neural
                        Networks and Linear Regression in the coming years.
                        <br />
                        <br />
                        Currently, I am searching for opportunities to bring my
                        childhood imagination to life. I want to learn new and
                        existing technologies. I want to lend myself to awesome
                        projects. I want to work with inspiring people. Most of
                        all, I want to press more buttons!
                    </p>
                    <Container className="py-5 d-flex flex-column gap-3">
                        <a
                            href="https://www.linkedin.com/in/coleamlong/"
                            className="d-flex gap-2 text-decoration-none"
                        >
                            <i className="fa-brands fa-linkedin text-primary fs-1" />
                            <h3 className="text-dark">coleamlong</h3>
                        </a>
                        <div className="d-flex gap-2 text-decoration-none">
                            <i className="fa-solid fa-envelope text-success fs-1" />
                            <h3 className="text-dark">coleamlong@gmail.com</h3>
                        </div>
                        <div className="d-flex gap-2 text-decoration-none">
                            <i className="fa-solid fa-phone text-info fs-1" />
                            <h3 className="text-dark">(317) 644-9178</h3>
                        </div>
                    </Container>
                </Col>
            </Row>

            <Container></Container>
        </Container>
    );
};

export default About;
