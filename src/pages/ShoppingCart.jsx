import "../assets/shoppingcart.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CarritoProductos from "../components/CarritoProductos";

export default function Carrito({ setToken }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getProductos = async () => {
      const response = await axios.get(`/productos/`);
      console.log("getProductos ~ response", response);

      setArticles(response.data);
    };
    getProductos();
  }, []);

  if (setToken === "") {
    window.location = "/login";
  }

  return (
    <div>
      <CarritoProductos articles={articles} />
    </div>
  );
}
