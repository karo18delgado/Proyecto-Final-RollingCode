import React, { useState } from "react";
import "../assets/perfilusuario.css";
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import axios from "axios";

export default function PerfilUsuario({ user }) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    try {
      await axios.put("/usuarios", input);
    } catch (error) {
      console.log(error.response.data);
      alert("Datos Incorrectos!");
    }
  };

  const [show1, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);

  const handleShow1 = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = () => setShow4(true);

  return (
    <div>
      <Container style={{ padding: "60px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 style={{ paddingBottom: "20px" }}>
              <img
                className="logo-sección-perfil"
                src="https://www.apple.com/v/accessibility/p/images/overview/hero_logo__bchmmzjnvys2_large_2x.png"
                alt=""
              />{" "}
              Perfil de Usuario
            </h2>
            <ListGroup
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "20px",
              }}
              variant="flush"
            >
              <ListGroup.Item
                action
                onClick={handleShow1}
                style={{ padding: "20px" }}
              >
                <strong>Nombre:</strong>
                <span> {user.nombre}</span>
              </ListGroup.Item>

              <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Nombre</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "40px" }}>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group
                      className="name-div"
                      controlId="validationCustom01"
                    >
                      <Form.Control
                        onChange={handleChange}
                        name="nombre"
                        required
                        type="text"
                        placeholder="Nombre"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose1}>
                        Cerrar
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleClose1}
                        type="submit"
                      >
                        Guardar cambios
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>

              <ListGroup.Item
                action
                onClick={handleShow2}
                style={{ padding: "20px" }}
              >
                <strong>Apellido:</strong>
                <span> {user.apellido}</span>
              </ListGroup.Item>

              <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Apellido</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "40px" }}>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group
                      className="lastname-div"
                      controlId="validationCustom02"
                    >
                      <Form.Control
                        onChange={handleChange}
                        name="apellido"
                        required
                        type="text"
                        placeholder="Apellidos"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose2}>
                        Cerrar
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleClose2}
                        type="submit"
                      >
                        Guardar cambios
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>

              <ListGroup.Item
                action
                onClick={handleShow3}
                style={{ padding: "20px" }}
              >
                <strong>Fecha de Nacimiento:</strong>
                <span> {user.fechaNacimiento}</span>
              </ListGroup.Item>

              <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Fecha de Nacimiento</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "40px" }}>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group
                      className="container"
                      controlId="validationCustom04"
                    >
                      <Form.Control
                        onChange={handleChange}
                        name="fechaNacimiento"
                        type="date"
                        min="1900-01-01"
                        max="2100-12-31"
                        placeholder="Fecha de nacimiento"
                        required
                        style={{ width: "80%" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Ingrese una fecha de nacimiento válido.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose3}>
                        Cerrar
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleClose3}
                        type="submit"
                      >
                        Guardar cambios
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>

              <ListGroup.Item
                action
                onClick={handleShow4}
                style={{ padding: "20px" }}
              >
                <strong> Usuario: </strong>
                <span>{user.nombreUsuario}</span>
              </ListGroup.Item>

              <Modal show={show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "40px" }}>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group
                      className="container"
                      controlId="validationCustom03"
                    >
                      <Form.Control
                        onChange={handleChange}
                        name="nombreUsuario"
                        type="text"
                        placeholder="Nombre de usuario"
                        required
                        style={{ width: "80%" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Ingrese un nombre de usuario válido.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose4}>
                        Cerrar
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleClose4}
                        type="submit"
                      >
                        Guardar cambios
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
