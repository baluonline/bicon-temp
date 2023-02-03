import { Outlet, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "..//images/logo.png"


export default function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar bg="light" expand="lg">
        <Container>
          <img href="/bicon" className="App-logo" src={logo} />
          <Navbar.Brand href="/bicon">Bicon</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/bicon">Home</Nav.Link>
              <Nav.Link href="/bicon/technology">Techonology</Nav.Link>
              <Nav.Link href="/bicon/consulting">Consulting</Nav.Link>
              <Nav.Link href="/bicon/about">About Us</Nav.Link>
              <Nav.Link href="/bicon/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
