import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Resume = () => {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/assets/resume.pdf";
        link.download = "Cole Amlong's Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Container>
            <h1>Resume</h1>
            <h3>
                Click&nbsp;
                <span
                    onClick={downloadResume}
                    style={{
                        cursor: "pointer",
                        color: "MediumSlateBlue",
                        textDecoration: "underline",
                    }}
                >
                    here
                </span>
                &nbsp;to download my resume!
            </h3>
        </Container>
    );
};

export default Resume;
