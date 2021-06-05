import "../assets/font.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const title = <FontAwesomeIcon icon="user"></FontAwesomeIcon>;

export default function NavbarR({ userName, logOut }) {
  const location = useLocation();
  const { pathname } = location;
  if (pathname.includes("/admin")) return null;
  return (
    <Navbar className="px-2" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <FontAwesomeIcon
          className="apple-icon"
          icon={["fab", "apple"]}
        ></FontAwesomeIcon>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link
            className="mx-3 navstyle navstyle-mac"
            to="Mac"
            as={NavLink}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={["fas", "desktop"]}
            ></FontAwesomeIcon>
            iMac
          </Nav.Link>
          <Nav.Link
            className="mx-3 navstyle navstyle-ipad"
            to="iPad"
            as={NavLink}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={["fas", "tablet-alt"]}
            ></FontAwesomeIcon>
            iPad
          </Nav.Link>
          <Nav.Link
            className="mx-3 navstyle navstyle-iphone"
            to="iPhone"
            as={NavLink}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={["fas", "mobile-alt"]}
            ></FontAwesomeIcon>
            iPhone
          </Nav.Link>
          <Nav.Link
            className="mx-3 navstyle navstyle-about"
            to="about"
            as={NavLink}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={["fas", "users"]}
            ></FontAwesomeIcon>
            About Us
          </Nav.Link>
          {!userName && (
            <>
              <NavDropdown
                className="bag-icon mx-3"
                title={title}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item to="carrito" as={NavLink}>
                  Carrito
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">
                  Favoritos
                </NavDropdown.Item> */}
                <NavDropdown.Item to="login" as={NavLink}>
                  Cuenta
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="register" as={NavLink}>
                  Registrarse
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
          {userName && (
            <NavDropdown className="user-button ml-2" title={userName}>
              <NavDropdown.Item
                to="perfilUsuario"
                className="drop-profile-button"
                as={NavLink}
              >
                Ver perfil
              </NavDropdown.Item>
              <NavDropdown.Item
                to="/"
                as={NavLink}
                onClick={logOut}
                activeClassName
              >
                Cerrar Sesión
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
