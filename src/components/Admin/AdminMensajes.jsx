import { useState } from "react";
import "../Admin/admin.css";
import { Button, Form, Modal, Table } from "react-bootstrap";

export default function AdminMensajes() {
  const [showBlock, setShowBlock] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleCloseBlock = () => setShowBlock(false);
  const handleShowBlock = () => setShowBlock(true);
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);

  return (
    <div>
      <div>
        <Form>
          <Form.Group className="container-search">
            <Form.Label className="search-div">
              Búsqueda por usuario o asunto
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
            <th>Usuario</th>
            <th>Email</th>
            <th>Asunto</th>
            <th>Leído/No Leído</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>rosendo</td>
            <td>rosendoalves05@gmail.com</td>
            <td>Problemas técnicos</td>
            <td>Leído</td>
            <td>
              <Button
                size="sm"
                className="btn sm btn-success mx-1"
                onClick={handleShowBlock}
              >
                Marcar
              </Button>
              <Button
                size="sm"
                className="btn sm btn-warning mx-1"
                onClick={handleShowInfo}
              >
                Ver
              </Button>
              <Button size="sm" className="btn sm btn-danger mx-1">
                Eliminar
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Modal editar */}

      <Modal show={showBlock} onHide={handleCloseBlock}>
        <Modal.Header closeButton>
          <Modal.Title>Leído/No Leído</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom>
                <option>Leído</option>
                <option>No Leído</option>
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

      {/* Modal más info */}

      <Modal show={showInfo} onHide={handleCloseInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Más información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>
                <p>usuario: rosendo</p>
                <p>Email: rosendoalves05@gmail.com</p>
                <p>Asunto: Problemas técnicos</p>
                <p>Mensaje: Problemas técnicos</p>
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
    </div>
  );
}
