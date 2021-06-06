import axios from "axios";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router";

export default function RegisterForm({ setToken }) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});
  const history = useHistory();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    if (input.password !== input.confPassword) {
      alert("Las contraseñas no coinciden");
    } else {
      try {
        const { data } = await axios.post("/auth/register", input);
        localStorage.setItem("token", JSON.stringify(data));
        setToken(data.token);
        alert("Usuario registrado correctamente 😉.");
        history.push("/login");
        form.reset();
      } catch (error) {
        console.log(error.response.data);
        alert("Datos mal cargados");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };

  return (
    <div className="register-container">
      <div className="title-container">
        <p className="title-text">Creá tu usuario Apple</p>
      </div>
      <p className="form-title">Formulario de registro</p>
      <p className="form-subtitle">
        Creá tu usuario para poder acceder a todas las funcionalidades
      </p>
      <div className="register-form">
        <Form
          className="container-row-form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Row className="container-row">
            <Form.Group className="name-div" controlId="validationCustom01">
              <Form.Control
                name="nombre"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                placeholder="Nombre"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="lastname-div" controlId="validationCustom02">
              <Form.Control
                required
                type="text"
                placeholder="Apellidos"
                name="apellido"
                onChange={(e) => handleChange(e)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group
            className="container-row"
            controlId="validationCustomUsername"
          >
            <InputGroup hasValidation>
              <Form.Control
                name="email"
                onChange={(e) => handleChange(e)}
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
                name="nombreUsuario"
                onChange={(e) => handleChange(e)}
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
                name="password"
                onChange={(e) => handleChange(e)}
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
                name="confPassword"
                onChange={(e) => handleChange(e)}
                className="container-row"
                type="password"
                placeholder="Confirmar contraseña"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
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
                name="fechaNacimiento"
                onChange={(e) => handleChange(e)}
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
            <Form.Group className="container-row">
              <div className="d-flex justify-content-start w-100 mx-1">
                <Form.Label>Sexo</Form.Label>
              </div>
              <Form.Control
                as="select"
                custom
                required
                name="sexo"
                onChange={(e) => handleChange(e)}
              >
                <option>Femenino</option>
                <option>Masculino</option>
              </Form.Control>
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
