import "../assets/shoppingcart.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import Carrito from "../components/Carrito";

export default function ShoppingCart() {
    const [productosCarrito, setproductosCarrito] = useState([]);
    console.log("Carrito ~ productosCarrito", productosCarrito)
    useEffect(() => {
        const getProductos = async () => {
            let productosCarrito = [] 
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [{id:"60bf6162dda4bf4130f110f9",cantidad:1}];
            for (let i = 0; i < carrito.length; i++) {
                const itemCarrito = carrito[i]; 
                const response = await axios.get(`/productos/${itemCarrito.id}`);
            productosCarrito.push({ producto: response.data, cantidad: itemCarrito.cantidad })
            }
            setproductosCarrito(productosCarrito);
        };
        getProductos();
    }, []);

  //     setArticles(response.data);
  //   };
  //   getProductos();
  // }, []);

    return (
        <div>
            <Carrito articles={productosCarrito} />
        </div>
    )
}
