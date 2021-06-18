import { useEffect, useState } from "react";
import "../Admin/admin.css";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";

export default function AdminUsuarios() {
  const [showBlock, setShowBlock] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [usuario, setUsuario] = useState(null);
  // const [input, setInput] = useState({});
  const handleCloseBlock = () => setShowBlock(false);

  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   const blockInput = { ...input, [name]: value };
  //   setInput(blockInput);
  // };

  // const handleCloseBlock = () => setShowBlock(false);
  // const handleCloseBlockAdmin = async () => {
  //   const { data } = await axios.put("/usuarios", input);
  //   console.log("handleCloseBlockAdmin ~ data", data);
  //   setShowBlock(false);
  // };

  const handleShowBlock = () => setShowBlock(true);
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = async (event) => {
    const userId = event.target.value;
    const fetchedUsuario = await axios.get(`/usuarios/${userId}`);
    setUsuario(fetchedUsuario.data);
    setShowInfo(true);
  };

  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    const response = await axios.get("/usuarios");
    setUsuarios(response.data);
  };

  useEffect(() => {
    if (!usuarios.length) {
      getUsuarios();
    }
  }, [usuarios]);

  //ELIMINAR
  const handleDelete = async (event) => {
    const usuarioID = event.target.value;
    const confirma = window.confirm("Desea eliminar el usuario?");
    if (confirma) {
      await axios.delete(`/usuarios/${usuarioID}`);
      getUsuarios();
    }
  };

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
                  value={usuario._id}
                >
                  Más información
                </Button>
                <Button
                  size="sm"
                  className="btn sm btn-danger mx-1"
                  onClick={handleDelete}
                  value={usuario._id}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
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
              {usuario && (
                <Form.Label>
                  <p>Nombre: {usuario.nombre}</p>
                  <p>Apellido: {usuario.apellido}</p>
                  <p>Email: {usuario.email}</p>
                  <p>Fecha de nacimiento: {usuario.fechaNacimiento}</p>
                  <p>Nombre de usuario: {usuario.nombreUsuario}</p>
                  <p>Sexo: {usuario.sexo}</p>
                  <p>{usuario.categoryUser}</p>
                </Form.Label>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfo}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
