import { Outlet, NavLink, Link, useNavigate   } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "..//images/logo.png";
import "../styles/footer.scss";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';

export default function RootLayout() {
  const navigate = useNavigate();
  const clickContactUs = () => {
    navigate("/contact")
  }
  return (
    <div className="root-layout">
      <header className="col-12 d-flex">
        <Navbar className="col-12 " bg="light" expand="lg">
          <Container>
            <img href="/" className="App-logo" src={logo} />
            <Navbar.Brand as={Link} to="/">
              Bicon
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/technology">
                  Techonology
                </Nav.Link>
                <Nav.Link as={Link} to="/consulting">
                  Consulting
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Button
        variant="primary"
          size="sm"
          onClick={clickContactUs}
          bg="none"
          className="contact-us-header col-1"
        >
          Contact us
          {/* <Nav.Link  as={Link} to="/contact">
            Contact Us
          </Nav.Link> */}
        </Button>
      </header>
      <main className="root-container">
        <Outlet />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
