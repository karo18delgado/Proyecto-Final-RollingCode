import { useEffect, useState } from "react";
import "../Admin/admin.css";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";


export default function AdminMensajes() {
  
  const [mensajeInfo, setMensajeInfo] = useState(null);
  const [mensajeState, setmensajeState] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = async (event) => {
    const mensajeId = event.target.value;
    const fetchedMensaje = await axios.get(`/auth/mensaje/${mensajeId}`);
    setMensajeInfo(fetchedMensaje.data);
    setShowInfo(true);
  }; 
  
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = async (event) => {
    const mensajeId = event.target.value;
    const estado = await axios.get(`/auth/mensaje/${mensajeId}`);
    setmensajeState(estado.data);
    setShowEdit(true);
  };

  const [mensajes, setMensajes] = useState([]);
  
  const recibirMensajes = async () => {
    const response = await axios.get("/auth/mensaje");
    setMensajes(response.data);
  };
  
  
  useEffect(() => {
    if (!mensajes.length) {
      recibirMensajes();
    }
  }, [mensajes]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...mensajeState, [name]: value };
    setmensajeState(newInput);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const mensaje = mensajeState;
    await axios.put("/auth/mensaje", mensaje);
    alert('Cambio de estado exitoso!😁');
    recibirMensajes();
  };

  const handleDelete = async (event) => {
    const mensajeId = event.target.value;
    const confirma = window.confirm('Desea eliminar?');
    if (confirma){
    await axios.delete(`/auth/mensaje/${mensajeId}`);
    recibirMensajes();
  }
  };
  
  return (
    
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

      <Table striped bordered hover variant="dark" className="mt-5">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Email</th>
            <th>Asunto</th>
            <th>Leído/No Leído</th>
            <th>Acciones</th>
          </tr>
        </thead>          
          {mensajes.map((mensaje) => (
          <tbody>
          <tr> 
            <td>{mensaje.fecha}</td>            
            <td>{mensaje.correo}</td>
            <td>{mensaje.asunto}</td>
            <td>{mensaje.estado}</td>
            <td>
              <Button
                size="sm"
                className="btn sm btn-success mx-1"
                onClick={handleShowEdit}
                value={mensaje._id}
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

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Leído/No Leído</Modal.Title>
        </Modal.Header>
        <Form noValidate onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control name="estado" type="text" as="select" custom onChange={handleChange}>
                <option>No Leído</option> 
                <option>Leído</option>
              </Form.Control>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseEdit} type="submit">
            Guardar cambios
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>

      {/* Modal Leer Mensaje */}

      <Modal show={showInfo} onHide={handleCloseInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Más información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
            {mensajeInfo && (
              <Form.Label>
                <p>Fecha: {mensajeInfo.fecha}</p>
                <p>Email: {mensajeInfo.correo}</p>
                <p>Asunto: {mensajeInfo.asunto}</p>
                <p>Mensaje: {mensajeInfo.descripcion}</p>
                <p>Estado: {mensajeInfo.estado}</p>
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



