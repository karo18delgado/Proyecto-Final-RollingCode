import "../assets/shoppingcart.css";
import {
  Button,
  Col,
  Container,
  Row,
  Table,
  Form,
  Modal,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import ContadorShop from "../pages/ContadorShop";
import { useState } from "react";
import CreditsCard from "../pages/CreditsCard";
import axios from "axios";




export default function Carrito({ articles, eliminarItemCarrito }) {
  const [show, setShow] = useState(false);
  
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const { urlImage, nombre, descripcion, precio } = producto;
  console.log("Carrito ~ articles", articles);
  return (
    <div>
      <Container style={{ padding: "50px" }}>
        <Row>
          <Col
            md={12}
            style={{ backgroundColor: "#fff", borderRadius: "20px" }}
          >
            <div>
              <h3 className="mt-3">Carrito de compras</h3>
              <Table responsive="md" className="tabla-shop">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad</th>

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((item) => (
                    <tr>
                      <td>
                        <img className="tamaño-imagen" src={item.producto.urlImage} alt="..." />
                      </td>
                      <td>
                        {item.producto.nombre}
                        {item.producto.descripcion}
                      </td>
                      <td>{item.producto.precio}</td>
                      <td>
                        <ContadorShop
                          cantidad={item.cantidad}
                          id={item.producto._id}
                          precioId={item.producto.precio}
                        />
                      </td>
                      <td> </td>
                      <td>
                        <button
                          className="botón-shop"
                          onClick={() => eliminarItemCarrito(item.producto._id)}
                        >
                          <FontAwesomeIcon
                            className="trash-alt"
                            icon={["far", "trash-alt"]}
                          ></FontAwesomeIcon>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <hr />
              <h5>Dirección de Envío</h5>
              <Form>
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control placeholder="domicilio" />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Localidad</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>San Miguel de Tucumán</option>
                      <option>Yerba Buena</option>
                      <option>Concepción</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Código postal</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
              </Form>
              <hr />
              <h5>Formas de pago</h5>
              <Form.Group as={Row}>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Efectivo"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Tarjeta de Crédito"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    onClick={handleShow}
                  />
                  <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Tarjeta de Crédito</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{height:"400px"}}>
                      <CreditsCard />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
              </Form.Group>
              <div className="column comprar">
                <h2>Total: $</h2>
                <Button
                  variant="primary"
                  className="btn botón-Iniciar-compra"
                  type="onclick"
                  
                >
                  Iniciar Compra
                </Button>
                <div>
                  <NavLink style={{ margin: "10px" }} to="/" as={NavLink}>
                    ver más productos
                  </NavLink>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
