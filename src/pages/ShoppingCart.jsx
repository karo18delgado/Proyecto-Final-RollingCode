import "../assets/shoppingcart.css";
import Carrito from "../components/Carrito";
import { useHistory } from "react-router";

export default function ShoppingCart({
  setToken,
  productosCarrito,
  setproductosCarrito,
  user,
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

  if (!setToken) {
    history.push("/login");
  }

  return (
    <div>
      <Carrito
        user={user}
        articles={productosCarrito}
        eliminarItemCarrito={eliminarItemCarrito}
      />
    </div>
  );
}
