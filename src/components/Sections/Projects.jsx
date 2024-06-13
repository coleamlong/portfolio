import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ProjectsContainer = styled.div`
    overflow-y: auto;
    max-height: 450px;
    padding-right: 1em;
`;

const Project = styled.div``;

const Projects = () => {
    return (
        <Container>
            <h1>Projects</h1>
            <ProjectsContainer>
                <Project>
                    <h3>3D Portfolio Website</h3>
                    <h5>
                        JavaScript, React, Three.js, React Three Fiber,
                        styled-components, Git, Vite
                    </h5>
                    <p>
                        The website you are on right now! A bespoke 3D portfolio
                        built with React Three Fiber and styled-components. The
                        fully responsive design provides a unique, interactive
                        experience that puts the user first. Each element is
                        specifically desinged to be fully responsive (try
                        visiting on your phone!).
                    </p>
                </Project>
                <Project>
                    <h3>
                        <a
                            href={"https://spotify-playlist.coleamlong.com/"}
                            target="_blank"
                        >
                            Spotify Song Suggestor
                        </a>
                    </h3>
                    <h5>
                        JavaScript, React, Bootstrap, RESTful APIs, OAuth, Git,
                        Postman
                    </h5>
                    <p>
                        A compact web-app that generates a custom Spotify
                        playlist of undiscovered music from a specific set of
                        "seed" songs. I implemented Spotify OAuth, enabling
                        users to sign in with their own accounts and get
                        personalized results based on their listening history.
                    </p>
                </Project>
                <Project>
                    <h3>
                        <a
                            href={"https://geojobs.coleamlong.com/"}
                            target="_blank"
                        >
                            GeoJobs
                        </a>
                    </h3>
                    <h5>
                        JavaScript, React, Python, SQL, Flask, AWS (Amplify),
                        CI/CD, RESTful APIs, Unix, Postman, Axios, Git
                    </h5>
                    <p>
                        A database visualization web-app which allows jobseekers
                        to match open careers with ideal housing in the fifty
                        largest cites in the United States. I worked with a team
                        to implement a multi-table SQL database, a custom Flask
                        RESTful API, and a sleek user interface in React. I
                        specialized in structuring the front-end and fetching
                        backend data using JavaScript's Axios.
                    </p>
                </Project>
            </ProjectsContainer>
        </Container>
    );
};

export default Projects;
