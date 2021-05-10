import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/FontawesomeIcons"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarR from "./components/NavbarR";
import RegisterForm from "./components/RegisterForm"

function App() {
  return (
    <Router>
      <NavbarR />
      <Switch>
        <Route path="/register">
          <RegisterForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
