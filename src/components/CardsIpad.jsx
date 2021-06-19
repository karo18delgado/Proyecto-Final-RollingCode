import { Button } from "react-bootstrap";
import "../assets/cards.css";
import Ipad from "./Ipad";
import axios from "axios";
import React, { useEffect, useState } from "react";

// const articulos = [
//   {
//     image:
//       "https://www.apple.com/v/ipad/home/bm/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png",
//     titulo: "iPad Pro",
//     estado: "Nuevo",
//     subtitulo: "",
//     precio: "$139.999",
//     pantalla: "12.9 y 11 pulgadas",
//     subpantalla: "Pantalla Liquid Retina XDR",
//     procesador:
//       "https://www.apple.com/v/mac/home/be/images/overview/compare/compare_icon_m1__fz8nzgohw2ai_large_2x.png",
//     subprocesador: "Chip M1 Apple",
//     red: "https://www.apple.com/v/iphone/home/ax/images/overview/compare/icon_5g__ew2qs88wie4i_large_2x.png",
//     subred: "Compatible con 5G",
//     conector:
//       "https://www.apple.com/v/ipad/home/bm/images/overview/compare_usbc_thunderbolt__fuat6j3gyc2u_large_2x.png",
//     subconector: "Conector USB-C compatible con Thunderbolt/USB 4",
//   },
//   {
//     image:
//       "https://www.apple.com/v/ipad/home/bm/images/overview/compare_ipad_air__bxjv33pk6nte_large.png",
//     titulo: "iPad Air",
//     estado: "Nuevo",
//     subtitulo: "",
//     precio: "$149.999",
//     pantalla: "10.9 pulgadas",
//     subpantalla: "Pantalla Liquid Retina",
//     procesador:
//       "https://www.apple.com/v/ipad/home/bm/images/overview/compare_a14_chip__eflvurt7ywia_large_2x.png",
//     subprocesador: "Chip A14 Bionic",
//     red: "https://www.apple.com/v/iphone/home/ax/images/overview/compare/icon_4g__eh3wh0hlt7ue_large_2x.png",
//     subred: "Compatible con 4G",
//     conector:
//       "https://www.apple.com/v/ipad/home/bm/images/overview/compare_usbc__gnv70qm6mcuq_large_2x.png",
//     subconector: "Conector USB-C",
//   },
//   {
//     image:
//       "https://www.apple.com/v/ipad/home/bm/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png",
//     titulo: "iPad",
//     estado: "",
//     subtitulo: "",
//     precio: "$145.000",
//     pantalla: "10.2 pulgadas",
//     subpantalla: "Pantalla Retina",
//     procesador:
//       "https://www.apple.com/v/ipad/home/bm/images/overview/compare_a12_chip__f4cnj28qh5qq_large_2x.png",
//     subprocesador: "Chip A12 Bionic",
//     red: "https://www.apple.com/v/iphone/home/ax/images/overview/compare/icon_4g__eh3wh0hlt7ue_large_2x.png",
//     subred: "Compatible con 4G",
//     conector:
//       "https://www.apple.com/v/ipad/home/bm/images/overview/compare_lightning__drp7mpo3oyie_large_2x.png",
//     subconector: "Conector Lightning",
//   },
// ];

export default function CardsIphone({ setproductosCarrito }) {
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
          <Button variant="primary" className="btn boton-comprar" type="submit">
            Comprar
          </Button>
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
      <div className="container d-flex flex-wrap">
        {productos.map(
          (producto) =>
            producto.categoria === "iPad" && producto.condicion === "Habilitado" &&  (
              <Ipad
                producto={producto}
                setproductosCarrito={setproductosCarrito}
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
              <p className="subtitulo-banner text-center px-5">
                Lleva tus ideas de tu cabeza a tu iPad.
              </p>
            </div>
            <div className="bg-banneripad2"></div>
          </div>
          <div className="my-3 px-3 col-12 col-md-6 text-center ">
            <div className="bg-banneripad3"></div>
            <div className="text-center bg-blanco pt-4 pb-2 text-sizeipad">
              <p className="titulo-banner px-5">Teclados para el iPad</p>
              <p className="subtitulo-banner text-center px-5">
                Tan versátiles que hasta protegen tu iPad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
