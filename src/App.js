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
import PerfilUsuario from './pages/PerfilUsuario';
import AdminProductos from './components/Admin/AdminProductos';
import AdminMensajes from './components/Admin/AdminMensajes';
import ShoppingCart from './pages/ShoppingCart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ScrollToTop from './components/ScrollToTop';

const localToken = JSON.parse(localStorage.getItem('token'))?.token || "";

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localToken);

  useEffect(() => {
    if (token) {
      console.log("useEffect ~ token", token)
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
    setUser({});
    setToken('');
  }

  return (
    <Router>
      <Route>
        <ScrollToTop></ScrollToTop>
      </Route>
      <NavbarR userName={user.nombre} logOut={logOut} />
      <Switch>
        <Route path="/about">
          <About />
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
          <ShoppingCart currentUser={user}/>
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
