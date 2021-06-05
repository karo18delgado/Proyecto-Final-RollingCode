import { useState } from "react";
import "../assets/shoppingcart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContadorShop() {
  const [counter, setCounter] = useState(1);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const extractCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
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
