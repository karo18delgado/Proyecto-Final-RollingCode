import "../assets/cards.css";
import Mac from "./Mac";
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
        <div className="bg-blanco text-center pt-3">
          <p className="titulo-principal">iMac</p>
          <p className="titulo-secundario">Dile hola.</p>
          <p className="subtitulo-banner text-center">
            Consulta la disponibilidad.
          </p>
          <div className="bg-blanco text-center">
            <img
              className="img-fluid"
              src="https://www.apple.com/v/mac/home/be/images/overview/hero_imac_24__eq5phrdpwjyq_medium_2x.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-center pt-5">
        <h2>Encuentra la Mac perfecta para ti.</h2>
      </div>
      {/* Card */}
      <div className="container d-flex flex-wrap justify-content-center">
        {productos.map(
          (producto) =>
            producto.categoria === "Mac" &&
            producto.condicion === "Habilitado" && (
              <Mac
                producto={producto}
                setproductosCarrito={setproductosCarrito}
                token={token}
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
                Obtén crédito por tu computadora actual.
              </p>
              <p className="subtitulo-banner text-center px-5">
                Trae una computadora que cumpla con los requisitos y obtén
                crédito para comprar una Mac nueva. Y si ya no tiene valor, la
                reciclaremos gratis. Es bueno para ti y para el planeta.
              </p>
            </div>
            <div className="bg-blanco">
              <img
                className="img-fluid"
                src="https://as.com/meristation/imagenes/2020/07/02/betech/1593684423_686673_1593684643_noticia_normal_recorte1.jpg"
                alt=""
              />
            </div>
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
        <h1 className="text-center my-5 mx-auto p-1">
          <strong>¿Qué hace que la Mac sea única?</strong>
        </h1>
        <div className="container d-flex flex-wrap px-5 pb-5">
          <div className="my-3 px-3 col-12 col-md-6 text-center">
            <div className="text-center bg-blanco pt-4 pb-2 text-sizemac">
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
              <p className="titulo-banner px-5 pb-sm-4 pb-lg-5 pb-lg-5">
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
