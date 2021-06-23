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

export default function Carrito({ articles, eliminarItemCarrito }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

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
                      <td style={{ width: "40px" }}>
                        <img
                          className="tamaño-imagen"
                          src={item.producto.urlImage}
                          alt="..."
                        />
                      </td>
                      <td style={{ width: "30px", paddingRight: "40px" }}>
                        {item.producto.nombre}
                        <p></p>
                        {item.producto.descripcion}
                      </td>
                      <td>{item.producto.precio}</td>
                      <td>
                        <ContadorShop
                          cantidad={item.cantidad}
                          id={item.producto._id}
                          subtotal={item.cantidad * item.producto.precio}
                        />
                      </td>

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
                    <Modal.Body style={{ maxHeight: "700px" }}>
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
                <Button
                  variant="primary"
                  className="btn botón-Iniciar-compra"
                  type="onclick"
                  style={{ margin: "30px" }}
                  onClick={handleShow1}
                >
                  Iniciar Compra
                </Button>
                <Modal show={show1} onHide={handleClose1} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h2 className="letra-ventas">
                        <img
                          className="logo-ventas"
                          src="https://www.apple.com/v/accessibility/p/images/overview/hero_logo__bchmmzjnvys2_large.png"
                          alt=""
                        />
                        <span>Equipo de Ventas</span>
                      </h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Muchas gracias por su compra!</h4>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <div>
                  <NavLink style={{ margin: "30px" }} to="/" as={NavLink}>
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
