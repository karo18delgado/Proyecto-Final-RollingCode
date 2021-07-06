import "../assets/cards.css";
import Iphone from "./Iphone";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CardsIphone({ setproductosCarrito, token }) {
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
    <div>
      <div>
        <div className="text-center pt-3">
          <p className="titulo-secundario">iPhone12 y iPhone 12 mini</p>
          <p className="titulo-principal">SUPER MEGA RAPIDO</p>
        </div>
        <div className="bg-blanco text-center">
          <img
            className="img-fluid"
            src="https://www.apple.com/mx/iphone/home/images/overview/hero/iphone_12__d51ddqcc7oqe_large_2x.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="text-center pt-5">
        <h2>Encuentra el iPhone perfecto para ti.</h2>
      </div>
      {/* Card */}
      <div className="container d-flex flex-wrap justify-content-center">
        {productos.map(
          (producto) =>
            producto.categoria === "iPhone" &&
            producto.condicion === "Habilitado" && (
              <Iphone
                key={`iphone-${producto._id}`}
                producto={producto}
                setproductosCarrito={setproductosCarrito}
                token={token}
                key={producto._id}
              />
            )
        )}
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
            <div className="bg-blanco">
              <img
                className="img-fluid"
                src="https://stuff.co.za/wp-content/uploads/2021/02/iPhone-12-box-740x439-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="my-3 col-12 col-md-1 text-center"></div>
        </div>
        {/* Tarjeta Banner 2 */}
        <h1 className="text-center my-sm-2 my-md-5 my-lg-5 mx-auto">
          <strong>Accesorios destacados</strong>
        </h1>
        <div className="container d-flex flex-wrap text-center">
          <div className="my-0 col-12 col-md-1 text-center"></div>
          <div className="my-3 col-12 col-md-10 text-center ">
            <div className="text-center bg-blanco pt-4 pb-2">
              <h3 className="titulo-banner">AirPods</h3>

              <p className="subtitulo-banner text-center px-5">
                Descubre nuevas opciones de grabado para tus AirPods. Combina
                emojis, texto y números.
              </p>
            </div>
            <div className="bg-blanco">
              <img
                className="img-fluid"
                src="https://i.blogs.es/0218ce/auriculares-apple/840_560.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="my-3 col-12 col-md-1 text-center"></div>
        </div>
        {/* Tarjeta Banner 3 */}
        <div className="container d-flex flex-wrap">
          <div className=" my-sm-0 my-md-5 my-lg-5 col-12 col-md-1 text-center"></div>
          <div className="my-3 col-12 col-md-10 text-center padding">
            <div className="container d-flex flex-wrap">
              <div className=" col-12 col-xl-5 text-center padding">
                <div
                  style={{ height: "303px" }}
                  className="text-center bg-blanco pt-4 pb-4"
                >
                  <h3 className="mt-5 titulo-banner">MagSafe</h3>

                  <p className="subtitulo-banner text-center px-5">
                    Súmale una cartera o una funda magnética. O las dos. Y
                    disfruta también de una carga inalámbrica más rápida.
                  </p>
                </div>
              </div>
              <div className="mb-3 col-12 col-xl-7 bg-blanco padding">
                <img
                  className="img-fluid"
                  src="https://i.blogs.es/852326/bill/450_1000.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="my-3 col-12 col-md-1 text-center"></div>
        </div>
      </div>
    </div>
  );
}
