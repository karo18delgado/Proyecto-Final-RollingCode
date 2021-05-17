import React from "react";
import "../Admin/adminUsuarios.css";
import { Button, Form, Table } from "react-bootstrap";

export default function AdminUsuarios() {
  return (
    <div>
      <div>
        <Form>
          <Form.Group className="container-search">
            <Form.Label className="search-div">
              Búsquedo por nombre o correo
            </Form.Label>
            <Form.Control type="text" className="mx-sm-3 search-form" />
            <Button size="sm" className="btn mx-1">
              Buscar
            </Button>
            <Button size="sm" className="btn btn-success mx-1">
              Limpiar
            </Button>
          </Form.Group>
        </Form>
      </div>
      <Table striped bordered hover variant="dark" className="mt-5">
        <thead>
          <tr>
            <th>Nombre de usuario</th>
            <th>Email</th>
            <th>Fecha de nacimiento</th>
            <th>Sexo</th>
            <th>Habilitado/Deshabilitado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Masculino</td>
            <td>Habilitado</td>
            <td>
              <Button size="sm" className="btn btn-info mx-1">
                Editar
              </Button>
              <Button size="sm" className="btn sm btn-success mx-1">
                Bloqueo
              </Button>
              <Button size="sm" className="btn sm btn-danger mx-1">
                Eliminar
              </Button>
              <Button size="sm" className="btn sm btn-warning mx-1">
                Más información
              </Button>
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Femenino</td>
            <td>Habilitado</td>
            <td>
              <Button size="sm" className="btn btn-info mx-1">
                Editar
              </Button>
              <Button size="sm" className="btn sm btn-success mx-1">
                Bloqueo
              </Button>
              <Button size="sm" className="btn sm btn-danger mx-1">
                Eliminar
              </Button>
              <Button size="sm" className="btn sm btn-warning mx-1">
                Más información
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
