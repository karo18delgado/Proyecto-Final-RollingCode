import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../assets/cards.css";
import Cards from "./Cards";
import { useState } from "react";

const articulos = [
  {
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=470&amp;hei=556&amp;fmt=jpeg&amp;qlt=95&amp;.v=1604021663000",
    titulo: "iPhone 12 Pro",
    estado: "Nuevo",
    subtitulo: "El iPhone en su máxima expresión",
    precio: "$270.999",
    pantalla: "6.1 o 6.7 pulgadas",
    subpantalla: "Pantalla Super Retina XDR",
    red: "Compatible con 5G",
    camara: "Sistema de cámaras Pro",
    subcamara: "(ultra gran angular, gran angular y teleobjetivo)",
  },
  {
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=470&amp;hei=556&amp;fmt=jpeg&amp;qlt=95&amp;.v=1617135051000",
    titulo: "iPhone 12",
    estado: "Nuevo",
    subtitulo: "Superpoderoso.",
    precio: "$220.999",
    pantalla: "5.4 o 6.1 pulgadas",
    subpantalla: "Pantalla Super Retina XDR",
    red: "Compatible con 5G",
    camara: "Sistema avanzado de dos cámaras",
    subcamara: "(ultra gran angular y gran angular)",
  },
  {
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-family-select-2020?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;.v=1586794486444",
    titulo: "iPhone SE",
    estado: "",
    subtitulo: "Un iPhone increíble. Por menos.",
    precio: "$120.999",
    pantalla: "4.7 pulgadas",
    subpantalla: "Pantalla Retina HD",
    red: "Compatible con 4G",
    camara: "Sistema de cámara única",
    subcamara: "(gran angular)",
  },
];

export default function CardsIphone() {
  const [articles, setArticles] = useState(articulos);

  return (
    <div>
      <div className="cards-bg">
        <div className="text-center pt-3">
          <p className="titulo-secundario">iPhone12 y iPhone 12 mini</p>
          <p className="titulo-principal">SUPER.MEGA.RAPIDO.</p>
          <Button variant="primary" className="btn boton-comprar" type="submit">
            Comprar
          </Button>
        </div>
      </div>
      <div className="text-center pt-5">
        <p>
          <h2>Encuentra el iPhone perfecto para ti.</h2>
        </p>
      </div>
      {/* Card */}
      <div className="container d-flex flex-wrap">
        {articles.map((art) => (
          <Cards art={art} />
        ))}
      </div>
      <div className="bg-gris">
        {/* Tarjeta Banner 1 */}
        <div className="container d-flex flex-wrap">
          <div className="my-3 col-12 col-md-1 text-center"></div>
          <div className="my-3 col-12 col-md-10 text-center ">
            <div className="text-center bg-blanco pt-4 pb-2">
              <p className="titulo-banner">
                Canjea tu smartphone actual por crédito.
              </p>
              <p className="subtitulo-banner text-center px-5">
                Con Apple Trade In, puedes cambiar un smartphone que cumpla con
                los requisitos por crédito para comprar un iPhone nuevo.3 Es
                bueno para ti y para el planeta.
              </p>
            </div>
            <div className="bg-banner1"></div>
          </div>
          <div className="my-3 col-12 col-md-1 text-center"></div>
        </div>
        {/* Tarjeta Banner 2 */}
        <h1 className="text-center my-5 mx-auto">
          <strong>Accesorios destacados</strong>
        </h1>
        <div className="container d-flex flex-wrap text-center">
          <div className="my-3 col-12 col-md-1 text-center"></div>
          <div className="my-3 col-12 col-md-10 text-center ">
            <div className="text-center bg-blanco pt-4 pb-2">
              <h3 className="titulo-banner">AirPods</h3>

              <p className="subtitulo-banner text-center px-5">
                Descubre nuevas opciones de grabado para tus AirPods. Combina
                emojis, texto y números.
              </p>
            </div>
            <div className="bg-banner2"></div>
          </div>
          <div className="my-3 col-12 col-md-1 text-center"></div>
        </div>
        {/* Tarjeta Banner 3 */}
        <div className="container d-flex flex-wrap">
          <div className="my-3 col-12 col-md-1 text-center"></div>
          <div className="my-3 col-12 col-md-10 text-center ">
            <div className="container d-flex flex-wrap">
              <div className=" col-12 col-md-6 text-center">
                <div
                  style={{ height: "320px" }}
                  className="text-center bg-blanco pt-4 pb-4"
                >
                  <h3 className="mt-5 titulo-banner">MagSafe</h3>

                  <p className="subtitulo-banner text-center px-5">
                    Súmale una cartera o una funda magnética. O las dos. Y
                    disfruta también de una carga inalámbrica más rápida.
                  </p>
                </div>
              </div>
              <div className="mb-3 col-12 col-md-6 bg-banner3"></div>
            </div>
          </div>
          <div className="my-3 col-12 col-md-1 text-center"></div>
        </div>
      </div>
    </div>
  );
}
