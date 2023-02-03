import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./images/logo.png";

export default function AppHeader() {
  let activeStyle = {
    textDecoration: "underline",
  };
  let activeClassName = "underline";

  return (
    <Navbar bg="light" expand="lg">
      <Image className="App-logo mx-auto" src={logo} />
      <Navbar.Brand href="/bicon/">Bicon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link to="/bicon/">Home</Nav.Link>
          <Nav.Link to='/bicon/' exact={true}>
   <i aria-hidden="true" className="home  icon" ></i>
   Home
 </Nav.Link>
          <Nav.Link
            href="/bicon/technology"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Techonology
          </Nav.Link>
          <Nav.Link to="/bicon/consulting">Consulting</Nav.Link>
          <Nav.Link to="/bicon/about">About Us</Nav.Link>
          <Nav.Link
            className="bg-green-500 font-bold"
            to="/bicon/contact"
            style={(isActive) => ({
              color: isActive ? "green" : "blue",
            })}
          >
            Contact Us
          </Nav.Link>
     
      </Navbar.Collapse>
    </Navbar>
  );
}
