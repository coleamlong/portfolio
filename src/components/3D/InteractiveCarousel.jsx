import React, { useState, useEffect } from "react";

import { ScrollControls } from "@react-three/drei";

import Rig from "./Rig";
import Carousel from "./Carousel";
import { Avatar } from "./Avatar";

const InteractiveCarousel = ({ handleSelect, selectedIndex }) => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handlePointerOver = (index) => {
        setHoveredIndex(index);
    };

    const handlePointerOut = () => {
        setHoveredIndex(-1);
    };

    useEffect(() => {
        document.body.style.overflow = selectedIndex !== -1 ? "hidden" : "auto";
    }, [selectedIndex]);

    return (
        <ScrollControls pages={4} infinite>
            <Rig rotation={[0, 0, 0.15]}>
                <group position={[0, -1.25, -0.2]} rotation={[-1.5, 0, 0]}>
                    <Avatar />
                </group>
                <Carousel
                    radius={1.5}
                    handleSelect={handleSelect}
                    handlePointerOver={handlePointerOver}
                    handlePointerOut={handlePointerOut}
                    hoveredIndex={hoveredIndex}
                    selectedIndex={selectedIndex}
                />
            </Rig>
        </ScrollControls>
    );
};

export default InteractiveCarousel;
