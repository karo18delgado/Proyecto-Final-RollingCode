import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/FontawesomeIcons"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarR from "./components/NavbarR";
import RegisterForm from "./components/RegisterForm"
import Landing from "./components/Landing"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <NavbarR />
      <Switch>
        <Route path="/home">
          <Landing />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
