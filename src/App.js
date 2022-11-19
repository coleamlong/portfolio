import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="navbar-wrapper">
        <Navbar />
      </div>

      <div className="content">
        <About />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
