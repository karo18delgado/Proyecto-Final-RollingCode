import Producto from "./Carrito";

export default function CarritoProductos({ articles }) {
  return (
    <div>
      <div className="d-flex flex-wrap">
        {articles.map((producto) => (
          <Producto producto={producto} key={producto._id} />
        ))}
      </div>
    </div>
  );
}
