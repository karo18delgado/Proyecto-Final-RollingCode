import axios from "axios";
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

export default function Login({ setUser, setToken }) {
  const [input, setInput] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", input);
      localStorage.setItem("token", JSON.stringify(data));
      if (data.blockUser === "Deshabilitado") {
        alert("Usuario bloqueado");
      } else {
        setToken(data.token);
        if (data.categoryUser === "admin") {
          alert("Logueo Admin exitoso 😎 ");
          history.push("/");
        } else {
          alert("Logueo exitoso 😎 ");
          history.push("/");
        }
      }
    } catch (error) {
      console.log(error);
      alert("Datos incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <h3>
          <b>Por favor, registrese. </b>
        </h3>
      </div>

      <div className="login-form">
        <Form className="login-row-form" noValidate onSubmit={handleSubmit}>
          <Form.Row className="login-row">
            <Form.Group className="login-row" controlId="validationCustom03">
              <Form.Control
                name="email"
                type="email"
                onChange={handleChange}
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
              name="password"
              type="password"
              onChange={handleChange}
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
            <Nav.Link className="link-row">
              <p>
                <small>Olvidaste tu contraseña?</small>
              </p>
            </Nav.Link>
            <Nav.Link to="register" as={NavLink} className="link-row">
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
