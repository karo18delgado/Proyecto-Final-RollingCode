import React, { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import axios from "axios";
import "../admin.css";
import swal from "@sweetalert/with-react";

export default function FormProductos() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const inputprecio = +input.precio;
    if (inputprecio < 0) {
      swal({
        title: "El precio tiene que ser mayor a 0!",
        icon: "error",
      });
      return event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    try {
      // Consulta post a /productos
      await axios.post("/productos", input);
      swal({
        title: "Producto creado correctamente!",
        icon: "success",
      });
      setShow(false);
    } catch (error) {
      console.log(error.response.data);
      swal({
        title: error.response.data.msg,
        icon: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value, condicion: "Habilitado" };
    setInput(changedInput);
  };

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <>
        <div className="m-auto text-center">
          <Button
            style={{ fontSize: "30px" }}
            className="mt-5"
            variant="primary"
            onClick={handleShow}
          >
            Crear nuevo Producto
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nuevo Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center mt-5 mb-5">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row className="form-productos">
                  <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control
                      name="nombre"
                      onChange={(e) => handleChange(e)}
                      required
                      type="text"
                      minLength={2}
                      maxLength={30}
                      className="form-productos-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un nombre de producto.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                      name="urlImage"
                      onChange={(e) => handleChange(e)}
                      required
                      minLength={2}
                      maxLength={200}
                      type="text"
                      className="form-productos-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese una url.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="4" controlId="validationCustom02">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      name="estado"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      minLength={3}
                      maxLength={25}
                      className="form-productos-control"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese estado.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="4" controlId="validationCustom02">
                    <Form.Label>Descripción breve</Form.Label>
                    <Form.Control
                      name="descripcion"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      minLength={6}
                      maxLength={100}
                      className="form-productos-control"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese una descripción.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="4" controlId="validationCustomUsername">
                    <Form.Label className="d-block">Precio</Form.Label>
                    <InputGroup
                      hasValidation
                      className="form-productos-prepend"
                    >
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          $
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                    </InputGroup>
                    <Form.Control
                      name="precio"
                      onChange={(e) => handleChange(e)}
                      type="number"
                      aria-describedby="inputGroupPrepend"
                      required
                      className="form-productos-control-precio"
                      maxLength={15}
                      minLength={2}
                      pattern="[0-9]+([0-9]+)?"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un precio solo con numeros sin signos!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row className="form-productos">
                  <Form.Group md="6" controlId="validationCustom03">
                    <Form.Label>Tamaño de pantalla</Form.Label>
                    <Form.Control
                      name="pantalla"
                      minLength={3}
                      maxLength={20}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      required
                      className="form-productos-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un valor de tamaño de pantalla.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="4" controlId="validationCustom02">
                    <Form.Label>Descripción pantalla</Form.Label>
                    <Form.Control
                      name="pantallaDescripcion"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      minLength={2}
                      maxLength={120}
                      required
                      className="form-productos-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese una descripción de pantalla.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="3" controlId="validationCustom04">
                    <Form.Label>Redes/Tecnología</Form.Label>
                    <Form.Control
                      name="redes"
                      minLength={2}
                      maxLength={40}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      className="form-productos-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un tipo de red o tecnología.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="3" controlId="validationCustom04">
                    <Form.Label>Procesador</Form.Label>
                    <Form.Control
                      name="procesador"
                      minLength={2}
                      maxLength={40}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      required
                      className="form-productos-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un tipo de procesador.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="3" controlId="validationCustom04">
                    <Form.Label>Almacenamiento</Form.Label>
                    <Form.Control
                      name="almacenamiento"
                      minLength={2}
                      maxLength={20}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      required
                      className="form-productos-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un tamaño de almacenamiento.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="4" controlId="validationCustom02">
                    <Form.Label>Descripción almacenamiento</Form.Label>
                    <Form.Control
                      name="almacenamientoDescripcion"
                      onChange={(e) => handleChange(e)}
                      minLength={2}
                      maxLength={120}
                      type="text"
                      required
                      className="form-productos-control"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese una descripción de almacenamiento.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="3" controlId="validationCustom05">
                    <Form.Label>Cámaras</Form.Label>
                    <Form.Control
                      name="camara"
                      minLength={2}
                      maxLength={30}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      className="form-productos-control"
                      required
                    />
                  </Form.Group>
                  <Form.Group md="4" controlId="validationCustom02">
                    <Form.Label>Descripción camara</Form.Label>
                    <Form.Control
                      name="camaraDescripcion"
                      minLength={2}
                      maxLength={120}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      className="form-productos-control"
                      required
                    />
                  </Form.Group>
                  <Form.Group md="3" controlId="validationCustom04">
                    <Form.Label>Conector</Form.Label>
                    <Form.Control
                      name="conector"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      minLength={3}
                      maxLength={60}
                      className="form-productos-control"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un tipo de conector.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="3" controlId="validationCustom04">
                    <Form.Label>Conector descripcion</Form.Label>
                    <Form.Control
                      name="conectorDescripcion"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      minLength={2}
                      maxLength={120}
                      className="form-productos-control"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un tipo de conector.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="3" controlId="validationCustom04">
                    <Form.Label>Bateria</Form.Label>
                    <Form.Control
                      name="bateria"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      minLength={2}
                      maxLength={40}
                      className="form-productos-control"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un tamaño de bateria.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="4" controlId="validationCustom02">
                    <Form.Label>Descripción bateria</Form.Label>
                    <Form.Control
                      name="bateriaDescripcion"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      minLength={2}
                      maxLength={120}
                      className="form-productos-control"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese una descripción de bateria.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    controlId="exampleForm.SelectCustom"
                    className="form-productos-control"
                  >
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control
                      name="categoria"
                      onChange={(e) => handleChange(e)}
                      as="select"
                      custom
                      required
                    >
                      <option className="d-none"></option>
                      <option>Mac</option>
                      <option>iPad</option>
                      <option>iPhone</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    controlId="exampleForm.SelectCustom"
                    className="form-productos-control"
                  >
                    <Form.Label>Destacar</Form.Label>
                    <Form.Control
                      name="destaque"
                      onChange={(e) => handleChange(e)}
                      as="select"
                      custom
                      required
                    >
                      <option className="d-none"></option>
                      <option>Si</option>
                      <option>No</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Button type="submit" className="button-form-productos ml-4">
                  Registrar producto
                </Button>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}
