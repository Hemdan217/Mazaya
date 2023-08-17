/* eslint-disable jsx-a11y/alt-text */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-white"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Navbar.Brand href="#home">
          <img
            src="./Picture3.jpg"
            className="logo"
            style={{ width: "100px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="responsive-nav mx-3" href="#Message">
              Our Message
            </Nav.Link>
            <Nav.Link className="responsive-nav mx-3" href="#About">
              About us
            </Nav.Link>
            <Nav.Link className="responsive-nav mx-3" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="responsive-nav mx-3 me-0 pe-0" href="#contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
