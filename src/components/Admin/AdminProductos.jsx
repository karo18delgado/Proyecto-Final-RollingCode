

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./admin.css";
import FormProductos from "./adminComponents/FormProductos"
import TablaProductos from "./adminComponents/TablaProductos"


export default function AdminProductos() {


  return (
    <div>
      <Router>
        <FormProductos />
        <TablaProductos />
      </Router>
    </div>
  )
}
