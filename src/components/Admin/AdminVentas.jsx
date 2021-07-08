import { useEffect, useState } from "react";
import "../Admin/admin.css";
import { Table } from "react-bootstrap";
import axios from "axios";

export default function AdminVentas({ user }) {
  const [ventas, setVentas] = useState([]);

  const getVentas = async () => {
    const response = await axios.get("/ventas");
    setVentas(response.data);
  };

  useEffect(() => {
    if (!ventas.length) {
      getVentas();
    }
  }, [ventas]);

  return (
    <div>
      <Table striped bordered hover variant="dark" className="mt-5" responsive>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Datos de Envío</th>
            <th>Datos de Facturación</th>
            <th>Modalidad de Pago</th>
            <th>Total a Facturar</th>
            <th>Productos Vendidos</th>
          </tr>
        </thead>
        {ventas.map((venta) => (
          <tbody key={`venta-${venta._id}`}>
            <tr>
              <td>Usuario: {venta.usuario}</td>
              <td>
                <ul>
                  <li>Dirección: {venta.dirección}</li>
                  <li>Provincia: {venta.provincia}</li>
                  <li>Localidad: {venta.localidad}</li>
                  <li>CP: {venta.códigoPostal}</li>
                  <li>Email de Contacto: {venta.email}</li>
                  <li>Celular de Contacto: {venta.celularContacto}</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Nombre: {venta.nombre}</li>
                  <li>Apellido: {venta.apellido}</li>
                  <li>DNI: {venta.dni}</li>
                  <li>Celular: {venta.celular}</li>
                </ul>
              </td>
              <td>Pago: {venta.modalidadDePago}</td>
              <td>Total: $ {venta.total}</td>
              <td>
                {venta.carrito.map((carrito) => (
                  <ul key={`carrito-${carrito._id}`}>
                    <li>Nombre Producto: {carrito.producto}</li>
                    <li>Cantidad: {carrito.cantidad}</li>
                  </ul>
                ))}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
