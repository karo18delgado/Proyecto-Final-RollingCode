import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/FontawesomeIcons"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarR from "./components/NavbarR";

function App() {
  return (
    <Router>
      <NavbarR />
    </Router>
  );
}

export default App;
