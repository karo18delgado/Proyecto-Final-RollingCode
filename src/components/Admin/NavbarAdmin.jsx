import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavbarAdmin() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand to="/" as={NavLink}>
        <FontAwesomeIcon
          className="apple-icon"
          icon={["fas", "user-cog"]}
        ></FontAwesomeIcon>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/admin/admin-usuarios" as={NavLink}>
            Usuarios
          </Nav.Link>
          <Nav.Link to="/admin/admin-productos" as={NavLink}>
            Productos
          </Nav.Link>
          <Nav.Link href="#link">Mensajes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
