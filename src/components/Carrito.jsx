import "../assets/shoppingcart.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import ContadorShop from "../pages/ContadorShop";

export default function Carrito({ producto }) {
  const { urlImage, nombre, descripcion, precio } = producto;
  return (
    <div>
      <Container style={{ padding: "50px" }}>
        <Row>
          <Col
            md={12}
            style={{ backgroundColor: "#fff", borderRadius: "20px" }}
          >
            <div>
              <h3 className="mt-3">Carrito de compras</h3>
              <Table responsive="md" className="tabla-shop">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={urlImage} alt="..." />
                    </td>
                    <td>
                      {nombre}
                      {descripcion}
                    </td>
                    <td>{precio}</td>
                    <td>
                      <ContadorShop />
                    </td>
                    <td>$</td>
                    <td>
                      <button className="botón-shop">
                        <FontAwesomeIcon
                          className="trash-alt"
                          icon={["far", "trash-alt"]}
                        ></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <hr />
              <div className="column comprar">
                <h2>Total: $ </h2>
                <Button
                  variant="primary"
                  className="btn botón-Iniciar-compra"
                  type="submit"
                >
                  Iniciar Compra
                </Button>
                <div>
                  <NavLink style={{ margin: "10px" }} to="/" as={NavLink}>
                    ver más productos
                  </NavLink>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
