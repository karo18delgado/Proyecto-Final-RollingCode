import { Button, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/cards.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Landing() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (!productos.length) {
      const getProductos = async () => {
        const response = await axios.get(`/productos`);
        setProductos(response.data);
      };

      getProductos();
    }
  }, [productos]);

  return (
    <div className="bg-dark d-flex flex-column justify-content-center">
      <div className="d-flex flex-column justify-content-center card-landing">
        <Card
          style={{ backgroundColor: "rgb(255,255,255)" }}
          className="d-flex flex-column justify-content-center"
        >
          <div>
            <h1 className="d-flex flex-row justify-content-center mt-4">
              IPhone
            </h1>
            <Button
              variant="primary"
              className="btn btn-dark boton-comprar d-flex flex-row m-auto"
              type="submit"
            >
              <Link
                to="Iphone"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Tienda Iphone
              </Link>
            </Button>
          </div>
          <Carousel fade>
            {productos.map(
              (producto) =>
                producto.categoria === "iPhone" &&
                producto.condicion === "Habilitado" && (
                  <Carousel.Item>
                    <img
                      className="d-flex  foto-carrousel"
                      src={producto.urlImage}
                      alt="First slide"
                    />
                    <Carousel.Caption className="texto-carrousel">
                      <h3>{producto.nombre}</h3>
                      <p>$ {producto.precio}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
            )}
          </Carousel>
        </Card>
      </div>

      <div className="d-flex flex-column justify-content-center">
        <Card
          style={{ backgroundColor: "rgb(0,0,0)" }}
          className="d-flex flex-column justify-content-center"
        >
          <div style={{ marginBottom: "20px" }}>
            <h1 className="d-flex flex-row justify-content-center text-white mt-4">
              IPad
            </h1>
            <Button
              variant="primary"
              className="btn btn-light boton-comprar d-flex flex-row m-auto"
              type="submit"
            >
              <Link
                to="Ipad"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Tienda Ipad
              </Link>
            </Button>
          </div>
          <Carousel fade>
            {productos.map(
              (producto) =>
                producto.categoria === "iPad" &&
                producto.condicion === "Habilitado" && (
                  <Carousel.Item style={{ marginBottom: "35px" }}>
                    <img
                      className="d-flex foto-carrousel"
                      src={producto.urlImage}
                      alt="First slide"
                    />
                    <Carousel.Caption style={{ fontSize: "30px" }}>
                      <h3>{producto.nombre}</h3>
                      <p>$ {producto.precio}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
            )}
          </Carousel>
        </Card>
      </div>

      <div className="d-flex flex-column justify-content-center">
        <Card
          style={{ backgroundColor: "rgb(255,255,255)" }}
          className="d-flex flex-column justify-content-center"
        >
          <div>
            <h1 className="d-flex flex-row justify-content-center text-black mt-4">
              IMac
            </h1>
            <Button
              variant="primary"
              className="btn btn-dark boton-comprar d-flex flex-row m-auto"
              type="submit"
            >
              <Link
                to="Mac"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Tienda Mac
              </Link>
            </Button>
          </div>
          <Carousel fade>
            {productos.map(
              (producto) =>
                producto.categoria === "Mac" &&
                producto.condicion === "Habilitado" && (
                  <Carousel.Item style={{ marginBottom: "130px" }}>
                    <img
                      className="d-flex  foto-carrousel"
                      src={producto.urlImage}
                      alt="First slide"
                    />
                    <Carousel.Caption className="texto-carrousel">
                      <h3>{producto.nombre}</h3>
                      <p>$ {producto.precio}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
            )}
          </Carousel>
        </Card>
      </div>
    </div>
  );
}
