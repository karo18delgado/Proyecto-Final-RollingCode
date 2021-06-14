import { useState } from "react";
import "../assets/shoppingcart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContadorShop({cantidad,id}) {
  const [counter, setCounter] = useState(cantidad);
  const addCounter = () => {
    setCounter(counter + 1);
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const encontrado = carrito.find(item => item.id===id);
    encontrado.cantidad = counter +1 ;
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  const extractCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const encontrado = carrito.find(item => item.id===id);
      encontrado.cantidad = counter -1 ;
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };

  return (
    <div className="row">
      <button className="botón-shop" onClick={extractCounter}>
        <FontAwesomeIcon
          className="minus"
          icon={["fas", "minus"]}
        ></FontAwesomeIcon>
      </button>
      <h3>{counter}</h3>
      <button className="botón-shop" onClick={addCounter}>
        <FontAwesomeIcon
          className="plus"
          icon={["fas", "plus"]}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}
