import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";
import Contact from "./views/Contact/Contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
