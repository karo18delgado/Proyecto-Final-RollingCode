import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/FontawesomeIcons"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarR from "./components/NavbarR";
import RegisterForm from "./components/RegisterForm"
import Landing from "./components/Landing"
import Footer from "./components/Footer"
import CardsIphone from './components/CardsIphone';
import Login from "./components/Login"

function App() {
  return (
    <Router>
      <NavbarR />
      
      <Switch>
        <Route path="/home">
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
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
