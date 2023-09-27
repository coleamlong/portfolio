import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalNavbar from "./components/GlobalNavbar";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Container } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <GlobalNavbar />
            <Container id="home">
                <Header />
            </Container>
            <Container id="about">
                <About />
            </Container>
            <Container id="projects">
                <Projects />
            </Container>
        </div>
    );
}

export default App;
