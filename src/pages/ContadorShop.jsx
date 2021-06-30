import { useState } from "react";
import "../assets/shoppingcart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContadorShop({
  cantidad,
  id,
  precio,
  item,
  eliminarItemCarrito,
  modificarTotal,
}) {
  const [counter, setCounter] = useState(cantidad);

  const updateCounter = (num) => {
    if (counter + num > 0) {
      setCounter(counter + num);

      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const carritoActualizado = carrito.map((item) => {
        if (item.productoId === id) {
          return {
            ...item,
            cantidad: counter + num,
          };
        } else {
          return item;
        }
      });
      console.log("updateCounter ~ carritoActualizado", carritoActualizado);
      localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    }

    modificarTotal(id);
  };

  return (
    <div>
      <ul className="row" style={{ listStyle: "none" }}>
        <li style={{ paddingRight: "150px" }}>
          {" "}
          <strong>Producto</strong>
        </li>
        <li style={{ paddingRight: "80px" }}>
          {" "}
          <strong>Descripción</strong>
        </li>
        <li style={{ paddingRight: "100px" }}>
          {" "}
          <strong>Precio</strong>
        </li>
        <li style={{ paddingRight: "60px" }}>
          {" "}
          <strong>Cantidad</strong>
        </li>
      </ul>
      <hr />
      <ul className="row" style={{ listStyle: "none" }}>
        <li style={{ paddingRight: "20px" }}>
          <img
            className="tamaño-imagen"
            src={item.producto.urlImage}
            alt="..."
          />
        </li>
        <li style={{ marginRight: "80px", width: "90px" }}>
          <li>{item.producto.nombre}</li>
          <li>{item.producto.descripcion}</li>
        </li>
        <li style={{ paddingRight: "90px" }}>$ {item.producto.precio}</li>
        <li>
          <div className="row">
            <button className="botón-shop" onClick={() => updateCounter(-1)}>
              <FontAwesomeIcon
                className="minus"
                icon={["fas", "minus"]}
              ></FontAwesomeIcon>
            </button>
            <h3>{counter}</h3>
            <button
              style={{ paddingRight: "40px" }}
              className="botón-shop"
              onClick={() => updateCounter(1)}
            >
              <FontAwesomeIcon
                className="plus"
                icon={["fas", "plus"]}
              ></FontAwesomeIcon>
            </button>
          </div>
        </li>
        <li style={{ paddingRight: "40px" }}>
          <h4 style={{ paddingLeft: "10px" }}>
            {" "}
            Subtotal: $ {precio * counter}
          </h4>
        </li>
        <li>
          <button
            className="botón-shop"
            onClick={() => eliminarItemCarrito(item.producto._id)}
          >
            <FontAwesomeIcon
              className="trash-alt"
              icon={["far", "trash-alt"]}
            ></FontAwesomeIcon>
          </button>
        </li>
      </ul>
    </div>
  );
}
