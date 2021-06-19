import "../assets/shoppingcart.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Carrito from "../components/Carrito";
import { useHistory } from "react-router";

export default function ShoppingCart({
  setToken,
  productosCarrito,
  setproductosCarrito,
}) {
  const history = useHistory();

  const eliminarItemCarrito = (productoId) => {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    const carritoActualizado = carrito.filter(
      (item) => productoId !== item.productoId
    );
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    const productosCarritoActualizado = productosCarrito.filter(
      (item) => productoId !== item.producto._id
    );
    setproductosCarrito(productosCarritoActualizado);
  };

  //     setArticles(response.data);
  //   };
  //   getProductos();
  // }, []);

  if (!setToken) {
    history.push("/login");
  }

  return (
    <div>
      <Carrito
        articles={productosCarrito}
        eliminarItemCarrito={eliminarItemCarrito}
      />
    </div>
  );
}
