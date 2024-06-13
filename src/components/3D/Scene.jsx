import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import styled from "styled-components";

const SceneWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const Scene = ({ children }) => {
    return (
        <SceneWrapper>
            <Canvas camera={{ position: [0, 0, 1000], fov: 15 }}>
                <fog attach="fog" args={["#b48ba5", 7, 12]} />
                {children}
                <Environment
                    preset="dawn"
                    background
                    backgroundIntensity={1.5}
                    backgroundBlurriness={0.5}
                />
            </Canvas>
        </SceneWrapper>
    );
};

export default Scene;
