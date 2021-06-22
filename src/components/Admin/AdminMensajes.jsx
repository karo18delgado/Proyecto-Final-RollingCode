import { useEffect, useState } from "react";
import "../Admin/admin.css";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";


export default function AdminMensajes() {
  
  //DETALLE
  const [mensajeInfo, setMensajeInfo] = useState(null);
  const [showInfo, setShowInfo] = useState(false);  
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = async (event) => {
    const mensajeId = event.target.value;
    const fetchedMensaje = await axios.get(`mensaje/${mensajeId}`);
    setMensajeInfo(fetchedMensaje.data);
    setShowInfo(true);
  }; 

  //RECIBIR MENSAJES
  const [mensajes, setMensajes] = useState([]);
  const [mensajesUnread, setMensajesUnread] = useState([]);  
  const recibirMensajes = async () => {
    const response = await axios.get("/mensaje");
    setMensajes(response.data);
    setMensajesUnread(response.data.filter(noLeidos => noLeidos.estado == "No leído"));
  };

  useEffect(() => {
    if (!mensajes.length) {
      recibirMensajes();
    }
  }, [mensajes]);

  //ELIMINAR
  const handleDelete = async (event) => {
    const mensajeId = event.target.value;
    const confirma = window.confirm('Desea eliminar?');
    if (confirma){
    await axios.delete(`/mensaje/${mensajeId}`);
    recibirMensajes();
  }
  };

  //LEIDO
  const handleLeido = async (event) => {
    const mensajeId = event.target.value;
    const lecturaMensaje = await axios.get(`/mensaje/${mensajeId}`);
    const newInput = { ...lecturaMensaje.data, estado: "Leído" };
    await axios.put("/mensaje", newInput);
    recibirMensajes();
  };

  //NO LEIDO
  const handleNoLeido = async (event) => {
    const mensajeId = event.target.value;
    const lecturaMensaje = await axios.get(`/mensaje/${mensajeId}`);
    const newInput = { ...lecturaMensaje.data, estado: "No leído" };
    await axios.put("/mensaje", newInput);
    recibirMensajes();
  };

  const [input, setInput] = useState('No leído')
  console.log("AdminMensajes -> input", input)

  //FILTRO
  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return ( 
    <>
      <div className="mt-3 ml-2 mb-3 mr-2">
      <h1>Tiene {mensajesUnread.length} mensajes no leídos</h1>
            <Button size="sm" className="btn btn-warning mx-1" onClick={handleChange} value="No leído">
              Sin leer
            </Button>
            <Button size="sm" className="btn btn-success mx-1" onClick={handleChange} value="Leído">
              Leídos
            </Button>
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
            mensaje.estado === input &&  (
          <tbody>
          <tr> 
            <td>{mensaje.fecha}</td>            
            <td>{mensaje.correo}</td>
            <td>{mensaje.asunto}</td>
            <td>{mensaje.estado}</td>
            <td>
              
            {mensaje.estado === "No leído" && (
                  <Button
                    size="sm"
                    className="btn sm btn-warning mx-1"
                    onClick={handleLeido}
                    value={mensaje._id}
                  >
                    Leído
                  </Button>
                )}
                {mensaje.estado === "Leído" && (
                  <Button
                    size="sm"
                    className="btn sm btn-success mx-1"
                    onClick={handleNoLeido}
                    value={mensaje._id}
                  >
                    No leído
                  </Button>
                )}
              <Button
                size="sm"
                className="btn sm btn-primary mx-1"
                onClick={handleShowInfo}
                value={mensaje._id}
              >
                Detalle
              </Button>
              <Button size="sm" className="btn sm btn-danger mx-1" onClick={handleDelete} value={mensaje._id}>
                Eliminar
                
              </Button>
            </td>
            </tr>
            </tbody>
            )))}
      </Table>
      </div>
      
      {/* Modal Leer Mensaje */}

      <Modal show={showInfo} onHide={handleCloseInfo}>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Más información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfo}>
            Cerrar
          </Button> 
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}



