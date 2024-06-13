import styled from "styled-components";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Scene from "./components/3D/Scene";
import InteractiveCarousel from "./components/3D/InteractiveCarousel";
import Overlay from "./components/Overlay";

import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Resume from "./components/Sections/Resume";
import Djing from "./components/Sections/Djing";

const AppWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

function App() {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    const handleModelClose = () => {
        setSelectedIndex(-1);
    };
    return (
        <AppWrapper className="App">
            <Navbar />
            <Scene>
                <InteractiveCarousel
                    handleSelect={handleSelect}
                    selectedIndex={selectedIndex}
                />
            </Scene>

            {selectedIndex !== -1 && (
                <Overlay onOverlayClose={handleModelClose}>
                    {selectedIndex === 0 && <About />}
                    {selectedIndex === 1 && <Projects />}
                    {selectedIndex === 2 && <Resume />}
                    {selectedIndex === 3 && <Djing />}
                </Overlay>
            )}
        </AppWrapper>
    );
}

export default App;
