import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/FontawesomeIcons"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarR from "./components/NavbarR";
import About from './components/About';



function App() {
  return (
    <Router>
      <NavbarR />
      <Switch>
        <Route> 
          <div className="fondo-pag">
          <div className="container"> <About /></div>
          </div>
          </Route>
      </Switch>
    </Router>

    
  );
}

export default App;
