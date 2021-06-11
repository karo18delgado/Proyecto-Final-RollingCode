import { useEffect, useState } from "react";
import "../Admin/admin.css";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";

export default function AdminUsuarios() {
  const [showBlock, setShowBlock] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleCloseBlock = () => setShowBlock(false);
  const handleShowBlock = () => setShowBlock(true);
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getUsuarios = async () => {
      const response = await axios.get(`/usuarios`);
      setUsuarios(response.data);
    };

    getUsuarios();
  }, []);

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
        {usuarios.map((usuario) => (
          <tbody>
            <tr>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.email}</td>
              <td>{usuario.fechaNacimiento}</td>
              <td>{usuario.sexo}</td>
              <td>Habilitado</td>
              <td>
                <Button
                  size="sm"
                  className="btn sm btn-success mx-1"
                  onClick={handleShowBlock}
                >
                  Bloqueo
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
        ))}

        {/* <tbody>
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
        </tbody> */}
      </Table>

      {/* Modal Bloquear */}

      <Modal show={showBlock} onHide={handleCloseBlock}>
        <Modal.Header closeButton>
          <Modal.Title>Habilitar/Deshabilitar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
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
    </div>
  );
}
