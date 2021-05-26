import { useState } from "react";
import { Button, Form, InputGroup, Modal, Table } from "react-bootstrap";
import "../Admin/admin.css";

export default function AdminProductos() {
  const [validated, setValidated] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row className="form-productos">
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                required
                type="text"
                className="form-productos-control"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label>Descripción breve</Form.Label>
              <Form.Control
                required
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
                  type="text"
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
                type="text"
                required
                className="form-productos-control"
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un valor de tamaño de pantalla.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="3" controlId="validationCustom04">
              <Form.Label>Redes/Tecnología</Form.Label>
              <Form.Control
                type="text"
                required
                className="form-productos-control"
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un tipo de red o tecnología.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="3" controlId="validationCustom04">
              <Form.Label>Procesador</Form.Label>
              <Form.Control
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
                type="text"
                required
                className="form-productos-control"
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un tamaño de almacenamiento.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="3" controlId="validationCustom05">
              <Form.Label>Cámaras</Form.Label>
              <Form.Control type="text" className="form-productos-control" />
            </Form.Group>
            <Form.Group
              controlId="exampleForm.SelectCustom"
              className="form-productos-control"
            >
              <Form.Label>Custom select</Form.Label>
              <Form.Control as="select" custom required>
                <option>Mac</option>
                <option>iPad</option>
                <option>iPhone</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button type="submit" className="button-form-productos">
            Registrar producto
          </Button>
        </Form>
      </div>
      <Table striped bordered hover variant="dark" className="mt-5 mb-5">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Breve descripción</th>
            <th>Precio</th>
            <th>Pantalla</th>
            <th>Redes/Tecnología</th>
            <th>Procesador</th>
            <th>Almacenamiento</th>
            <th>Cámaras</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iPhone 12 Pro</td>
            <td>El iPhone en su máxima expresión</td>
            <td>$271000</td>
            <td>6.1" o 6.7"</td>
            <td>Red 5G</td>
            <td>A14 Bionic chip. Fastest chip in a smartphone</td>
            <td>128GB - 256GB - 512gb</td>
            <td>Pro camera system. Ultra Wide, Wide, Telephoto</td>
            <td>iPhone</td>
            <td>
              <Button
                size="sm"
                className="btn sm btn-success mx-1"
                onClick={handleShowEdit}
              >
                Editar
              </Button>
              <Button
                size="sm"
                className="btn sm btn-warning mx-1"
                onClick={handleShowInfo}
              >
                Más información
              </Button>
              <Button size="sm" className="btn sm btn-danger mx-1">
                Eliminar
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Modal editar */}

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control
                type="text"
                placeholder="iPhone 12 Pro"
              ></Form.Control>
              {/* <Form.Control type="text">
                El iPhone en su máxima expresión
              </Form.Control>
              <Form.Control type="text">$271000</Form.Control>
              <Form.Control type="text">6.1" o 6.7"</Form.Control>
              <Form.Control type="text">Red 5G</Form.Control>
              <Form.Control type="text">
                A14 Bionic chip. Fastest chip in a smartphone
              </Form.Control>
              <Form.Control type="text">128GB - 256GB - 512gb</Form.Control>
              <Form.Control type="text">
                Pro camera system. Ultra Wide, Wide, Telephoto
              </Form.Control> */}
              <Form.Control as="select" custom>
                <option>Mac</option>
                <option>iPad</option>
                <option>iPhone</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseEdit}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal más info */}

      <Modal show={showInfo} onHide={handleCloseInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Más información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>
                <p>Nombre: Mark</p>
                <p>Apellido: Otto</p>
                <p>Email: @mdo</p>
                <p>Fecha de nacimiento: 01/01/1995</p>
                <p>Nombre de usuario: </p>
                <p>Sexo: Masculino</p>
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfo}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseInfo}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
