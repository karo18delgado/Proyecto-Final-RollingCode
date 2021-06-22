import { useState } from "react";
import "../assets/shoppingcart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ContadorShop({ cantidad, id, subtotal }) {
  const [counter, setCounter] = useState(cantidad);
  const [precioSubtotal, setPrecioSubtotal] = useState(subtotal);

  const updateCounter = (num) => {
    if (counter + num > 0) {
      setCounter(counter + num);
      setPrecioSubtotal(precioSubtotal * num);
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const carritoActualizado = carrito.map((item) => {
        if (item.id === id)
          return {
            ...item,
            cantidad: counter + num,
            subtotal: precioSubtotal * num,
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
      <button style={{ paddingRight:"40px"}} className="botón-shop" onClick={() => updateCounter(1)}>
        <FontAwesomeIcon
          className="plus"
          icon={["fas", "plus"]}
        ></FontAwesomeIcon>
      </button>
      <h4 style={{ paddingLeft: "10px" }}>
        {" "}
        Total $ {counter * precioSubtotal}{" "}
      </h4>
    </div>
  );
}
