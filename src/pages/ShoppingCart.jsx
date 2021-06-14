import "../assets/shoppingcart.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Carrito from "../components/Carrito";
import { useHistory } from "react-router";

export default function ShoppingCart({ setToken }) {
  const [productosCarrito, setproductosCarrito] = useState([]);
  const history = useHistory();

  console.log("Carrito ~ productosCarrito", productosCarrito);
  useEffect(() => {
    const getProductos = async () => {
      let productosCarrito = [];
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [
        { id: "60bf6162dda4bf4130f110f9", cantidad: 1 },
      ];
      for (let i = 0; i < carrito.length; i++) {
        const itemCarrito = carrito[i];
        const response = await axios.get(`/productos/${itemCarrito.id}`);
        productosCarrito.push({
          producto: response.data,
          cantidad: itemCarrito.cantidad,
        });
      }
      setproductosCarrito(productosCarrito);
    };
    getProductos();
  }, []);

  //     setArticles(response.data);
  //   };
  //   getProductos();
  // }, []);

  if (!setToken) {
    history.push("/login");
  }

  return (
    <div>
      <Carrito articles={productosCarrito} />
    </div>
  );
}
