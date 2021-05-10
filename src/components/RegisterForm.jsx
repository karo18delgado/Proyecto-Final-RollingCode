import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function RegisterForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === true) {
      setValidated(false);
      form.reset();
    } else {
      setValidated(true);
    }
  };

  return (
    <div className="register-container">
      <p className="title-text">Creá tu usuario Apple</p>
      <div className="register-form">
        <Form
          className="container-row-form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Row className="container-row">
            <Form.Group className="name-div" controlId="validationCustom01">
              <Form.Control required type="text" placeholder="Nombre" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="lastname-div" controlId="validationCustom02">
              <Form.Control required type="text" placeholder="Apellidos" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group
            className="container-row"
            controlId="validationCustomUsername"
          >
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                nombre@example.com
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <hr className="divider-border"></hr>
          <Form.Row className="container-row">
            <Form.Group
              className="container-row"
              controlId="validationCustom03"
            >
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un nombre de usuario válido.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="container-row"
              controlId="validationCustom05"
            >
              <Form.Control
                type="password"
                placeholder="Contraseña"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                required
              />
              <Form.Control.Feedback type="invalid">
                Debe contener 6 o más dígitos, una mayúscula, una minúscula y un
                n°.
              </Form.Control.Feedback>
              <Form.Control
                className="container-row"
                type="password"
                placeholder="Confirmar contraseña"
                required
              />
              <Form.Control.Feedback type="invalid">
                Debe contener 6 o más dígitos, una mayúscula, una minúscula y un
                n°.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="container-row"
              controlId="validationCustom04"
            >
              <Form.Control
                type="date"
                min="1900-01-01"
                max="2100-12-31"
                placeholder="Fecha de nacimiento"
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese una fecha de nacimiento válido.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <hr className="divider-border-1"></hr>
          <Form.Group className="group-div">
            <Form.Check
              required
              label="Acepto los términos y condiciones"
              feedback="Debes aceptar los términos y condiciones antes de registrarte."
            />
          </Form.Group>
          <Button className="button-class" type="submit">
            Registrarse
          </Button>
        </Form>
      </div>
    </div>
  );
}
