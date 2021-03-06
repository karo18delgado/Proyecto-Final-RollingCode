import "../assets/cards.css";
import Ipad from "./Ipad";
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
          <p className="titulo-principal">iPad Pro</p>
          <p className="titulo-secundario">El iPad en su máxima expresión.</p>
          <p className="subtitulo-banner text-center">Desde $210.000</p>
          <div className="bg-blanco mt-5">
            <img
              className="img-fluid"
              src="https://www.apple.com/v/ipad/home/bm/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_medium_2x.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-center pt-5">
        <h2>Encuentra el iPad perfecto para ti.</h2>
      </div>
      {/* Card */}
      <div className="container d-flex flex-wrap justify-content-center">
        {productos.map(
          (producto) =>
            producto.categoria === "iPad" &&
            producto.condicion === "Habilitado" && (
              <Ipad
                key={`ipad-${producto._id}`}
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
          <div className="my-3 col-12 col-md-10 text-center">
            <div className="text-center bg-blanco pt-4 pb-2">
              <p className="titulo-banner">
                Trae tu iPad y obtén crédito para uno nuevo.
              </p>
              <p className="subtitulo-banner text-center px-5">
                Con Apple Trade In, simplemente trae al Apple Store un iPad que
                cumpla con los requisitos y obtén crédito para la compra de uno
                nuevo. Es bueno para ti y para el planeta.
              </p>
            </div>
            <div className="bg-blanco">
              <img
                className="img-fluid"
                src="https://www.apple.com/v/ipad/home/bm/images/overview/apple_pay__u03k08osmwy2_medium_2x.jpg"
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
              src="https://www.apple.com/v/ipad/home/bm/images/overview/icon_engraving__cv9oecgi9r0i_medium_2x.png"
              alt=""
              style={{ width: "36px", height: "56px" }}
            />
            <h3>Personalízalo</h3>
            <p>Graba tu nombre o una nota personal en tu iPad. Es gratis.</p>
          </div>
        </div>
        {/* Tarjeta Banner 2 */}
        <h1 className="text-center my-5 mx-auto">
          <strong>Imprescindibles del iPad</strong>
        </h1>
        <div className="container d-flex flex-wrap px-5 pb-5">
          <div className="my-3 px-3 col-12 col-md-6 text-center">
            <div className="text-center bg-blanco pt-4 pb-2">
              <p className="titulo-banner px-5">Apple Pencil</p>
              <p className="subtitulo-banner text-center px-5 pb-lg-2">
                Lleva tus ideas de tu cabeza a tu iPad.
              </p>
            </div>
            <div className="bg-banneripad2"></div>
          </div>
          <div className="my-3 px-3 col-12 col-md-6 text-center ">
            <div className="bg-banneripad3"></div>
            <div className="text-center bg-blanco pt-4 pb-2 text-sizeipad">
              <p className="titulo-banner px-5">Teclados para el iPad</p>
              <p className="subtitulo-banner text-center px-5 pb-md-2 pb-sm-2">
                Tan versátiles que hasta protegen tu iPad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
