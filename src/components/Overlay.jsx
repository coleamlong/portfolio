import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const OverlayContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    max-height: 80%;
    background-color: white;
    border-radius: 1em;
    transition: width 0.5s ease-in-out;
    padding: 1em;
    display: flex;
    flex-direction: column;

    &.visible {
        animation: ${fadeInOut} 0.25s ease-in-out forwards;
    }

    &.hidden {
        animation: ${fadeOut} 0.25s ease-in-out forwards;
    }

    @media (max-width: 768px) {
        width: 80%;
        max-height: 70%;
    }

    @media (max-width: 480px) {
        width: 90%;
        max-height: 80%;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    background: none;
    border: none;
    color: #000a14;
    font-size: 1.5em;
    font-weight: 750;
    cursor: pointer;
    align-self: flex-end;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const Content = styled.div`
    color: #000a14;
    box-sizing: border-box;
    overflow-y: auto;
    max-height: calc(100vh - 8em);
`;

const Overlay = ({ onOverlayClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleCloseOverlay = () => {
        setIsVisible(false);
        setTimeout(() => {
            onOverlayClose();
        }, 250);
    };

    return (
        <OverlayContainer className={isVisible ? "visible" : "hidden"}>
            <CloseButton onClick={handleCloseOverlay}>X</CloseButton>
            <Content>{children}</Content>
        </OverlayContainer>
    );
};

export default Overlay;
