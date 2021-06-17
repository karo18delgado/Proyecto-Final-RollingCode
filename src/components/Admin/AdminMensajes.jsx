import { useEffect, useState } from "react";
import "../Admin/admin.css";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";


export default function AdminMensajes() {
  const [showBlock, setShowBlock] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  const handleCloseBlock = () => setShowBlock(false);
  const handleShowBlock = () => setShowBlock(true);
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = async (event) => {
    const mensajeId = event.target.value;
    const fetchedMensaje = await axios.get(`/auth/mensaje/${mensajeId}`);
    setMensaje(fetchedMensaje.data);
    setShowInfo(true);
  };

  const handleDelete = async (event) => {
    const mensajeId = event.target.value;
    const fetchedMensaje = await axios.delete(`/auth/mensaje/${mensajeId}`);
    setMensaje(fetchedMensaje.data);
    /* setShowInfo(true); */
  };

  const [mensajes, setMensajes] = useState([]);
  useEffect(() => {
      const recibirMensajes = async () => {
        const response = await axios.get("/auth/mensaje");
        setMensajes(response.data);
      };
      recibirMensajes();
  }, []);
  const [input, setInput] = useState({});
  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };


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
            <th>Email</th>
            <th>Asunto</th>
            <th>Leído/No Leído</th>
            <th>Acciones</th>
          </tr>
        </thead>          
          {mensajes.map((mensaje) => (
          <tbody>
          <tr>             
            <td>{mensaje.correo}</td>
            <td>{mensaje.asunto}</td>
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
                value={mensaje._id}
              >
                Ver
              </Button>
              <Button size="sm" className="btn sm btn-danger mx-1" onClick={handleDelete} value={mensaje._id}>
                Eliminar
                
              </Button>
            </td>
            </tr>
            </tbody>
            ))}
      </Table>

      {/* Modal Leído/No Leído */}

      <Modal show={showBlock} onHide={handleCloseBlock}>
        <Modal.Header closeButton>
          <Modal.Title>Leído/No Leído</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom onChange={handleChange}>
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

      {/* Modal Leer Mensaje */}

      <Modal show={showInfo} onHide={handleCloseInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Más información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
            {mensaje && (
              <Form.Label>
                <p>Email: {mensaje.correo}</p>
                <p>Asunto: {mensaje.asunto}</p>
                <p>Mensaje: {mensaje.descripcion}</p>
              </Form.Label>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfo}>
            Cerrar
          </Button>
        {/*   <Button variant="primary" onClick={handleCloseInfo}>
            Guardar cambios
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}



