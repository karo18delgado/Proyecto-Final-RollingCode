import React, { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import axios from 'axios';
import "../admin.css";

export default function FormProductos() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
        return event.stopPropagation();
    }
    try {
        // Consulta post a /productos
        await axios.post('/productos', input);
        alert('Producto creado con éxito!😁');
        setShow(false);
    } catch (error) {
        console.log(error);
    }
};

const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value , condicion: 'Habilitado' };
    setInput(changedInput);
};



  return (
    <div>
      <>
      <div className="m-auto text-center">
      <Button style={{fontSize: "30px" }} className="mt-5" variant="primary" onClick={handleShow}>
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
                className="form-productos-control"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                name="urlImage"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                className="form-productos-control"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                name="estado"
                onChange={(e) => handleChange(e)}
                type="text"
                className="form-productos-control"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label>Descripción breve</Form.Label>
              <Form.Control
                name="descripcion"
                onChange={(e) => handleChange(e)}
                type="text"
                className="form-productos-control"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustomUsername">
              <Form.Label>Precio</Form.Label>
              <InputGroup hasValidation className="form-productos-control">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  name="precio"
                  onChange={(e) => handleChange(e)}
                  type="number"
                  aria-describedby="inputGroupPrepend"
                  required
                  className="form-productos-control"
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un precio.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row className="form-productos">
            <Form.Group md="6" controlId="validationCustom03">
              <Form.Label>Tamaño de pantalla</Form.Label>
              <Form.Control
                name="pantalla"
                onChange={(e) => handleChange(e)}
                type="text"
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
                className="form-productos-control"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="3" controlId="validationCustom04">
              <Form.Label>Redes/Tecnología</Form.Label>
              <Form.Control
                name="redes"
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
                onChange={(e) => handleChange(e)}
                type="text"
                
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
                onChange={(e) => handleChange(e)}
                type="text"
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
                type="text"
                className="form-productos-control"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="3" controlId="validationCustom05">
              <Form.Label>Cámaras</Form.Label>
              <Form.Control
                name="camara"
                onChange={(e) => handleChange(e)}
                type="text"
                className="form-productos-control"
              />
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label>Descripción camara</Form.Label>
              <Form.Control
                name="camaraDescripcion"
                onChange={(e) => handleChange(e)}

                type="text"
                className="form-productos-control"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="3" controlId="validationCustom04">
              <Form.Label>Conector</Form.Label>
              <Form.Control
                name="conector"
                onChange={(e) => handleChange(e)}
                type="text"
                
                className="form-productos-control"
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
                
                className="form-productos-control"
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
                className="form-productos-control"
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
                className="form-productos-control"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.SelectCustom"
              className="form-productos-control"
            >
              <Form.Label>Custom select</Form.Label>
              <Form.Control name="categoria" onChange={(e) => handleChange(e)} as="select" custom required>
                <option>Selecciona una opcion</option>
                <option>Mac</option>
                <option>iPad</option>
                <option>iPhone</option>
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
