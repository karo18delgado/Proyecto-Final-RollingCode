import { useState } from "react";
import "../assets/shoppingcart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatPrice } from "../utils/format";

export default function ContadorShop({ cantidad, id, subtotal }) {
  const [counter, setCounter] = useState(cantidad);
  const [precioSubtotal, setPrecioSubtotal] = useState(subtotal);

  const updateCounter = (num, precioId) => {
    if (counter + num > 0) {
      setCounter(counter + num);
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      setPrecioSubtotal(precioId * (counter + num));
      const carritoActualizado = carrito.map((item) => {
        if (item.id === id)
          return {
            ...item,
            cantidad: counter + num,
            subtotal: (counter + num) * precioId,
          };
        else return item;
      });

      localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    }
  };

  return (
    <div className="row">
      <button className="botón-shop" onClick={() => updateCounter(-1)}>
        <FontAwesomeIcon
          className="minus"
          icon={["fas", "minus"]}
        ></FontAwesomeIcon>
      </button>
      <h3>{counter}</h3>
      <button className="botón-shop" onClick={() => updateCounter(1)}>
        <FontAwesomeIcon
          className="plus"
          icon={["fas", "plus"]}
        ></FontAwesomeIcon>
      </button>
      <h2>${precioSubtotal}</h2>
    </div>
  );
}
