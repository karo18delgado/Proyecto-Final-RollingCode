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
import Login from "./components/Login"
import NavbarAdmin from './components/Admin/NavbarAdmin';
import AdminUsuarios from './components/Admin/AdminUsuarios';

function App() {
  return (
    <Router>
      <NavbarR />
      <Switch>
        <Route path="/about"> 
          <div className="fondo-pag">
          <div className="container"> <About /></div>
          </div>
          </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/cards">
          <CardsIphone />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin">
          <NavbarAdmin />
          <Route path="/admin/admin-usuarios">
            <AdminUsuarios />
          </Route>
        </Route>
      </Switch>
      <Footer />
    </Router>

    
  );
}

export default App;
