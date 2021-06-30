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
import NavbarAdminR from './components/NavbarAdminR';
import AdminUsuarios from './components/Admin/AdminUsuarios';
import PerfilUsuario from './pages/PerfilUsuario';
import AdminProductos from './components/Admin/AdminProductos';
import AdminMensajes from './components/Admin/AdminMensajes';
import AdminVentas from './components/Admin/AdminVentas';
import ShoppingCart from './pages/ShoppingCart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ScrollToTop from './components/ScrollToTop';

const localToken = JSON.parse(localStorage.getItem('token'))?.token || "";

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localToken);
  const [productosCarrito, setproductosCarrito] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      let productosCarrito = [];
      console.log("getProductos ~ productosCarrito", productosCarrito)
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      for (let i = 0; i < carrito.length; i++) {
        const itemCarrito = carrito[i];
        const response = await axios.get(
          `/productos/${itemCarrito.productoId}`
        );
        productosCarrito.push({
          producto: response.data,
          cantidad: itemCarrito.cantidad,
        });
      }
      setproductosCarrito(productosCarrito);
    };
    getProductos();
  }, []);


  useEffect(() => {
    if (token) {
      const request = async () => {
        axios.defaults.headers["x-auth-token"] = token
        const { data } = await axios.get('/auth')
        setUser(data);
      };
      request();
    }
  }, [token])

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('carrito');
    setUser({});
    setToken('');
    window.location.href = '/';
  }

  return (
    <Router>
      <Route>
        <ScrollToTop></ScrollToTop>
      </Route>
      {user.categoryUser !== 'admin' && < NavbarR userName={user.nombre} logOut={logOut} cantidadCarrito={productosCarrito.length} />}
      {user.categoryUser && <NavbarAdminR userName={user.nombre} logOut={logOut} cantidadCarrito={productosCarrito.length} />}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/iPhone">
          <CardsIphone token={token} setproductosCarrito={setproductosCarrito} />
        </Route>
        <Route path="/Mac">
          <CardsMac token={token} setproductosCarrito={setproductosCarrito} />
        </Route>
        <Route path="/iPad">
          <CardsIpad token={token} setproductosCarrito={setproductosCarrito} />
        </Route>
        <Route path="/carrito">
          <ShoppingCart productosCarrito={productosCarrito} setproductosCarrito={setproductosCarrito} setToken={token} user={user} />
        </Route>
        <Route path="/register">
          <RegisterForm setToken={setToken} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} setToken={setToken} />
        </Route>
        <Route path="/perfil">
          <PerfilUsuario user={user} />
        </Route>
        {user.categoryUser && <Route path="/">
          <Route>
            <NavbarAdmin />
            <Route path="/admin/admin-usuarios">
              <AdminUsuarios />
            </Route>
            <Route path="/admin/admin-productos">
              <AdminProductos />
            </Route>
            <Route path="/admin/admin-mensajes">
              <AdminMensajes />
            </Route>
            <Route path="/admin/admin-ventas">
              <AdminVentas />
            </Route>
          </Route>
        </Route>}
      </Switch>
      <Footer />
    </Router>


  );
}

export default App;
