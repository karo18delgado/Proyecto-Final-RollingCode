import "../assets/shoppingcart.css";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import ContadorShop from "../pages/ContadorShop";

export default function ShoppingCart() {
  return (
    <div>
      <Container style={{ padding: "50px" }}>
        <Row>
          <Col
            md={12}
            style={{ backgroundColor: "#fff", borderRadius: "20px" }}
          >
            <div>
              <Table responsive="md" className="tabla-shop">
                <thead>
                  <h3>Carrito de compras</h3>
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
                      <img
                        src="https://www.apple.com/v/ipad/home/bm/images/overview/compare_ipad_air__bxjv33pk6nte_large.png"
                        alt=""
                      />
                    </td>
                    <td>Table cell</td>
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
                <NavLink style={{margin:'10px'}} to="/" as={NavLink}>
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
