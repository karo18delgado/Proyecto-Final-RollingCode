import "../assets/font.css";
import "../assets/login.css";
import React, { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";

// const admin = {
//   email: "admin@apple.com",
//   name: "Administrador",
//   password: "admin@123",
// };

export default function Login({ setUser }) {
  // const [input, setInput] = useState({});
  // const history = useHistory();

  // const handleChange = (event) => {
  //   const { value, name } = event.target;
  //   const newInput = { ...input, [name]: value };
  //   setInput(newInput);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (input.email === admin.email && input.password === admin.password) {
  //     alert("Logueo exitoso 😎 " + admin.name);
  //     setUser(admin.name);
  //     history.push("/admin");
  //   } else {
  //     alert("datos incorrectos.");
  //   }
  // };

  return (
    <div className="login-container">
      <p className="login-title">
        <h3>
          <b>Por favor, registrese. </b>
        </h3>
      </p>

      <div className="login-form">
        <Form className="login-row-form" noValidate>
          <Form.Row className="login-row">
            <Form.Group className="login-row" controlId="validationCustom03">
              <Form.Control
                type="email"
                // onChange={handleChange}
                placeholder="Apple ID"
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un nombre de usuario válido.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group className="login-row" controlId="validationCustom05">
            <Form.Control
              type="password"
              // onChange={handleChange}
              placeholder="Contraseña"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              required
            />
            <Form.Text className="text-muted">
              <small>
                Su ID de Apple es la direccion de correo electronico que usa
                para iniciar sesion en iTunes, App Store e iCloud.
              </small>
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Ingrese una contraseña valida.
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="button-class" type="submit">
            Iniciar sesion
          </Button>
          <Form.Text>
            <Nav.Link className="link-row" href="">
              <p>
                <small>Olvidaste tu contraseña?</small>
              </p>
            </Nav.Link>
            <Nav.Link to="register" as={NavLink} className="link-row" href="">
              <p>
                <small>No tienes una Apple ID? Registrate.</small>
              </p>
            </Nav.Link>
          </Form.Text>
        </Form>
      </div>
    </div>
  );
}
