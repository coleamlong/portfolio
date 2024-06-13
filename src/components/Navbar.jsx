import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const NavWrapper = styled.ul`
    position: absolute;
    top: 0;
    z-index: 1;
    display: flex;
    width: 100%;
    padding: 0 1rem;
    justify-content: space-between;
`;

const NavItem = styled.li`
    list-style: none;
    text-decoration: none;
    font-weight: 750;
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    button {
        color: white;
        border: none;
        background: none;
        cursor: pointer;
        margin-left: 1em;
        font-size: 1.5rem;
        color: #555;
        transition: transform 0.2s ease;
    }

    button:hover {
        transform: scale(1.2);
    }
`;

const Navbar = () => {
    const linkedInUrl = "https://www.linkedin.com/in/coleamlong/";
    const githubUrl = "https://github.com/coleamlong";
    const emailUrl = "mailto:coleamlong@gmail.com";

    const openLinkedIn = () => {
        window.open(linkedInUrl, "_blank");
    };

    const openGitHub = () => {
        window.open(githubUrl, "_blank");
    };

    const handleEmailButtonClick = () => {
        window.open(emailUrl, "_blank");
    };

    return (
        <NavWrapper>
            <NavItem>Cole Amlong</NavItem>
            <NavItem>
                <button onClick={handleEmailButtonClick}>
                    <FontAwesomeIcon color="white" icon={faEnvelope} />
                </button>
                <button onClick={openLinkedIn}>
                    <FontAwesomeIcon color="white" icon={faLinkedin} />
                </button>
                <button onClick={openGitHub}>
                    <FontAwesomeIcon color="white" icon={faGithub} />
                </button>
            </NavItem>
        </NavWrapper>
    );
};

export default Navbar;
