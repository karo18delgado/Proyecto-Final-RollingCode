import { useState } from "react";
import "../assets/shoppingcart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContadorShop() {
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const extractCounter = () => {
    setCounter(counter - 1 );
  };
  const reset = () => {
    setCounter(0);
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
      <button className="btn btn-danger" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
