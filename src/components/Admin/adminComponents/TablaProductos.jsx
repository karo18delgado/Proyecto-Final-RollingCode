import { Button, Form, Modal, Table, InputGroup } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../admin.css";
import swal from "@sweetalert/with-react";

export default function TablaProductos() {
  const [productoEdit, setProductoEdit] = useState([]);
  const [productoInfo, setProductoInfo] = useState(null);

  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [productos, setProductos] = useState([]);

  // Traer productos
  const getProductos = async () => {
    const response = await axios.get("/productos");
    setProductos(response.data);
  };

  useEffect(() => {
    if (!productos.length) {
      getProductos();
    }
  }, [productos]);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = async (event) => {
    const productoId = event.target.value;
    const fetchedProducto = await axios.get(`/productos/${productoId}`);
    setProductoEdit(fetchedProducto.data);
    setShowEdit(true);
  };

  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = async (event) => {
    const productoId = event.target.value;
    const fetchedProducto = await axios.get(`/productos/${productoId}`);
    setProductoInfo(fetchedProducto.data);
    setShowInfo(true);
  };

  // EDITAR

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newInput = { ...productoEdit, [name]: value };
    setProductoEdit(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const producto = productoEdit;
    await axios.put("/productos", producto);
    swal({
      title: "Producto editado correctamente!",
      icon: "info",
    });
    getProductos();
  };

  //ELIMINAR
  const handleDelete = (event) => {
    const productoId = event.target.value;
    swal({
      title: "Está seguro que quiere eliminar este producto?",
      text: "Una vez eliminado, no podrá recuperarlo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        swal("Tu producto fue eliminado!", {
          icon: "success",
        });
        await axios.delete(`/productos/${productoId}`);
        getProductos();
      } else {
        swal("El producto no fue eliminado!");
      }
    });
  };

  //DESHABILITAR
  const handleDeshabilitar = async (event) => {
    const productoId = event.target.value;
    const productoHabilitar = await axios.get(`/productos/${productoId}`);
    const newInput = { ...productoHabilitar.data, condicion: "Deshabilitado" };
    await axios.put("/productos", newInput);
    getProductos();
  };

  //HABILITAR
  const handleHabilitar = async (event) => {
    const productoId = event.target.value;
    const productoHabilitar = await axios.get(`/productos/${productoId}`);
    const newInput = { ...productoHabilitar.data, condicion: "Habilitado" };
    await axios.put("/productos", newInput);
    getProductos();
  };

  //REPLEGAR
  const handleReplegar = async (event) => {
    const productoId = event.target.value;
    const productoDestaque = await axios.get(`/productos/${productoId}`);
    const newInput = { ...productoDestaque.data, destaque: "No" };
    await axios.put("/productos", newInput);
    getProductos();
  };

  //DESTACAR
  const handleDestacar = async (event) => {
    const productoId = event.target.value;
    const productoDestaque = await axios.get(`/productos/${productoId}`);
    const newInput = { ...productoDestaque.data, destaque: "Si" };
    await axios.put("/productos", newInput);
    getProductos();
  };

  return (
    <>
      <Table
        striped
        bordered
        hover
        variant="dark"
        className="mt-5 mb-5"
        responsive
      >
        <thead>
          <tr>
            <th>Producto</th>
            <th>Breve descripción</th>
            <th>Precio</th>
            <th>Pantalla</th>
            <th>Redes/Tecnología</th>
            <th>Procesador</th>
            <th>Cámaras</th>
            <th>Categoría</th>
            <th>Condicion</th>
            <th>Destacado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {productos.map((producto) => (
          <tbody key={`producto-${producto._id}`}>
            <tr>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>{producto.pantalla}</td>
              <td>{producto.redes}</td>
              <td>{producto.procesador}</td>
              <td>{producto.camara}</td>
              <td>{producto.categoria}</td>
              <td>{producto.condicion}</td>
              <td>{producto.destaque}</td>
              <td>
                {/* Boton Editar */}
                <Button
                  size="sm"
                  className="btn sm btn-success mx-1 table-buttons"
                  onClick={handleShowEdit}
                  value={producto._id}
                >
                  Editar
                </Button>
                {/* Boton Mas Informacion */}
                <Button
                  size="sm"
                  className="btn sm btn-info mx-1 table-buttons"
                  onClick={handleShowInfo}
                  value={producto._id}
                >
                  Info
                </Button>
                {/* Boton Eliminar */}
                <Button
                  size="sm"
                  className="btn sm btn-danger mx-1 table-buttons"
                  onClick={handleDelete}
                  value={producto._id}
                >
                  Eliminar
                </Button>
                {/* Boton Ban y Habilitar */}
                {producto.condicion === "Deshabilitado" && (
                  <Button
                    size="sm"
                    className="btn sm btn-primary mx-1 table-buttons"
                    onClick={handleHabilitar}
                    value={producto._id}
                  >
                    Habilitar
                  </Button>
                )}
                {producto.condicion === "Habilitado" && (
                  <Button
                    size="sm"
                    className="btn sm btn-warning mx-1 table-buttons"
                    onClick={handleDeshabilitar}
                    value={producto._id}
                  >
                    Deshabilitar
                  </Button>
                )}
                {/* Boton Destacar y Replegar */}
                {producto.destaque === "No" && (
                  <Button
                    size="sm"
                    className="btn sm btn-primary mx-1 table-buttons"
                    onClick={handleDestacar}
                    value={producto._id}
                  >
                    Destacar
                  </Button>
                )}
                {producto.destaque === "Si" && (
                  <Button
                    size="sm"
                    className="btn sm btn-warning mx-1 table-buttons"
                    onClick={handleReplegar}
                    value={producto._id}
                  >
                    Replegar
                  </Button>
                )}
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
        <Form noValidate onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="exampleForm.SelectCustom">
              <strong>Nombre:</strong>
              <Form.Control
                name="nombre"
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder={productoEdit.nombre}
              ></Form.Control>
              <strong>Descripcion:</strong>
              <Form.Control
                name="descripcion"
                onChange={handleChange}
                type="text"
                placeholder={productoEdit.descripcion}
              ></Form.Control>
              <strong>Precio:</strong>
              <InputGroup hasValidation className="form-productos-control">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  name="precio"
                  onChange={handleChange}
                  type="text"
                  placeholder={productoEdit.precio}
                ></Form.Control>
              </InputGroup>
              <strong>Categoria:</strong>
              <Form.Control
                name="categoria"
                as="select"
                custom
                onChange={handleChange}
              >
                <option>Mac</option>
                <option>iPad</option>
                <option>iPhone</option>
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

      {/* Modal más info */}

      <Modal show={showInfo} onHide={handleCloseInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Más información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              {productoInfo && (
                <Form.Label>
                  <p>
                    <strong>Nombre:</strong> {productoInfo.nombre}
                  </p>
                  <p>
                    <img src={productoInfo.urlImage} alt="" />
                  </p>
                  <p>
                    <strong>Descripcion:</strong> {productoInfo.descripcion}
                  </p>
                  <p>
                    <strong>Estado:</strong> {productoInfo.estado}
                  </p>
                  <p>
                    <strong>Precio:</strong> {productoInfo.precio}
                  </p>
                  <p>
                    <strong>Pantalla:</strong> {productoInfo.pantalla}
                  </p>
                  <p>
                    <strong>Pantalla descripcion:</strong>{" "}
                    {productoInfo.pantallaDescripcion}
                  </p>
                  <p>
                    <strong>Redes:</strong> {productoInfo.redes}
                  </p>
                  <p>
                    <strong>Procesador:</strong> {productoInfo.procesasdor}
                  </p>
                  <p>
                    <strong>Almacenamiento:</strong>{" "}
                    {productoInfo.almacenamiento}
                  </p>
                  <p>
                    <strong>Almacenamiento descripcion:</strong>{" "}
                    {productoInfo.almacenamientoDescripcion}
                  </p>
                  <p>
                    <strong>Camara:</strong> {productoInfo.camara}
                  </p>
                  <p>
                    <strong>Camara descripcion:</strong>{" "}
                    {productoInfo.camaraDescripcion}
                  </p>
                  <p>
                    <strong>Bateria:</strong> {productoInfo.bateria}
                  </p>
                  <p>
                    <strong>Bateria descripcion:</strong>{" "}
                    {productoInfo.bateriaDescripcion}
                  </p>
                  <p>
                    <strong>Conector:</strong> {productoInfo.conector}
                  </p>
                  <p>
                    <strong>Conector descripcion:</strong>{" "}
                    {productoInfo.conectorDescripcion}
                  </p>
                  <p>
                    <strong>Categoria:</strong> {productoInfo.categoria}
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
