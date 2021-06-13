import { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Cards({ art }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="my-3 col-12 col-lg-4 text-center">
        <Card
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className=" m-auto style-card"
          style={{ width: "18rem" }}
        >
          <Card.Img className=" m-auto" variant="top" src={art.image} />
          <Card.Body className="card-container">
            <Card.Text className="text-naranja">{art.estado}</Card.Text>
            <Card.Title className="titulo-card">
              <h3>{art.titulo}</h3>
            </Card.Title>
            <Card.Text className="text-encabezado">{art.subtitulo}</Card.Text>
            <Card.Text className="text-precio">{art.precio}</Card.Text>
          </Card.Body>
          <Card.Body>
          <Button
              to="carrito" as={NavLink} className="btnCarrito" variant="dark"
              style={{ margin: "8px", borderRadius: "50%" }}
            >
                    <FontAwesomeIcon
                      className="shoppingCart"
                      icon={["fas", "shopping-cart"]}
                    ></FontAwesomeIcon>
            </Button>
            <Button
              // href=
              // target="_blank"
              className="btn boton-comprar mb-auto text-center"
              variant="primary"
            >
              Ver detalle
            </Button>
          </Card.Body>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <hr class="hr-articulos" />
              <Card.Body>
                <Card.Text className="text-encabezado">
                  {art.pantalla}
                </Card.Text>
                <Card.Text className="text-precio">{art.subpantalla}</Card.Text>
                <Card.Img
                  className="mt-3 m-auto"
                  variant="top"
                  style={{ width: "45px", height: "40px" }}
                  src={art.procesador}
                />
                <Card.Text className="text-precio">
                  {art.subprocesador}
                </Card.Text>
                <Card.Img
                  className="mt-3 m-auto"
                  variant="top"
                  style={{ width: "50px", height: "40px" }}
                  src={art.bateria}
                />{" "}
                <Card.Text className="text-precio">{art.subbateria}</Card.Text>
                <Card.Text className="mt-3 text-encabezado">
                  {art.almacenamiento}
                </Card.Text>
                <Card.Text className="text-precio">
                  {art.subalmacenamiento}
                </Card.Text>
              </Card.Body>
            </div>
          </Collapse>
        </Card>
      </div>
    </>
  );
}
