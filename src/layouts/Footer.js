import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, NavLink, Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container fluid className="row mx-auto d-flex float-lg-left ">
      <div className="col-4">
        <h4 className="row">Bicon Systems</h4>
        <p className="row">
          We understand the business requirements and help businesses seamlessly
          adopt the emerging technologies
        </p>
      </div>
      <div className="col-3 justify-content-end ms-auto">
        <h4 className=""> Pages to visit</h4>

        <Nav.Link as={Link} to="/technology">
          Techonology
        </Nav.Link>
        <Nav.Link as={Link} to="/consulting">
          Consulting
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About Us
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact Us
        </Nav.Link>
      </div>
    </Container>
  );
}
