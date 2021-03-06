import "../assets/shoppingcart.css";
import { Button, Col, Container, Row, Form, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ContadorShop from "../pages/ContadorShop";
import { useEffect, useState } from "react";
import CreditsCard from "../pages/CreditsCard";
import axios from "axios";
import swal from "@sweetalert/with-react";

export default function Carrito({ articles, eliminarItemCarrito, user }) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});
  const [total, setTotal] = useState(0);
  const [crear, setCrear] = useState(false);
  const handleCrear = () => setCrear(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [counter, setCounter] = useState([]);
  const [precioSubtotal, setPrecioSubtotal] = useState(0);

  let subtotal = [];

  useEffect(() => {
    articles.forEach((element, index) => {
      setCounter((counter) => [...counter, element.cantidad]);
      subtotal.push(parseInt(element.cantidad));
    });
  }, []);

  const updateCounter = (num, id, i) => {
    if (num === 1) {
      subtotal.forEach((element, index) => {
        if (index === i) {
          return (element = element + 1);
        }
      });
      subtotal[0] = subtotal[0] + 1;
    }
    if (counter + num > 0) {
      setCounter(counter + num);
      setPrecioSubtotal(precioSubtotal * num);
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const carritoActualizado = carrito.map((item) => {
        if (item.id === id)
          return {
            ...item,
            cantidad: counter + num,
            subtotal: precioSubtotal * num,
          };
        else return item;
      });
      localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    }
  };

  let totalInicial = 0;

  for (let i = 0; i < articles.length; i++) {
    const element = articles[i];
    totalInicial = totalInicial + element.cantidad * element.producto.precio;
  }

  useEffect(() => {
    setTotal(totalInicial);
  }, [setTotal, totalInicial]);

  const modificarTotal = async () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let totalFinal = 0;
    carrito.map((item) => {
      return (totalFinal = totalFinal + item.cantidad * item.precioId);
    });
    setTotal(totalFinal);
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    try {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const carritoEnvio = articles.map((item, index) => {
        return {
          producto: item.producto.nombre,
          cantidad: carrito[index].cantidad,
        };
      });
      const datosDeVenta = {
        usuario: user.nombreUsuario,
        carrito: carritoEnvio,
        total: total,
        direcci??n: input.direcci??n,
        provincia: input.provincia,
        c??digoPostal: input.c??digoPostal,
        localidad: input.localidad,
        email: input.email,
        celularContacto: input.celularContacto,
        nombre: input.nombre,
        apellido: input.apellido,
        dni: input.dni,
        celular: input.celular,
        modalidadDePago: input.modalidadDePago,
      };
      await axios.post("/ventas", datosDeVenta);
      handleCrear();
      swal({
        title: "Muchas gracias por su compra!",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };

  return (
    <div>
      <Container style={{ padding: "50px" }}>
        <Row>
          <Col
            md={12}
            style={{ backgroundColor: "#fff", borderRadius: "20px" }}
          >
            <div>
              <h3 className="m-5">
                <strong>
                  {" "}
                  <u>Carrito de compras</u>{" "}
                </strong>{" "}
              </h3>

              {articles.map((item) => (
                <ContadorShop
                  key={`carrito-${item.producto._id}`}
                  cantidad={item.cantidad}
                  id={item.producto._id}
                  precio={item.producto.precio}
                  item={item}
                  eliminarItemCarrito={eliminarItemCarrito}
                  modificarTotal={modificarTotal}
                  crear={crear}
                />
              ))}

              <h4 style={{ textAlign: "end", paddingRight: "20px" }}>
                Total = $ {total}
              </h4>
              <hr />
              <h5 style={{ paddingTop: "10px", paddingBottom: "20px" }}>
                {" "}
                <strong>Datos de Env??o</strong>{" "}
              </h5>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Direcci??n</Form.Label>
                  <Form.Control
                    name="direcci??n"
                    onChange={(e) => handleChange(e)}
                    maxLength="40"
                    type="text"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese una direcci??n v??lida.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control
                      name="provincia"
                      onChange={(e) => handleChange(e)}
                      required
                      type="text"
                      maxLength="30"
                      pattern="[a-z,A-Z]{6,25}"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese una Provincia.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Localidad</Form.Label>
                    <Form.Control
                      name="localidad"
                      onChange={(e) => handleChange(e)}
                      required
                      type="text"
                      maxLength="35"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese una Provincia.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>C??digo postal</Form.Label>
                    <Form.Control
                      name="c??digoPostal"
                      onChange={(e) => handleChange(e)}
                      required
                      maxLength="6"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un c??digo postal.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      onChange={(e) => handleChange(e)}
                      type="email"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      nombre@example.com
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Tel??fono</Form.Label>
                    <Form.Control
                      name="celularContacto"
                      onChange={(e) => handleChange(e)}
                      required
                      placeholder="(C??digo de ??rea) N??mero"
                      maxLength="11"
                      minLength="10"
                      type="tel"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un n??mero de celular correcto
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <hr />
                <h5 style={{ paddingTop: "10px", paddingBottom: "20px" }}>
                  {" "}
                  <strong>Datos de Facturaci??n</strong>{" "}
                </h5>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      name="nombre"
                      onChange={(e) => handleChange(e)}
                      required
                      type="text"
                      maxLength="25"
                      minLength="2"
                      pattern="[a-z,A-Z]{2,25}"
                    />

                    <Form.Control.Feedback type="invalid">
                      Ingrese un nombre v??lido
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="apellido"
                      onChange={(e) => handleChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un apellido v??lido
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                      name="dni"
                      onChange={(e) => handleChange(e)}
                      type="number"
                      required
                      maxLength="8"
                      pattern="^[0-9]+"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un n??mero de DNI v??lido
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Tel??fono</Form.Label>
                    <Form.Control
                      name="celular"
                      onChange={(e) => handleChange(e)}
                      required
                      placeholder="(C??digo de ??rea) N??mero"
                      maxLength="11"
                      minLength="10"
                      type="tel"
                      pattern="^[0-9]+"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un n??mero de celular v??lido
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <hr />
                <h5 style={{ paddingTop: "10px", paddingBottom: "20px" }}>
                  {" "}
                  <strong>Medios de Pago</strong>{" "}
                </h5>

                <fieldset>
                  <Form.Group as={Row} onChange={(e) => handleChange(e)}>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Efectivo"
                        name="modalidadDePago"
                        id="formHorizontalRadios1"
                        value="efectivo"
                      />
                      <Form.Check
                        type="radio"
                        label="Tarjeta de cr??dito"
                        name="modalidadDePago"
                        id="formHorizontalRadios2"
                        value="tarjeta"
                        onClick={handleShow}
                      />
                      <Modal size="lg" show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Tarjeta de Cr??dito</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ maxHeight: "800px" }}>
                          <CreditsCard />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            Continuar
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Col>
                  </Form.Group>
                </fieldset>

                <div className="column comprar">
                  <Button
                    variant="primary"
                    className="btn bot??n-Iniciar-compra"
                    style={{ margin: "30px" }}
                    type="submit"
                  >
                    Comprar
                  </Button>
                  <div>
                    <NavLink style={{ margin: "30px" }} to="/" as={NavLink}>
                      Ver m??s productos
                    </NavLink>
                  </div>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
