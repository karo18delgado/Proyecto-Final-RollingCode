import axios from "axios";
import "../assets/font.css";
import "../assets/login.css";
import React, { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import swal from "@sweetalert/with-react";

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
        swal({
          title: "Usuario bloqueado!",
          icon: "warning",
        });
      } else {
        setToken(data.token);
        if (data.categoryUser === "admin") {
          swal({
            title: "Usuario admin logueado correctamente!",
            icon: "info",
          }).then(() => {
            history.push("/");
          });
        } else {
          swal({
            title: "Usuario logueado correctamente!",
            icon: "success",
          }).then(() => {
            history.push("/");
          });
        }
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Datos mal cargados!",
        icon: "error",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <h3>
          <b>Ingrese sus datos para iniciar sesión</b>
        </h3>
      </div>

      <div className="login-row-form">
        <Form className="login-row-form" noValidate onSubmit={handleSubmit}>
          <Form.Row className="mt-3">
            <Form.Group className="login-row" controlId="validationCustom03">
              <Form.Control
                name="email"
                type="email"
                minLength={6}
                maxLength={30}
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
              minLength={6}
              maxLength={30}
              onChange={handleChange}
              placeholder="Contraseña"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              required
            />
            <Form.Text className="text-muted ml-1">
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
