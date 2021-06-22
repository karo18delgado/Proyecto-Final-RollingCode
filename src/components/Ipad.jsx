import { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

// import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Cards({ producto, setproductosCarrito }) {
  const [open, setOpen] = useState(false);

  const onClickCart = async () => {
    let productos = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoId = producto._id;
    // setProductoCart([productoId]);
    productos.push({ productoId, cantidad: 1 });
    localStorage.setItem("carrito", JSON.stringify(productos));

    const response = await axios.get(`/productos/${productoId}`);
    setproductosCarrito((productosCarrito) => [
      ...productosCarrito,
      { producto: response.data, cantidad: 1 },
    ]);
  };

  return (
    <>
      <div className="my-3 col-12 col-lg-4 text-center">
        <Card
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className=" m-auto style-card"
          style={{ width: "18rem" }}
        >
          <Card.Img
            className=" m-auto"
            variant="top"
            style={{ width: "150px", height: "210px" }}
            src={producto.urlImage}
          />
          <Card.Body className="card-container">
            <Card.Text className="text-naranja">{producto.estado}</Card.Text>
            <Card.Title className="titulo-card">
              <h3>{producto.nombre}</h3>
            </Card.Title>
            <Card.Text className="text-encabezado">
              {producto.descripcion}
            </Card.Text>
            <Card.Text className="text-precio">${producto.precio}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Button
              className="btnCarrito"
              variant="dark"
              onClick={onClickCart}
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
              onClick={() => setOpen(!open)}
            >
              Ver detalle
            </Button>
          </Card.Body>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <hr class="hr-articulos" />
              <Card.Body className="text-center">
                <Card.Text className="text-encabezado">
                  {producto.pantalla}
                </Card.Text>
                <Card.Text className="text-precio">
                  {producto.pantallaDescripcion}
                </Card.Text>
                <Card.Img
                  className=" mt-3 m-auto"
                  variant="top"
                  style={{ width: "45px", height: "40px" }}
                  src="https://www.apple.com/v/mac/home/be/images/overview/compare/compare_icon_m1__fz8nzgohw2ai_large_2x.png"
                />
                <Card.Text className="text-precio">
                  {producto.procesador}
                </Card.Text>
                <Card.Img
                  className="mt-3 m-auto"
                  variant="top"
                  style={{ width: "40px", height: "36px" }}
                  src="https://www.apple.com/v/iphone/home/ax/images/overview/compare/icon_5g__ew2qs88wie4i_large_2x.png"
                />
                <Card.Text className="text-precio">{producto.redes}</Card.Text>
                <Card.Img
                  className="mt-3 m-auto"
                  variant="top"
                  style={{ width: "50px", height: "25px" }}
                  src="https://www.apple.com/v/ipad/home/bm/images/overview/compare_usbc_thunderbolt__fuat6j3gyc2u_large_2x.png"
                />
                <Card.Text className="text-precio">
                  {producto.conectorDescripcion}
                </Card.Text>
              </Card.Body>
            </div>
          </Collapse>
        </Card>
      </div>
    </>
  );
}
