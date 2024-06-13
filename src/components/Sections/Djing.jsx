import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Djing = () => {
    const soundcloudUrl = "https://soundcloud.com/dj_coal";

    return (
        <Container>
            <h1>Djing</h1>
            <p>
                Music discovery and curation are my passions. I thrive on
                uncovering unique sounds and crafting atmospheres that resonate
                with the dancefloor. Each track I select is a canvas through
                which I express myself, weaving together a narrative that
                captivates and moves. This page is just the beginning—a glimpse
                into my evolving journey. Soon, it will connect you to a
                dedicated space where my artistic vision unfolds, and where my
                DJ mixes come alive.
                <br />
                <br />
                In the meantime, check out my SoundCloud{" "}
                <a
                    href={soundcloudUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>
                !
            </p>
        </Container>
    );
};

export default Djing;
