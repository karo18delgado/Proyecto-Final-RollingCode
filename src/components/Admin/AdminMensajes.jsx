import { useEffect, useState } from "react";
import "../Admin/admin.css";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";
import swal from "@sweetalert/with-react";

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
    setMensajesUnread(
      response.data.filter((noLeidos) => noLeidos.estado === "No leído")
    );
  };

  useEffect(() => {
    if (!mensajes.length) {
      recibirMensajes();
    }
  }, [mensajes]);

  //ELIMINAR
  const handleDelete = (event) => {
    const mensajeId = event.target.value;
    swal({
      title: "Está seguro que quiere eliminar este mensaje?",
      text: "Una vez eliminado, no podrá recuperarlo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        swal("Tu mensaje fue eliminado!", {
          icon: "success",
        });
        await axios.delete(`/mensaje/${mensajeId}`);
        recibirMensajes();
      } else {
        swal("El mensaje no fue eliminado!");
      }
    });
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

  const [input, setInput] = useState("No leído");

  //FILTRO
  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <>
      <div className="mt-3 ml-2 mb-3 mr-2">
        <h1>Tiene {mensajesUnread.length} mensajes no leídos</h1>
        <Button
          size="sm"
          className="btn btn-warning mx-1"
          onClick={handleChange}
          value="No leído"
        >
          Sin leer
        </Button>
        <Button
          size="sm"
          className="btn btn-success mx-1"
          onClick={handleChange}
          value="Leído"
        >
          Leídos
        </Button>
        <Table
          responsive
          striped
          bordered
          hover
          variant="dark"
          className="mt-5"
        >
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Email</th>
              <th>Asunto</th>
              <th>Leído/No Leído</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {mensajes.map(
            (mensaje) =>
              mensaje.estado === input && (
                <tbody key={`mensaje-${mensaje._id}`}>
                  <tr>
                    <td>{mensaje.fecha.slice(0, 10)}</td>
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
                        className="btn sm btn-primary mx-1 table-buttons"
                        onClick={handleShowInfo}
                        value={mensaje._id}
                      >
                        Detalle
                      </Button>
                      <Button
                        size="sm"
                        className="btn sm btn-danger mx-1 table-buttons"
                        onClick={handleDelete}
                        value={mensaje._id}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                </tbody>
              )
          )}
        </Table>
      </div>

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
                  <p>
                    {" "}
                    <strong>Fecha:</strong> {mensajeInfo.fecha.slice(0, 10)}
                  </p>
                  <p>
                    {" "}
                    <strong>Email:</strong> {mensajeInfo.correo}
                  </p>
                  <p>
                    {" "}
                    <strong>Asunto:</strong> {mensajeInfo.asunto}
                  </p>
                  <p style={{ wordBreak: "break-all" }}>
                    {" "}
                    <strong>Mensaje:</strong> {mensajeInfo.descripcion}
                  </p>
                  <p>
                    {" "}
                    <strong>Estado:</strong> {mensajeInfo.estado}
                  </p>
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
    </>
  );
}
