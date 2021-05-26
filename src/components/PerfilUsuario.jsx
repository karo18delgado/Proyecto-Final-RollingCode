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

export default function PerfilUsuario() {
  const [show1, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleClose5 = () => setShow5(false);

  const handleShow1 = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = () => setShow4(true);
  const handleShow5 = () => setShow5(true);

  return (
    <div>
      <Container style={{ padding: "60px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 style={{paddingBottom:'20px'}}>
            <img
                    className="logo-sección-perfil"
                    src="https://www.apple.com/v/accessibility/p/images/overview/hero_logo__bchmmzjnvys2_large_2x.png"
                    alt=""
                />{" "}
              Perfil de Usuario</h2>
            <ListGroup
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "20px",
              }}
              variant="flush"
            >
              <ListGroup.Item action onClick={handleShow1} style={{padding:'20px'}}>
                Nombre:
              </ListGroup.Item>
              <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Nombre</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding:'40px'}}>
                  <Form.Group
                    className="name-div"
                    controlId="validationCustom01"
                  >
                    <Form.Control required type="text" placeholder="Nombre"  />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose1}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              <ListGroup.Item action onClick={handleShow2} style={{padding:'20px'}} >Apellido:</ListGroup.Item>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Apellido</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding:'40px'}}>
                  <Form.Group
                    className="lastname-div"
                    controlId="validationCustom02"
                  >
                    <Form.Control
                      required
                      type="text"
                      placeholder="Apellidos"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose2}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              <ListGroup.Item  action onClick={handleShow3} style={{padding:'20px'}} >
                Fecha de Nacimiento:
              </ListGroup.Item>
              <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Fecha de Nacimiento</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding:'40px'}}>
                  <Form.Group
                    className="container"
                    controlId="validationCustom04"
                  >
                    <Form.Control
                      type="date"
                      min="1900-01-01"
                      max="2100-12-31"
                      placeholder="Fecha de nacimiento"
                      required
                      style={{width:'80%'}}
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese una fecha de nacimiento válido.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose3}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              <ListGroup.Item action onClick={handleShow4} style={{padding:'20px'}} >Usuario:</ListGroup.Item>
              <Modal show={show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding:'40px'}}>
                  <Form.Group
                    className="container"
                    controlId="validationCustom03"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Nombre de usuario"
                      required
                      style={{width:'80%'}}
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un nombre de usuario válido.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose4}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose4}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              <ListGroup.Item action onClick={handleShow5} style={{padding:'20px'}} >Contraseña:</ListGroup.Item>
              <Modal show={show5} onHide={handleClose5}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding:'40px'}}>
                  <Form.Group
                    className="container"
                    controlId="validationCustom05"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                      required
                      style={{width:'80%'}}
                    />
                    <Form.Control.Feedback type="invalid">
                      Debe contener 6 o más dígitos, una mayúscula, una
                      minúscula y un n°.
                    </Form.Control.Feedback>
                    <Form.Control
                      className="container-row"
                      type="password"
                      placeholder="Confirmar contraseña"
                      required
                      style={{width:'80%'}}
                    />
                    <Form.Control.Feedback type="invalid">
                      Debe contener 6 o más dígitos, una mayúscula, una
                      minúscula y un n°.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose5}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose5}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
