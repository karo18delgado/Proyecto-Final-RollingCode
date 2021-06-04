import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/FontawesomeIcons"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarR from "./components/NavbarR";
import About from './components/About';
import RegisterForm from "./components/RegisterForm"
import Landing from "./components/Landing"
import Footer from "./components/Footer"
import CardsIphone from './components/CardsIphone';
import CardsMac from './components/CardsMac';
import CardsIpad from './components/CardsIpad';
import Login from "./pages/Login"
import NavbarAdmin from './components/Admin/NavbarAdmin';
import AdminUsuarios from './components/Admin/AdminUsuarios';
import PerfilUsuario from './components/PerfilUsuario';
import AdminProductos from './components/Admin/AdminProductos';
import AdminMensajes from './components/Admin/AdminMensajes';
import ShoppingCart from './components/ShoppingCart';
import { useState } from 'react';



function App() {
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');

  return (
    <Router>
      <NavbarR />
      <Switch>
        <Route path="/about">
            <div className="container"> <About /></div>
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/iPhone">
          <CardsIphone />
        </Route>
        <Route path="/Mac">
          <CardsMac />
        </Route>
        <Route path="/iPad">
          <CardsIpad />
        </Route>
        <Route path="/carrito">
        <ShoppingCart />
        </Route>
        <Route path="/register">
          <RegisterForm setToken={setToken} />
        </Route>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/perfilUsuario">
          <PerfilUsuario />
        </Route>
        <Route path="/admin">
          <NavbarAdmin />
          <Route path="/admin/admin-usuarios">
            <AdminUsuarios currentUser={user} />
          </Route>
          <Route path="/admin/admin-productos">
            <AdminProductos currentUser={user} />
          </Route>
          <Route path="/admin/admin-mensajes">
            <AdminMensajes currentUser={user} />
          </Route>
        </Route>
      </Switch>
      <Footer />
    </Router>


  );
}

export default App;
