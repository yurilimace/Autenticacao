import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RotaProtegida from './RotaProtegida/index'
import Home from "../Pages/Home";
import Login from "../Pages/Login";
const GerenciadorRotas = () => {
  return (
    <Router>
      <Switch>
        <Route path="/registro" component={Login} />
        <Route path="/login" component={Login} />
        <RotaProtegida path="/home" component={Home}/>
        <Redirect from="" to="/login" />
      </Switch>
    </Router>
  );
};

export default GerenciadorRotas;
