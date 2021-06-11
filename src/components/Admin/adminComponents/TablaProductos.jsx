import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "../admin.css";

export default function TablaProductos() {

  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
      const getProductos = async () => {
          const response = await axios.get(`/productos`);
          setProductos(response.data);
      };

      getProductos();
  }, []);


  return (
    <>
     
                    
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
        {productos.map((producto) => (
        <tbody>
          <tr>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.precio}</td>
            <td>{producto.pantalla}</td>
            <td>{producto.redes}</td>
            <td>{producto.procesador}</td>
            <td>{producto.almacenamiento}</td>
            <td>{producto.camara}</td>
            <td>{producto.categoria}</td>
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
           ))}
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
