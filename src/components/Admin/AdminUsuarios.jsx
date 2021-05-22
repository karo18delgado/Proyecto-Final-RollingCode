import { useState } from "react";
import "../Admin/adminUsuarios.css";
import { Button, Form, Modal, Table } from "react-bootstrap";

export default function AdminUsuarios() {
  const [show, setShow] = useState(false);

  const handleCloseBlock = () => setShow(false);
  const handleShowBlock = () => setShow(true);

  return (
    <div>
      <div>
        <Form>
          <Form.Group className="container-search">
            <Form.Label className="search-div">
              Búsquedo por nombre o correo
            </Form.Label>
            <Form.Control type="text" className="mx-sm-3 search-form" />
            <Button size="sm" className="btn mx-1">
              Buscar
            </Button>
            <Button size="sm" className="btn btn-success mx-1">
              Limpiar
            </Button>
          </Form.Group>
        </Form>
      </div>
      <Table striped bordered hover variant="dark" className="mt-5">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Fecha de nacimiento</th>
            <th>Sexo</th>
            <th>Habilitado/Deshabilitado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>01/01/1995</td>
            <td>Masculino</td>
            <td>Habilitado</td>
            <td>
              <Button
                size="sm"
                className="btn sm btn-success mx-1"
                onClick={handleShowBlock}
              >
                Bloqueo
              </Button>
              <Button size="sm" className="btn sm btn-danger mx-1">
                Eliminar
              </Button>
              <Button size="sm" className="btn sm btn-warning mx-1">
                Más información
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Modal editar */}

      <Modal show={show} onHide={handleCloseBlock}>
        <Modal.Header closeButton>
          <Modal.Title>Habilitar/Deshabilitar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Custom select</Form.Label>
              <Form.Control as="select" custom>
                <option>Habilitado</option>
                <option>Deshabilitado</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBlock}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseBlock}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
