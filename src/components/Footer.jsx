import React from "react";
import FormFooter from "./FormFooter";
import footer from "../assets/footer.css";
import { useLocation } from "react-router";

export default function Footer() {
  const location = useLocation();
  const { pathname } = location;
  if (pathname.includes("/admin")) return null;
  return (
    <section id="footer">
      <div className="container ">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Secciones</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="carrito">Carrito</a>
              </li>
              <li>
                <a href="fav">Favoritos</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Nuestros Productos</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="Mac">Mac</a>
              </li>
              <li>
                <a href="iPad">Ipad</a>
              </li>
              <li>
                <a href="iPhone">Iphone</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Envianos tu consulta</h5>
            <FormFooter />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.fiverr.com/share/qb8D02" target="blank">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <a href="https://www.nationaltransaction.com/">
                  Apple Argentina
                </a>
              </u>{" "}
              es registrada para presentarse en el proyecto final del curso
              Fullstack de Rolling Code
            </p>
            <p className="h6">
              © Todos los derechos reservados.
              <a
                className="text-green ml-2"
                href="https://www.sunlimetech.com"
                target="blank"
              >
                Comisión i7 - Grupo 3
              </a>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
}
