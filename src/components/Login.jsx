import "../assets/font.css";
import "../assets/login.css";
import React from "react";
import { Button, Form, Nav } from "react-bootstrap";

export default function Login() {
  return (
    <div className="login-container">
    
      <p className="login-title"><h3><b>Por favor, registrese. </b></h3></p>
   
      <div className="login-form">
        <Form className="login-row-form" noValidate>
          <Form.Row className="login-row">
            <Form.Group
              className="login-row"
              controlId="validationCustom03"
            >
              <Form.Control
                type="text"
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
              Ingrese una contraaseña valida.
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="button-class" type="submit">
            Iniciar sesion 
          </Button>
          <Form.Text>
        <Nav.Link className="link-row" href="">
          <p><small>Olvidaste tu contraseña?</small></p>
        </Nav.Link>
        <Nav.Link className="link-row" href="">
          <p><small>No tienes una Apple ID? Registrate.</small></p>
        </Nav.Link>
        </Form.Text>
        </Form>
        
        
      </div>
    </div>
  );
}
