import React from "react";
import Model from "./Model";
import Sections from "../../data/Sections.json";

const Carousel = ({
    radius,
    handleSelect,
    handlePointerOver,
    handlePointerOut,
    hoveredIndex,
    selectedIndex,
}) => {
    return (
        <>
            {Array.from({ length: Sections.length }, (_, i) => {
                return (
                    <Model
                        key={i}
                        index={i}
                        position={[
                            Math.sin((i / Sections.length) * Math.PI * 2) *
                                radius,
                            0,
                            Math.cos((i / Sections.length) * Math.PI * 2) *
                                radius,
                        ]}
                        rotation={[
                            0,
                            Math.PI + (i / Sections.length) * Math.PI * 2,
                            0,
                        ]}
                        handleSelect={handleSelect}
                        handlePointerOver={handlePointerOver}
                        handlePointerOut={handlePointerOut}
                        hovered={hoveredIndex === i}
                        selected={selectedIndex === i}
                    />
                );
            })}
        </>
    );
};

export default Carousel;
