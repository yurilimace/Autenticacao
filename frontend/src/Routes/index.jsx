import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
const GerenciadorRotas = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Login} />
        <Route path="/login" component={Home} />
        <Redirect from="" to="/home" />
      </Switch>
    </Router>
  );
};

export default GerenciadorRotas;
