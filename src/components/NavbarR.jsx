import "../assets/font.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

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
    <Navbar className="px-2" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="resp-link-nav" as={NavLink} to="home">
        <FontAwesomeIcon
          className="apple-icon"
          icon={["fab", "apple"]}
        ></FontAwesomeIcon>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className="mx-3 resp-link-nav" href="#mac">
            Mac
          </Nav.Link>
          <Nav.Link className="mx-3 resp-link-nav" href="#ipad">
            Ipad
          </Nav.Link>
          <Nav.Link className="mx-3 resp-link-nav" href="#iphone">
            Iphone
          </Nav.Link>
          <Nav.Link className="mx-3 resp-link-nav" href="#aboutus">
            About Us
          </Nav.Link>
          <NavDropdown
            className="bag-icon mx-3 w-sm-25 resp-link-nav"
            title={title}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Carrito</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Favoritos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cuenta</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to="register" as={NavLink}>
              Registrarse
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      {/* </div> */}
    </Navbar>
  );
}
