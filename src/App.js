import React from "react";
import "./App.css";
import Navbar from "./Components/pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
///Importings
import Home from "./Components/pages/HomePage/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
