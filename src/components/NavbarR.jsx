import "../assets/font.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const title = <FontAwesomeIcon icon="shopping-bag"></FontAwesomeIcon>;

export default function NavbarR() {
  return (
    <Navbar className="nav-font" bg="dark" variant="dark" expand="lg">
      <div className="div-container-nav">
        <Navbar.Brand href="#home">
          <FontAwesomeIcon
            className="apple-icon"
            icon={["fab", "apple"]}
          ></FontAwesomeIcon>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#mac">Mac</Nav.Link>
            <Nav.Link href="#ipad">Ipad</Nav.Link>
            <Nav.Link href="#iphone">Iphone</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <NavDropdown
              className="bag-icon"
              title={title}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Carrito</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Favoritos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cuenta</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Registrarse
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
