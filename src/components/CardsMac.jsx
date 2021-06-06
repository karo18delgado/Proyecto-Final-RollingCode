import React from "react";
import { Button } from "react-bootstrap";
import "../assets/cards.css";
import Ipad from "./Ipad";
import { useState } from "react";

const articulos = [
  {
    image:
      "https://www.apple.com/v/mac/home/be/images/overview/compare/compare_mba__gdncw5gbxoq6_medium_2x.png",
    titulo: "MacBook Air",
    estado: "",
    subtitulo: "",
    precio: "$199.999",
    pantalla: "13.3 pulgadas",
    subpantalla: "Pantalla Retina",
    procesador:
      "https://www.apple.com/v/mac/home/be/images/overview/compare/compare_icon_m1__fz8nzgohw2ai_large_2x.png",
    subprocesador: "Chip M1 Apple",
    bateria:
      "https://www.apple.com/v/mac/home/be/images/overview/compare/compare_icon_battery__gbh9jzw6c7u6_large_2x.png",
    subbateria: "Hasta 18 horas",
    almacenamiento: "2 TB",
    subalmacenamiento: "Almacenamiento maximo configurable",
  },
  {
    image:
      "https://www.apple.com/v/mac/home/be/images/overview/compare/compare_mbp13__geounnnz6oa6_medium_2x.png",
    titulo: "MacBook Pro",
    estado: "Nuevo",
    subtitulo: "",
    precio: "$249.999",
    pantalla: "13.3 pulgadas",
    subpantalla: "Pantalla Retina",
    procesador:
      "https://www.apple.com/v/mac/home/be/images/overview/compare/compare_icon_m1__fz8nzgohw2ai_large_2x.png",
    subprocesador: "Chip M1 Apple",
    bateria:
      "https://www.apple.com/v/mac/home/be/images/overview/compare/compare_icon_battery__gbh9jzw6c7u6_large_2x.png",
    subbateria: "Hasta 20 horas",
    almacenamiento: "2 TB",
    subalmacenamiento: "Almacenamiento maximo configurable",
  },
  {
    image:
      "https://www.apple.com/v/mac/home/be/images/overview/compare/compare_mbp16__fykfvftfaeuu_medium_2x.png",
    titulo: "MacBook Pro 16",
    estado: "",
    subtitulo: "",
    precio: "$289.999",
    pantalla: "16 pulgadas",
    subpantalla: "Pantalla Retina",
    procesador:
      "https://www.apple.com/v/mac/home/be/images/overview/compare/compare_icon_intel__etladu21xu6a_large_2x.png",
    subprocesador: "Procesador Intel Core i9",
    bateria:
      "https://www.apple.com/v/mac/home/be/images/overview/compare/compare_icon_battery__gbh9jzw6c7u6_large_2x.png",
    subbateria: "Hasta 11 horas",
    almacenamiento: "8 TB",
    subalmacenamiento: "Almacenamiento maximo configurable",
  },
];

export default function CardsIphone() {
  const [articles, setArticles] = useState(articulos);

  return (
    <div>
      <div>
        <div className="bg-blanco text-center pt-3">
          <p className="titulo-principal">iMac</p>
          <p className="titulo-secundario">Dile hola.</p>
          <p className="subtitulo-banner text-center">
            Consulta la disponibilidad.
          </p>
          <Button variant="primary" className="btn boton-comprar" type="submit">
            Comprar
          </Button>
          <div className="cards-bgmac mt-5"></div>
        </div>
      </div>
      <div className="text-center pt-5">
        <h2>Encuentra la Mac perfecta para ti.</h2>
      </div>
      {/* Card */}
      <div className="container d-flex flex-wrap">
        {articles.map((art) => (
          <Ipad art={art} />
        ))}
      </div>
      <div className="bg-gris">
        {/* Tarjeta Banner 1 */}
        <div className="container d-flex flex-wrap">
          <div className="my-3 col-12 col-md-1 text-center"></div>
          <div className="my-3 col-12 col-md-10 text-center ">
            <div className="text-center bg-blanco pt-4 pb-2">
              <p className="titulo-banner">
                Obtén crédito por tu computadora actual.
              </p>
              <p className="subtitulo-banner text-center px-5">
                Trae una computadora que cumpla con los requisitos y obtén
                crédito para comprar una Mac nueva. Y si ya no tiene valor, la
                reciclaremos gratis. Es bueno para ti y para el planeta.
              </p>
            </div>
            <div className="bg-bannermac1"></div>
          </div>
          <div className="my-3 col-12 col-md-1 text-center"></div>
        </div>
        {/* Envios y pagos */}
        <div className="container d-flex flex-wrap px-5 my-5">
          <div className="my-3 px-3 col-12 col-md-4 text-center">
            <img
              src="https://www.apple.com/v/iphone/home/ax/images/overview/buystrip/icon_delivery__bcb7fau42ik2_large_2x.png"
              alt=""
              style={{ width: "36px", height: "56px" }}
            />
            <h3>Envio sin costo en todos los pedidos</h3>
            <p>Y devoluciones sin costo</p>
          </div>
          <div className="my-3 px-3 col-12 col-md-4 text-center ">
            <img
              src="https://www.apple.com/v/iphone/home/ax/images/overview/buystrip/icon_financing__c8yfxcj1fpqq_large_2x.png"
              alt=""
              style={{ width: "36px", height: "56px" }}
            />
            <h3>Financiamiento</h3>
            <p>Paga a seis meses sin intereses.</p>
          </div>
          <div className="my-3 px-3 col-12 col-md-4 text-center">
            <img
              src="https://www.apple.com/v/mac/home/be/images/overview/buystrip/icon-help__f19n32h1h26a_large.svg"
              alt=""
              style={{ width: "36px", height: "56px" }}
            />
            <h3>Obtén ayuda al comprar</h3>
            <p>Habla con un Especialista por teléfono o por chat.</p>
          </div>
        </div>
        {/* Tarjeta Banner 2 */}
        <h1 className="text-center my-5 mx-auto">
          <strong>¿Qué hace que la Mac sea única?</strong>
        </h1>
        <div className="container d-flex flex-wrap px-5 pb-5">
          <div className="my-3 px-3 col-12 col-md-6 text-center">
            <div className="text-center bg-blanco pt-4 pb-2">
              <p className="subtitulo-banner text-center px-5">Continuidad</p>
              <p className="titulo-banner px-5">
                Todos tus dispositivos, una misma experiencia.
              </p>
            </div>
            <div className="bg-bannermac3"></div>
          </div>
          <div className="my-3 px-3 col-12 col-md-6 text-center ">
            <div className="text-center bg-blanco pt-4 pb-2">
              <p className="subtitulo-banner text-center px-5">iCloud</p>
              <p className="titulo-banner px-5">
                Almacenamiento disponible donde quieras.
              </p>
            </div>
            <div className="bg-bannermac4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
