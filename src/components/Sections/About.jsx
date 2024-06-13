import React from "react";
import Headshot from "/assets/headshot.jpg";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    overflow-y: auto;
    padding-right: 1em;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Image = styled.img`
    width: 300px;
    height: auto;
    margin-right: 1em;

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 1em;
        width: 40%;
    }

    @media (max-width: 480px) {
        margin-right: 0;
        margin-bottom: 1em;
        width: 75%;
    }
`;

const About = () => {
    return (
        <Container>
            <Image src={Headshot} alt="Headshot" />
            <div>
                <h1>About Me</h1>
                <p>
                    My early childhood nickname was "Button Boy".
                    <br />
                    <br />
                    Before I could walk on two feet or speak in complete
                    sentences, my daily activities included pressing every
                    button within my reach. My parents could set me in front of
                    a disconnected VCR and I would be entertained for hours
                    imagining what each button did.
                    <br />
                    <br />
                    Studying computer science at the University of Texas at
                    Austin, my curiosity persisted. In courses, I loved
                    collaborating with equally eager students to solve puzzles
                    with code. Recreationally, I employ new technologies as
                    effective modes of self expression. I enjoy incorperating my
                    interests into my personal projects and I write creative
                    code to reflect my passion.
                    <br />
                    <br />
                    Currently, I am searching for opportunities to bring my
                    childhood imagination to life. I want to learn new and
                    existing technologies. I want to lend myself to awesome
                    projects. I want to work with inspiring people. Most of all,
                    I want to press more buttons!
                </p>
            </div>
        </Container>
    );
};

export default About;
