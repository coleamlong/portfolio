import React, { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const Rig = (props) => {
    const ref = useRef();
    const scroll = useScroll(); // Call useScroll as a hook

    useFrame((state, delta) => {
        if (ref.current) {
            // Update rotation based on scroll offset
            ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
        }

        // Smooth camera position adjustment
        easing.damp3(
            state.camera.position,
            [-state.pointer.x * 2, state.pointer.y + 0.5, 7.5],
            0.3,
            delta
        );

        // Camera to look at the origin
        state.camera.lookAt(0, 0, 0);
    });

    return <group ref={ref} {...props} />;
};

export default Rig;
