import "../assets/shoppingcart.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import CarritoProductos from "../components/CarritoProductos";

export default function Carrito() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getProductos = async () => {
            const response = await axios.get(`/productos/`);
            console.log("getProductos ~ response", response)
            
            setArticles(response.data);
        };
        getProductos();
    }, []);


    return (
        <div>
            <CarritoProductos articles={articles} />
        </div>
    )
}
