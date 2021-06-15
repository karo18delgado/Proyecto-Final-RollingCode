import { Button } from "react-bootstrap";
import "../assets/cards.css";
import Iphone from "./Iphone";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// const articulos = [
//   {
//     image:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=470&amp;hei=556&amp;fmt=jpeg&amp;qlt=95&amp;.v=1604021663000",
//     titulo: "iPhone 12 Pro",
//     estado: "Nuevo",
//     subtitulo: "El iPhone en su máxima expresión",
//     precio: "$270.999",
//     pantalla: "6.1 o 6.7 pulgadas",
//     subpantalla: "Pantalla Super Retina XDR",
//     red: "https://www.apple.com/v/iphone/home/ax/images/overview/compare/icon_5g__ew2qs88wie4i_large_2x.png",
//     subred: "Compatible con 5G",
//     iconocamara:
//       "https://www.apple.com/v/iphone/home/ax/images/overview/compare/icon_triple_camera__e6vgz42wpwom_large_2x.png",
//     camara: "Sistema de cámaras Pro",
//     subcamara: "(ultra gran angular, gran angular y teleobjetivo)",
//   },
//   {
//     image:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=470&amp;hei=556&amp;fmt=jpeg&amp;qlt=95&amp;.v=1617135051000",
//     titulo: "iPhone 12",
//     estado: "Nuevo",
//     subtitulo: "Superpoderoso.",
//     precio: "$220.999",
//     pantalla: "5.4 o 6.1 pulgadas",
//     subpantalla: "Pantalla Super Retina XDR",
//     red: "https://www.apple.com/v/iphone/home/ax/images/overview/compare/icon_5g__ew2qs88wie4i_large_2x.png",
//     subred: "Compatible con 5G",
//     iconocamara:
//       "https://www.apple.com/v/iphone/home/ax/images/overview/compare/icon_dual_camera__gdty7h2x33yq_large_2x.png",
//     camara: "Sistema avanzado de dos cámaras",
//     subcamara: "(ultra gran angular y gran angular)",
//   },
//   {
//     image:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-family-select-2020?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;.v=1586794486444",
//     titulo: "iPhone SE",
//     estado: "",
//     subtitulo: "Un iPhone increíble. Por menos.",
//     precio: "$120.999",
//     pantalla: "4.7 pulgadas",
//     subpantalla: "Pantalla Retina HD",
//     red: "https://www.apple.com/v/iphone/home/ax/images/overview/compare/icon_4g__eh3wh0hlt7ue_large_2x.png",
//     subred: "Compatible con 4G",
//     iconocamara:
//       "https://www.apple.com/v/iphone/home/ax/images/overview/compare/icon_single_camera__c8fs0xdplqy6_large_2x.png",
//     camara: "Sistema de cámara única",
//     subcamara: "(gran angular)",
//   },
// ];

export default function CardsIphone() {
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
          <p className="titulo-principal">SUPER.MEGA.RAPIDO.</p>
          <Button variant="primary" className="btn boton-comprar" type="submit">
            Comprar
          </Button>
        </div>
        <div className="bg-blanco text-center">
          <img className="img-fluid" src="https://www.apple.com/mx/iphone/home/images/overview/hero/iphone_12__d51ddqcc7oqe_large_2x.jpg" alt="" />
        </div>
      </div>
      <div className="text-center pt-5">
        <h2>Encuentra el iPhone perfecto para ti.</h2>
      </div>
      {/* Card */}
      <div className="container d-flex flex-wrap">
        {productos.map((producto) => producto.categoria ==='iPhone' && (
          <Iphone producto={producto} />
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
            <div className="bg-blanco">
               <img className="img-fluid" src="https://stuff.co.za/wp-content/uploads/2021/02/iPhone-12-box-740x439-1.jpg" alt="" />
            </div>
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
            <div className="bg-blanco">
              <img className="img-fluid" src="https://i.blogs.es/0218ce/auriculares-apple/840_560.jpg" alt="" />
            </div>
          </div>
          <div className="my-3 col-12 col-md-1 text-center"></div>
        </div>
        {/* Tarjeta Banner 3 */}
        <div className="container d-flex flex-wrap">
          <div className="my-3 col-12 col-md-1 text-center"></div>
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
                 <img className="img-fluid" src="https://i.blogs.es/852326/bill/450_1000.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="my-3 col-12 col-md-1 text-center"></div>
        </div>

        {/* Envios y pagos */}
        <div className="container d-flex flex-wrap px-5 mt-5">
          <div className="my-3 px-3 col-12 col-md-4 text-center">
            <img
              style={{ width: "36px", height: "56px" }}
              src="https://www.apple.com/v/iphone/home/ax/images/overview/buystrip/icon_delivery__bcb7fau42ik2_large_2x.png"
              alt=""
            />
            <h3>Envio sin costo en todos los pedidos</h3>
            <p>Y devoluciones sin costo</p>
          </div>
          <div className="my-3 px-3 col-12 col-md-4 text-center ">
            <img
              style={{ width: "36px", height: "56px" }}
              src="https://www.apple.com/v/iphone/home/ax/images/overview/buystrip/icon_financing__c8yfxcj1fpqq_large_2x.png"
              alt=""
            />
            <h3>Financiamiento</h3>
            <p>Paga a seis meses sin intereses.</p>
          </div>
          <div className="my-3 px-3 col-12 col-md-4 text-center">
            <img
              style={{ width: "36px", height: "56px" }}
              src="https://www.apple.com/v/iphone/home/ax/images/overview/buystrip/icon_personal_session__pcs30obpmp6m_large_2x.png"
              alt=""
            />
            <h3>Atencion personalizada</h3>
            <p>
              Información básica y consejos útiles para aprovechar al máximo tu
              nuevo iPhone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
