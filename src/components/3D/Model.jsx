import { useLoader, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { easing } from "maath";
import { Text3D, Center } from "@react-three/drei";

import Sections from "../../data/Sections.json";

const Model = ({
    index,
    handleSelect,
    handlePointerOver,
    handlePointerOut,
    hovered,
    ...props
}) => {
    const ref = useRef();
    const modelPath = "/assets/models/" + Sections[index].Content.Model;

    const gltf = useLoader(GLTFLoader, modelPath, (loader) => {
        loader.manager.onError = (url) => {
            console.error("Error loading model:", url);
        };
    });

    useFrame((state, delta) => {
        if (ref.current) {
            easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
        }
    });

    return (
        <mesh
            ref={ref}
            onPointerOver={() => {
                handlePointerOver(index);
            }}
            onPointerOut={handlePointerOut}
            onClick={() => {
                handleSelect(index);
            }}
            {...props}
        >
            <primitive object={gltf.scene} />
            {hovered && (
                <Center position={[0, 0, -0.5]}>
                    <Text3D
                        font="/assets/fonts/Open Sans_Regular.json"
                        scale={[-0.3, 0.3, 0.3]}
                    >
                        {Sections[index].Name}
                    </Text3D>
                </Center>
            )}
        </mesh>
    );
};

export default Model;
