import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";

function GlobalNavbar() {
    return (
        <Navbar
            className="shadow-sm"
            sticky="top"
            expand="lg"
            bg="white"
            data-bs-theme="light"
        >
            <Container>
                <Link
                    style={{ cursor: "pointer" }}
                    className="text-decoration-none"
                    activeClass="active"
                    smooth
                    spy
                    to="home"
                    duration={100}
                    offset={-100}
                >
                    <Navbar.Brand>Cole Amlong</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            style={{ cursor: "pointer" }}
                            className="text-decoration-none text-dark px-3"
                            activeClass="active"
                            smooth
                            spy
                            to="about"
                            duration={100}
                            offset={-75}
                        >
                            About
                        </Link>
                        <Link
                            style={{ cursor: "pointer" }}
                            className="text-decoration-none text-dark px-3"
                            activeClass="active"
                            smooth
                            spy
                            to="projects"
                            duration={100}
                            offset={-25}
                        >
                            Projects
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default GlobalNavbar;
